import { useQuery } from '@tanstack/react-query'

import { getOrders, GetOrdersQuery } from '@/server-state/api/get-orders'

export const useGetOrders = ({
  customerName,
  orderId,
  pageIndex,
  status,
}: GetOrdersQuery) => {
  return useQuery({
    queryKey: [
      'pizza-shop-app-orders',
      pageIndex,
      orderId,
      customerName,
      status,
    ],
    queryFn: () =>
      getOrders({
        pageIndex,
        orderId,
        customerName,
        status: status === 'all' ? null : status,
      }),
  })
}
