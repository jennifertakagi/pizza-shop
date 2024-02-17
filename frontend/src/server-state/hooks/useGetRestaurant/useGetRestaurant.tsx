import { getRestaurant } from "@/server-state/api/get-restaurant"
import { useQuery } from "@tanstack/react-query"

export const useGetRestaurant =() => {
  return useQuery({
    queryKey: ['pizza-shop-app-restaurant'],
    queryFn: getRestaurant,
    staleTime: Infinity,
  })
}