import { useMutation, useQueryClient } from '@tanstack/react-query'

import { cancelOrder } from '@/server-state/api/cancel-order'
import { GetOrdersResponse } from '@/server-state/api/get-orders-list'

export const usePatchCancelOrder = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: cancelOrder,
    async onSuccess(_, { orderId }) {
      const ordersListCache = queryClient.getQueriesData<GetOrdersResponse>({
        queryKey: ['pizza-shop-app-orders'],
      })

      ordersListCache.forEach(([cacheKey, cacheData]) => {
        if (!cacheData) {
          return
        }

        queryClient.setQueryData<GetOrdersResponse>(cacheKey, {
          ...cacheData,
          orders: cacheData.orders.map((order) => {
            if (order.orderId === orderId) {
              return { ...order, status: 'canceled' }
            }

            return order
          }),
        })
      })
    },
  })
}
