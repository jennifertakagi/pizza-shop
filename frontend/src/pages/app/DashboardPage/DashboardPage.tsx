import { Helmet } from 'react-helmet-async'

import { DayOrdersAmountCard } from './components/DayOrdersAmountCard'
import { MonthCanceledOrdersAmountCard } from './components/MonthCanceledOrdersAmountCard'
import { MonthOrdersAmountCard } from './components/MonthOrdersAmountCard'
import { MonthRevenueCard } from './components/MonthRevenueCard'
import { PopularProductsChart } from './components/PopularProductsChart'
import { RevenueChart } from './components/RevenueChart'

export const DashboardPage = () => {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

        <div className="grid grid-cols-4 gap-4">
          <MonthRevenueCard />
          <MonthOrdersAmountCard />
          <DayOrdersAmountCard />
          <MonthCanceledOrdersAmountCard />
        </div>
        <div className="grid grid-cols-9 gap-4">
          <RevenueChart />
          <PopularProductsChart />
        </div>
      </div>
    </>
  )
}
