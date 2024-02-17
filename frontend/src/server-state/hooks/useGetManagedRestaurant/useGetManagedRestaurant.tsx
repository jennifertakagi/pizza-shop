import { getManagedRestaurant } from "@/server-state/api/get-managed-restaurant"
import { useQuery } from "@tanstack/react-query"

export const useGetManagedRestaurant =() => {
  return useQuery({
    queryKey: ['pizza-shop-app-managed-restaurant'],
    queryFn: getManagedRestaurant,
  })
}