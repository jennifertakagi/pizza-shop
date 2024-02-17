import { updateRestaurant } from "@/server-state/api/update-restaurant"
import { useMutation } from "@tanstack/react-query"

export const usePutProfile =() => {
  return useMutation({
    mutationFn: updateRestaurant,
  })
}