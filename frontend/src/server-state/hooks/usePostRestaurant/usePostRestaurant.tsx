import { registerRestaurant } from "@/server-state/api/register-restaurant"
import { useMutation } from "@tanstack/react-query"

export const usePostRestaurant =() => {
  return useMutation({
    mutationFn: registerRestaurant,
  })
}