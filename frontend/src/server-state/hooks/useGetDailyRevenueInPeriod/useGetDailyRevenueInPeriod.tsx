import { useQuery } from '@tanstack/react-query'
import { DateRange } from 'react-day-picker'

import { getDailyRevenueInPeriod } from '@/server-state/api/get-daily-revenue-in-period'

export const useGetDailyRevenueInPeriod = (dateRange?: DateRange) => {
  return useQuery({
    queryKey: ['pizza-shop-app-metrics', 'daily-revenue-in-period', dateRange],
    queryFn: () =>
      getDailyRevenueInPeriod({
        from: dateRange?.from,
        to: dateRange?.to,
      }),
  })
}
