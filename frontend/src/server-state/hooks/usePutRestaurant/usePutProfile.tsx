import { QueryClient, useMutation, useQueryClient } from '@tanstack/react-query'

import { GetRestaurantResponse } from '@/server-state/api/get-restaurant'
import { updateRestaurant } from '@/server-state/api/update-restaurant'

function updateRestaurantCache({
  name,
  description,
  queryClient,
}: {
  name: string
  description: string | null
  queryClient: QueryClient
}) {
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

export const usePutProfile = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: updateRestaurant,
    onMutate({ description, name }) {
      const { cached } = updateRestaurantCache({
        description,
        name,
        queryClient,
      })

      return { previousProfile: cached }
    },
    onError(_, __, context) {
      if (context?.previousProfile) {
        updateRestaurantCache({ ...context.previousProfile, queryClient })
      }
    },
  })
}
