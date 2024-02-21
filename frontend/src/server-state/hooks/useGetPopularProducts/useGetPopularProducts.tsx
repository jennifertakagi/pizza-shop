import { useQuery } from '@tanstack/react-query'

import { getPopularProducts } from '@/server-state/api/get-popular-products'

export const useGetPopularProducts = () => {
  return useQuery({
    queryKey: ['pizza-shop-app-metrics', 'popular-products'],
    queryFn: getPopularProducts,
  })
}
