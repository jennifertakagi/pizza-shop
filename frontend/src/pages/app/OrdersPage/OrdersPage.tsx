import { Helmet } from 'react-helmet-async'
import { useSearchParams } from 'react-router-dom'
import { z } from 'zod'

import { Table, TableBody, TableHeader } from '@/components/ui/table'

import { OrderTableBody } from './components/OrderTableBody'
import { OrderTableFilters } from './components/OrderTableFilters'
import { OrderTableHeader } from './components/OrderTableHeader'
import { OrderTablePagination } from './components/OrderTablePagination'
import { useGetOrdersList } from '@/server-state/hooks/useGetOrdersList'

export const OrdersPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const pageIndex = z.coerce
  .number()
  .transform((page) => page - 1)
  .parse(searchParams.get('page') ?? '1')

  const { data: ordersList } = useGetOrdersList(pageIndex)

  function handlePagination(pageIndex: number) {
    setSearchParams((state) => {
      state.set('page', (pageIndex + 1).toString())

      return state
    })
  }

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
            {ordersList?.orders.map((order) =>
              <OrderTableBody key={order.orderId} order={order} />
            )}
            </TableBody>
          </Table>
        </div>
        <OrderTablePagination
          onPageChange={handlePagination}
          pageIndex={ordersList?.meta.pageIndex}
          perPage={ordersList?.meta.perPage}
          totalCount={ordersList?.meta.totalCount}
        />
      </div>
    </>
  )
}
