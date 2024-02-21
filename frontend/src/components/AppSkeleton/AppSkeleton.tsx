import { Skeleton } from '../ui/skeleton'

interface AppSkeletonProps {
  type: 'metrics'
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

    default:
      ;<></>
  }
}
