import { QueryClient } from '@tanstack/react-query'

import { OrderStatus } from '@/pages/app/OrdersPage/components/OrderStatus'
import { GetOrdersResponse } from '@/server-state/api/get-orders'

interface UpdateOrdersStatusesCacheParams {
  orderId: string
  status: OrderStatus
  queryClient: QueryClient
}

export function updateOrdersStatusesCache({
  orderId,
  queryClient,
  status,
}: UpdateOrdersStatusesCacheParams) {
  const ordersCache = queryClient.getQueriesData<GetOrdersResponse>({
    queryKey: ['pizza-shop-app-orders'],
  })

  ordersCache.forEach(([cacheKey, cacheData]) => {
    if (!cacheData) {
      return
    }

    queryClient.setQueryData<GetOrdersResponse>(cacheKey, {
      ...cacheData,
      orders: cacheData.orders.map((order) => {
        if (order.orderId === orderId) {
          return { ...order, status }
        }

        return order
      }),
    })
  })
}
