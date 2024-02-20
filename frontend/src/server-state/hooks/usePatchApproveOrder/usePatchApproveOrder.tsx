import { useMutation, useQueryClient } from '@tanstack/react-query'

import { approveOrder } from '@/server-state/api/approve-order'
import { updateOrdersStatusesCache } from '@/utils'

export const usePatchApproveOrder = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: approveOrder,
    async onSuccess(_, { orderId }) {
      updateOrdersStatusesCache({ orderId, status: 'processing', queryClient })
    },
  })
}
