import { ReactNode, useState } from 'react'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { useGetOrderDetails } from '@/server-state/hooks/useGetOrderDetails'
import { formatCurrency, formatDateToNow } from '@/utils'

import { OrderStatus } from '../OrderStatus'

interface OrderDetailsDialogProps {
  orderId: string
  children: ReactNode
}

export const OrderDetailsDialog = ({
  children,
  orderId,
}: OrderDetailsDialogProps) => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)

  const { data: order } = useGetOrderDetails({
    orderId,
    options: { enabled: isDetailsOpen },
  })

  return (
    <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Order: {orderId}</DialogTitle>
          <DialogDescription>Order details</DialogDescription>
        </DialogHeader>

        {order && (
          <div className="space-y-6">
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell className="text-muted-foreground">
                    Status
                  </TableCell>
                  <TableCell className="flex justify-end">
                    <OrderStatus status={order.status} />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-muted-foreground">
                    Customer
                  </TableCell>
                  <TableCell className="flex justify-end">
                    {order.customer.name}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-muted-foreground">Phone</TableCell>
                  <TableCell className="flex justify-end">
                    {order.customer.phone ?? 'Not informed'}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-muted-foreground">Email</TableCell>
                  <TableCell className="flex justify-end">
                    {order.customer.email}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-muted-foreground">
                    Ordered at
                  </TableCell>
                  <TableCell className="flex justify-end">
                    {formatDateToNow(order.createdAt)}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product</TableHead>
                  <TableHead className="text-right">Quantity</TableHead>
                  <TableHead className="text-right">Price</TableHead>
                  <TableHead className="text-right">Subtotal</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {order.orderItems.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.product.name}</TableCell>
                    <TableCell className="text-right">
                      {item.quantity}
                    </TableCell>
                    <TableCell className="text-right">
                      {formatCurrency(item.priceInCents / 100)}
                    </TableCell>
                    <TableCell className="text-right">
                      {formatCurrency(
                        (item.priceInCents * item.quantity) / 100,
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell colSpan={3}>Total</TableCell>
                  <TableCell className="text-right font-medium">
                    {formatCurrency(order.totalInCents / 100)}
                  </TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
