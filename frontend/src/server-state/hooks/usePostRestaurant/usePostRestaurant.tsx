import { useMutation } from '@tanstack/react-query'

import { registerRestaurant } from '@/server-state/api/register-restaurant'

export const usePostRestaurant = () => {
  return useMutation({
    mutationFn: registerRestaurant,
  })
}
