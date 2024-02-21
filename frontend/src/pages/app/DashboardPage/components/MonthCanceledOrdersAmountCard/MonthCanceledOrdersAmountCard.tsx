import { DollarSign } from 'lucide-react'

import { AppSkeleton } from '@/components/AppSkeleton'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useGetMonthCanceledOrdersAmount } from '@/server-state/hooks/useGetMonthCanceledOrdersAmount'

export const MonthCanceledOrdersAmountCard = () => {
  const { data: monthCanceledOrdersAmount } = useGetMonthCanceledOrdersAmount()

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Canceled (month)
        </CardTitle>
        <DollarSign className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        {monthCanceledOrdersAmount ? (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {monthCanceledOrdersAmount.amount.toLocaleString('en-US')}
            </span>
            <p className="text-xs text-muted-foreground">
              {monthCanceledOrdersAmount.diffFromLastMonth < 0 ? (
                <>
                  <span className="text-emerald-500 dark:text-emerald-400">
                    {monthCanceledOrdersAmount.diffFromLastMonth}%
                  </span>{' '}
                  compared to last month
                </>
              ) : (
                <>
                  <span className="text-rose-500 dark:text-rose-400">
                    +{monthCanceledOrdersAmount.diffFromLastMonth}%
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
