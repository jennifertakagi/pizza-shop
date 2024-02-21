import { Loader2, Search } from 'lucide-react'

import { Button } from '../ui/button'
import { Skeleton } from '../ui/skeleton'
import { TableCell, TableRow } from '../ui/table'

interface AppSkeletonProps {
  type: 'metrics' | 'chart' | 'orders'
}

export const AppSkeleton = ({ type }: AppSkeletonProps) => {
  switch (type) {
    case 'metrics':
      return (
        <>
          <Skeleton className="mt-1 h-7 w-36" />
          <Skeleton className="h-4 w-52" />
        </>
      )
    case 'chart':
      return (
        <div className="flex h-[240px] w-full items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
        </div>
      )
    case 'orders':
      return Array.from({ length: 10 }).map((_, i) => {
        return (
          <TableRow key={i}>
            <TableCell>
              <Button disabled variant="outline" size="xs">
                <Search className="h-3 w-3" />
                <span className="sr-only">Detalhes do pedido</span>
              </Button>
            </TableCell>
            <TableCell>
              <Skeleton className="h-4 w-[172px]" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-4 w-[148px]" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-4 w-[110px]" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-4 w-[200px]" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-4 w-[64px]" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-4 w-[92px]" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-4 w-[92px]" />
            </TableCell>
          </TableRow>
        )
      })
    default:
      ;<></>
  }
}
