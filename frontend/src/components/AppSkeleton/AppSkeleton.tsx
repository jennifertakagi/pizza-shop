import { Loader2, Search, Table } from 'lucide-react'

import { Button } from '../ui/button'
import { Skeleton } from '../ui/skeleton'
import {
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table'

interface AppSkeletonProps {
  type: 'metrics' | 'chart' | 'orders' | 'order-detail'
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
    case 'order-detail':
      return (
        <div className="space-y-6">
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="text-muted-foreground">Status</TableCell>
                <TableCell className="flex justify-end">
                  <Skeleton className="h-5 w-20" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-muted-foreground">Cliente</TableCell>
                <TableCell className="flex justify-end">
                  <Skeleton className="h-5 w-[164px]" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-muted-foreground">
                  Telefone
                </TableCell>
                <TableCell className="flex justify-end">
                  <Skeleton className="h-5 w-[140px]" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-muted-foreground">E-mail</TableCell>
                <TableCell className="flex justify-end">
                  <Skeleton className="h-5 w-[200px]" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-muted-foreground">
                  Realizado há
                </TableCell>
                <TableCell className="flex justify-end">
                  <Skeleton className="h-5 w-[148px]" />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Produto</TableHead>
                <TableHead className="text-right">Qtd.</TableHead>
                <TableHead className="text-right">Preço</TableHead>
                <TableHead className="text-right">Subtotal</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array.from({ length: 2 }).map((_, i) => {
                return (
                  <TableRow key={i}>
                    <TableCell>
                      <Skeleton className="h-5 w-[140px]" />
                    </TableCell>
                    <TableCell className="text-right">
                      <Skeleton className="ml-auto h-5 w-3" />
                    </TableCell>
                    <TableCell className="text-right">
                      <Skeleton className="ml-auto h-5 w-12" />
                    </TableCell>
                    <TableCell className="text-right">
                      <Skeleton className="ml-auto h-5 w-12" />
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={3}>Total do pedido</TableCell>
                <TableCell className="text-right font-medium">
                  <Skeleton className="h-5 w-20" />
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      )
    default:
      ;<></>
  }
}
