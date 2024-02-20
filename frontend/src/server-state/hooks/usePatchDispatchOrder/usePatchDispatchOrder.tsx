import { useMutation, useQueryClient } from '@tanstack/react-query'

import { dispatchOrder } from '@/server-state/api/dispatch-order'
import { updateOrdersStatusesCache } from '@/utils'

export const usePatchDispatchOrder = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: dispatchOrder,
    async onSuccess(_, { orderId }) {
      updateOrdersStatusesCache({ orderId, status: 'delivering', queryClient })
    },
  })
}
