import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { useGetRestaurant } from '@/server-state/hooks/useGetRestaurant'
import { usePutProfile } from '@/server-state/hooks/usePutRestaurant'

import { Button } from '../ui/button'
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Textarea } from '../ui/textarea'

const storeProfileSchema = z.object({
  name: z.string().min(1),
  description: z.string(),
})

type StoreProfileSchema = z.infer<typeof storeProfileSchema>

export function StoreProfileDialog() {
  const { data: restaurant } = useGetRestaurant()
  const { mutateAsync: putProfile } = usePutProfile()

  const { register, handleSubmit } = useForm<StoreProfileSchema>({
    resolver: zodResolver(storeProfileSchema),
    values: {
      name: restaurant?.name ?? '',
      description: restaurant?.description ?? '',
    },
  })

  async function handleUpdateProfile(data: StoreProfileSchema) {
    try {
      await putProfile({
        name: data.name,
        description: data.description,
      })

      toast.success('Restaurant updated successfully!')
    } catch {
      toast.error('Error when updating restaurant. Try again')
    }
  }

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Restaurant information</DialogTitle>
        <DialogDescription>
          Update your Restaurant information visible to your customer
        </DialogDescription>
      </DialogHeader>

      <form onSubmit={handleSubmit(handleUpdateProfile)}>
        <div className="space-y-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="name">
              Name
            </Label>
            <Input className="col-span-3" id="name" {...register('name')} />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="description">
              Description
            </Label>
            <Textarea
              className="col-span-3"
              id="description"
              {...register('description')}
            />
          </div>
        </div>

        <DialogFooter>
          <DialogClose>
            <Button variant="ghost" type="button">
              Cancel
            </Button>
          </DialogClose>
          <Button type="submit" variant="success">
            Save
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  )
}
