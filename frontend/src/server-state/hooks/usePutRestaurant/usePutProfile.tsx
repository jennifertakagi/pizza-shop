import { GetRestaurantResponse } from "@/server-state/api/get-restaurant"
import { updateRestaurant } from "@/server-state/api/update-restaurant"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const usePutProfile =() => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: updateRestaurant,
    onSuccess(_, { description, name }) {
      const cached = queryClient.getQueryData<GetRestaurantResponse>([
        'pizza-shop-app-restaurant',
      ])

      if (cached) {
        queryClient.setQueryData<GetRestaurantResponse>(
          ['pizza-shop-app-restaurant'],
          {
            ...cached,
            name,
            description,
          },
        )
      }
    },
  })
}