import { GetRestaurantResponse } from "@/server-state/api/get-restaurant"
import { updateRestaurant } from "@/server-state/api/update-restaurant"
import { useMutation, useQueryClient } from "@tanstack/react-query"

function updateRestaurantCache({
  name,
  description,
}: {
  name: string,
  description: string | null
}) {
  const queryClient = useQueryClient()
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

  return { cached }
}

export const usePutProfile =() => {

  return useMutation({
    mutationFn: updateRestaurant,
    onMutate({ description, name }) {
      const { cached } = updateRestaurantCache({ description, name })

      return { previousProfile: cached }
    },
    onError(_, __, context) {
      if (context?.previousProfile) {
        updateRestaurantCache(context.previousProfile)
      }
    }
  })
}