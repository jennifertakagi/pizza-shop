import { DollarSign } from 'lucide-react'

import { AppSkeleton } from '@/components/AppSkeleton'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useGetMonthRevenue } from '@/server-state/hooks/useGetMonthRevenue'
import { formatCurrency } from '@/utils'

export const MonthRevenueCard = () => {
  const { data: monthRevenue } = useGetMonthRevenue()

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Total revenue (month)
        </CardTitle>
        <DollarSign className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        {monthRevenue ? (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {formatCurrency(monthRevenue.receipt / 100)}
            </span>
            <p className="text-xs text-muted-foreground">
              {monthRevenue.diffFromLastMonth >= 0 ? (
                <>
                  <span className="text-emerald-500 dark:text-emerald-400">
                    +{monthRevenue.diffFromLastMonth}%
                  </span>{' '}
                  compared to last month
                </>
              ) : (
                <>
                  <span className="text-rose-500 dark:text-rose-400">
                    {monthRevenue.diffFromLastMonth}%
                  </span>{' '}
                  compared to last month
                </>
              )}
            </p>
          </>
        ) : (
          <AppSkeleton type="metrics" />
        )}
      </CardContent>
    </Card>
  )
}
