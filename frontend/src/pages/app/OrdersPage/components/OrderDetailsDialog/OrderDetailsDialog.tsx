import React, { ReactNode } from 'react'

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

interface OrderDetailsDialogProps {
  children: ReactNode
}

export const OrderDetailsDialog = ({ children }: OrderDetailsDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Order: 1827fy2827d6h</DialogTitle>
          <DialogDescription>Order details</DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="text-muted-foreground">Status</TableCell>
                <TableCell className="flex justify-end">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-slate-400" />
                    <span className="font-medium text-muted-foreground">
                      Pendente
                    </span>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-muted-foreground">
                  Customer
                </TableCell>
                <TableCell className="flex justify-end">
                  Jennifer Takagi
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-muted-foreground">Phone</TableCell>
                <TableCell className="flex justify-end">
                  (34) 99999-9999
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-muted-foreground">Mail</TableCell>
                <TableCell className="flex justify-end">
                  jenni@gmail.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-muted-foreground">
                  Ordered at
                </TableCell>
                <TableCell className="flex justify-end">
                  3 minutes ago
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Produto</TableHead>
                <TableHead className="text-right">Quantity.</TableHead>
                <TableHead className="text-right">Price</TableHead>
                <TableHead className="text-right">Subtotal</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Pepperoni Pizza XXL</TableCell>
                <TableCell className="text-right">2</TableCell>
                <TableCell className="text-right">$ 69.90</TableCell>
                <TableCell className="text-right">$ 139.80</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Mozarela Pizza XXL</TableCell>
                <TableCell className="text-right">2</TableCell>
                <TableCell className="text-right">$ 59.90</TableCell>
                <TableCell className="text-right">$ 119.80</TableCell>
              </TableRow>
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={3}>Tota</TableCell>
                <TableCell className="text-right font-medium">
                  R$ 259,60
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </DialogContent>{' '}
    </Dialog>
  )
}
