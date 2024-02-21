import { useQuery } from '@tanstack/react-query'

import { getDayOrdersAmount } from '@/server-state/api/get-day-orders-amount'

export const useGetDayOrdersAmount = () => {
  return useQuery({
    queryKey: ['pizza-shop-app-metrics', 'day-orders-amount'],
    queryFn: getDayOrdersAmount,
  })
}
