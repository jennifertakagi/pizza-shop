import { TableHead, TableRow } from '@/components/ui/table'

export const OrderTableHeader = () => {
  return (
    <TableRow>
      <TableHead className="w-[64px]"></TableHead>
      <TableHead className="w-[140px]">ID</TableHead>
      <TableHead className="w-[180px]">Ordered at</TableHead>
      <TableHead className="w-[140px]">Status</TableHead>
      <TableHead>Customer</TableHead>
      <TableHead className="w-[140px]">Order value</TableHead>
      <TableHead className="w-[164px]"></TableHead>
      <TableHead className="w-[132px]"></TableHead>
    </TableRow>
  )
}
