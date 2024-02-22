import { Helmet } from 'react-helmet-async'
import { useSearchParams } from 'react-router-dom'
import { z } from 'zod'

import { AppSkeleton } from '@/components/AppSkeleton'
import { Table, TableBody, TableHeader } from '@/components/ui/table'
import { useGetOrders } from '@/server-state/hooks/useGetOrders'

import { OrderTableBody } from './components/OrderTableBody'
import { OrderTableFilters } from './components/OrderTableFilters'
import { OrderTableHeader } from './components/OrderTableHeader'
import { OrderTablePagination } from './components/OrderTablePagination'

export const OrdersPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const orderId = searchParams.get('orderId')
  const customerName = searchParams.get('customerName')
  const status = searchParams.get('status')

  const pageIndex = z.coerce
    .number()
    .transform((page) => page - 1)
    .parse(searchParams.get('page') ?? '1')

  const { data: orders, isLoading: isLoadingOrders } = useGetOrders({
    customerName,
    orderId,
    pageIndex,
    status,
  })

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
              {orders?.orders.map((order) => (
                <OrderTableBody key={order.orderId} order={order} />
              ))}
            </TableBody>
          </Table>
        </div>

        {isLoadingOrders && <AppSkeleton type="orders" />}

        <OrderTablePagination
          onPageChange={handlePagination}
          pageIndex={orders?.meta.pageIndex}
          perPage={orders?.meta.perPage}
          totalCount={orders?.meta.totalCount}
        />
      </div>
    </>
  )
}
