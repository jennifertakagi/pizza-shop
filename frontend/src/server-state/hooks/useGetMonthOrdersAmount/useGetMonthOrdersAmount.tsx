import { useQuery } from '@tanstack/react-query'

import { getMonthOrdersAmount } from '@/server-state/api/get-month-orders-amount'

export const useGetMonthOrdersAmount = () => {
  return useQuery({
    queryKey: ['pizza-shop-app-metrics', 'month-orders-amount'],
    queryFn: getMonthOrdersAmount,
  })
}
