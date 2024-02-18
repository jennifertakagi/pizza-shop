import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useSearchParams } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { usePostUserSignIn } from '@/server-state/hooks/usePostUserSignIn'
const signInForm = z.object({
  email: z.string().email(),
})

type SignInForm = z.infer<typeof signInForm>

export const SignInPage = () => {
  const [searchParams] = useSearchParams()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>({
    defaultValues: {
      email: searchParams.get('email') ?? '',
    },
  })

  const { mutateAsync: postUserSignIn } = usePostUserSignIn()

  async function handleSignIn(data: SignInForm) {
    try {
      await postUserSignIn({ email: data.email })

      toast.success('We have sent an authentication link to your email', {
        action: {
          label: 'Resend',
          onClick: () => {
            handleSignIn(data)
          },
        },
      })
    } catch (error) {
      toast.error('Invalid credential')
    }
  }

  return (
    <>
      <Helmet title="Login" />

      <div className="p-8">
        <Button variant="ghost" asChild className="absolute right-8 top-8">
          <Link to="/sign-up">New restaurant</Link>
        </Button>

        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Access panel
            </h1>
            <p className="text-sm text-muted-foreground">
              Track your sales through the partner panel!
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit(handleSignIn)}>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" {...register('email')} />
            </div>

            <Button disabled={isSubmitting} className="w-full" type="submit">
              Access panel
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
