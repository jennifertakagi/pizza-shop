import { useMutation, useQueryClient } from '@tanstack/react-query'

import { cancelOrder } from '@/server-state/api/cancel-order'
import { updateOrdersStatusesCache } from '@/utils'

export const usePatchCancelOrder = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: cancelOrder,
    async onSuccess(_, { orderId }) {
      updateOrdersStatusesCache({ orderId, status: 'canceled', queryClient })
    },
  })
}
