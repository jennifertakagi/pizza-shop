import { useQuery } from '@tanstack/react-query'

import { getMonthRevenue } from '@/server-state/api/get-month-revenue'

export const useGetMonthRevenue = () => {
  return useQuery({
    queryKey: ['pizza-shop-app-metrics', 'month-revenue'],
    queryFn: getMonthRevenue,
  })
}
