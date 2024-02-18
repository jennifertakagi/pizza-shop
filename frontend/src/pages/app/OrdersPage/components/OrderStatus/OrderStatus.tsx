type OrderStatus =
  | 'pending'
  | 'canceled'
  | 'processing'
  | 'delivering'
  | 'delivered'

const orderStatusMap: Record<OrderStatus, string> = {
  pending: 'Pending',
  canceled: 'Canceled',
  delivered: 'Delivered',
  delivering: 'Delivering',
  processing: 'Processing',
}

interface OrderStatusProps {
  status: OrderStatus
}

export const OrderStatus = ({ status }: OrderStatusProps) => {
  const getOrderByStatus = () => {
    switch (status) {
      case 'pending':
        return <span className="h-2 w-2 rounded-full bg-slate-400" />
      case 'canceled':
        return <span className="h-2 w-2 rounded-full bg-rose-500" />
      case 'delivered':
        return <span className="h-2 w-2 rounded-full bg-emerald-500" />;
      default:
        return <span className="h-2 w-2 rounded-full bg-amber-500" />;
    }
  }

  return (
    <div className="flex items-center gap-2">
      {getOrderByStatus()}

      <span className="font-medium text-muted-foreground">
        {orderStatusMap[status]}
      </span>
    </div>
  )
}