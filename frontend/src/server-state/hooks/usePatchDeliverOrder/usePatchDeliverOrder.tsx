import { useMutation, useQueryClient } from '@tanstack/react-query'

import { deliverOrder } from '@/server-state/api/deliver-order'
import { updateOrdersStatusesCache } from '@/utils'

export const usePatchDeliverOrder = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: deliverOrder,
    async onSuccess(_, { orderId }) {
      updateOrdersStatusesCache({ orderId, status: 'delivered', queryClient })
    },
  })
}
