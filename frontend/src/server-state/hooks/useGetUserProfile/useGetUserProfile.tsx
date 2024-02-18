import { useQuery } from '@tanstack/react-query'

import { getUserProfile } from '@/server-state/api/get-user-profile'

export const useGetUserProfile = () => {
  return useQuery({
    queryKey: ['pizza-shop-app-profile'],
    queryFn: getUserProfile,
    staleTime: Infinity,
  })
}
