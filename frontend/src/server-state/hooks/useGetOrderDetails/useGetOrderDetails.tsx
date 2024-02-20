import { QueryObserverOptions, useQuery } from '@tanstack/react-query'

import { getOrderDetails } from '@/server-state/api/get-order-details'

interface GetOrderDetailsParams {
  orderId: string
  options?: QueryObserverOptions
}
export const useGetOrderDetails = ({
  orderId,
  options,
}: GetOrderDetailsParams) => {
  return useQuery({
    queryKey: ['order', orderId],
    queryFn: () => getOrderDetails({ orderId }),
    enabled: options?.enabled,
  })
}
