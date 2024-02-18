import { useMutation } from '@tanstack/react-query'

import { userSignIn } from '@/server-state/api/user-sign-in'

export const usePostUserSignIn = () => {
  return useMutation({
    mutationFn: userSignIn,
  })
}
