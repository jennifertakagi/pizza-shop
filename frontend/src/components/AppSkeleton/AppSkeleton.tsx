import { Loader2 } from 'lucide-react'

import { Skeleton } from '../ui/skeleton'

interface AppSkeletonProps {
  type: 'metrics' | 'chart'
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
    default:
      ;<></>
  }
}
