import { Helmet } from 'react-helmet-async'

import { Table, TableBody, TableHeader } from '@/components/ui/table'

import { OrderTableBody } from './components/OrderTableBody'
import { OrderTableFilters } from './components/OrderTableFilters'
import { OrderTableHeader } from './components/OrderTableHeader'
import { OrderTablePagination } from './components/OrderTablePagination'

export const OrdersPage = () => {
  return (
    <>
      <Helmet title="Orders" />

      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Orders</h1>
      </div>
      <div className="space-y-2.5">
        <OrderTableFilters />

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <OrderTableHeader />
            </TableHeader>
            <TableBody>
              {Array.from({ length: 10 }).map((_, i) => (
                <OrderTableBody key={i} />
              ))}
            </TableBody>
          </Table>
          <OrderTablePagination pageIndex={0} totalCount={105} perPage={10} />
        </div>
      </div>
    </>
  )
}
