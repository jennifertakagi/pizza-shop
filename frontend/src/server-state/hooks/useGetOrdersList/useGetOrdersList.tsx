import { getOrdersList } from "@/server-state/api/get-orders-list"
import { useQuery } from "@tanstack/react-query"

export const useGetOrdersList = (pageIndex: number) => {
  return useQuery({
    queryKey: ['pizza-shop-app-orders-list', pageIndex],
    queryFn: () => getOrdersList({ pageIndex }),
  })
}