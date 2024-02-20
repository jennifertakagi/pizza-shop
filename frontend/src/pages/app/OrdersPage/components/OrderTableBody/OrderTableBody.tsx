import { ArrowRight, Search, X } from 'lucide-react'
import { useMemo } from 'react'

import { Button } from '@/components/ui/button'
import { TableCell, TableRow } from '@/components/ui/table'
import { usePatchApproveOrder } from '@/server-state/hooks/usePatchApproveOrder'
import { usePatchCancelOrder } from '@/server-state/hooks/usePatchCancelOrder'
import { usePatchDeliverOrder } from '@/server-state/hooks/usePatchDeliverOrder'
import { usePatchDispatchOrder } from '@/server-state/hooks/usePatchDispatchOrder'
import { formatCurrency, formatDateToNow } from '@/utils'

import { OrderDetailsDialog } from '../OrderDetailsDialog'
import { OrderStatus } from '../OrderStatus'

interface OrderTableBodyProps {
  order: {
    orderId: string
    createdAt: string
    status: 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered'
    customerName: string
    total: number
  }
}

export const OrderTableBody = ({ order }: OrderTableBodyProps) => {
  const {
    mutateAsync: patchApproveOrder,
    isPending: isPendingPatchApproveOrder,
  } = usePatchApproveOrder()
  const {
    mutateAsync: patchCancelOrder,
    isPending: isPendingPatchCancelOrder,
  } = usePatchCancelOrder()
  const {
    mutateAsync: patchDeliverOrder,
    isPending: isPendingPatchDeliverOrder,
  } = usePatchDeliverOrder()
  const {
    mutateAsync: patchDispatchOrder,
    isPending: isPendingPatchDispatchOrder,
  } = usePatchDispatchOrder()

  const getOrderActionByStatus = useMemo(() => {
    switch (order.status) {
      case 'pending':
        return (
          <Button
            variant="outline"
            disabled={isPendingPatchApproveOrder}
            size="xs"
            onClick={() => patchApproveOrder({ orderId: order.orderId })}
          >
            <ArrowRight className="mr-2 h-3 w-3" />
            Approve
          </Button>
        )
      case 'processing':
        return (
          <Button
            variant="outline"
            disabled={isPendingPatchDispatchOrder}
            size="xs"
            onClick={() => patchDispatchOrder({ orderId: order.orderId })}
          >
            <ArrowRight className="mr-2 h-3 w-3" />
            On delivery
          </Button>
        )
      case 'delivering':
        return (
          <Button
            variant="outline"
            disabled={isPendingPatchDeliverOrder}
            size="xs"
            onClick={() => patchDeliverOrder({ orderId: order.orderId })}
          >
            <ArrowRight className="mr-2 h-3 w-3" />
            Entregue
          </Button>
        )

      default:
        return null
    }
  }, [order.status])

  return (
    <TableRow>
      <TableCell>
        <OrderDetailsDialog orderId={order.orderId}>
          <Button variant="outline" size="xs">
            <Search className="h-3 w-3" />
            <span className="sr-only">Details</span>
          </Button>
        </OrderDetailsDialog>
      </TableCell>
      <TableCell className="font-mono text-xs font-medium">
        {order.orderId}
      </TableCell>
      <TableCell className="text-muted-foreground">
        {formatDateToNow(order.createdAt)}
      </TableCell>
      <TableCell>
        <OrderStatus status={order.status} />
      </TableCell>
      <TableCell className="font-medium">{order.customerName}</TableCell>
      <TableCell className="font-medium">
        {formatCurrency(order.total)}
      </TableCell>
      <TableCell>{getOrderActionByStatus}</TableCell>
      <TableCell>
        <Button
          disabled={
            !['pending', 'processing'].includes(order.status) ||
            isPendingPatchCancelOrder
          }
          onClick={() => patchCancelOrder({ orderId: order.orderId })}
          variant="ghost"
          size="xs"
        >
          <X className="mr-2 h-3 w-3" />
          Cancel
        </Button>
      </TableCell>
    </TableRow>
  )
}
