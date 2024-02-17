import { getProfile } from "@/server-state/api/get-profile"
import { useQuery } from "@tanstack/react-query"

export const useGetProfile =() => {
  return useQuery({
    queryKey: ['pizza-shop-app-profile'],
    queryFn: getProfile,
  })
}