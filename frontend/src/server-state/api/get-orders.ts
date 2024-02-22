import { api } from '@/lib/axios'

export interface GetOrdersQuery {
  customerName?: string | null
  orderId?: string | null
  pageIndex?: number | null
  status?: string | null
}

export interface GetOrdersResponse {
  orders: {
    orderId: string
    createdAt: string
    status: 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered'
    customerName: string
    total: number
  }[]
  meta: {
    pageIndex: number
    perPage: number
    totalCount: number
  }
}

export async function getOrders({
  customerName,
  orderId,
  pageIndex,
  status,
}: GetOrdersQuery) {
  const response = await api.get<GetOrdersResponse>('/orders', {
    params: {
      customerName,
      orderId,
      pageIndex,
      status,
    },
  })

  return response.data
}
