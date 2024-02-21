import { useQuery } from '@tanstack/react-query'

import { getMonthCanceledOrdersAmount } from '@/server-state/api/get-month-canceled-orders-amount'

export const useGetMonthCanceledOrdersAmount = () => {
  return useQuery({
    queryKey: ['pizza-shop-app-metrics', 'month-canceled-orders-amount'],
    queryFn: getMonthCanceledOrdersAmount,
  })
}
