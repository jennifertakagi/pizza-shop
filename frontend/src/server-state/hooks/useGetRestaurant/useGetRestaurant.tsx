import { useQuery } from '@tanstack/react-query'

import { getRestaurant } from '@/server-state/api/get-restaurant'

export const useGetRestaurant = () => {
  return useQuery({
    queryKey: ['pizza-shop-app-restaurant'],
    queryFn: getRestaurant,
    staleTime: Infinity,
  })
}
