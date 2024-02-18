import { useQuery } from '@tanstack/react-query'

import {
  getOrdersList,
  GetOrdersQuery,
} from '@/server-state/api/get-orders-list'

export const useGetOrdersList = ({
  customerName,
  orderId,
  pageIndex,
  status,
}: GetOrdersQuery) => {
  return useQuery({
    queryKey: [
      'pizza-shop-app-orders-list',
      pageIndex,
      orderId,
      customerName,
      status,
    ],
    queryFn: () =>
      getOrdersList({
        pageIndex,
        orderId,
        customerName,
        status: status === 'all' ? null : status,
      }),
  })
}
