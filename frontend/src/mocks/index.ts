import { setupWorker } from 'msw/browser'

import { env } from '@/env'

import { getDailyRevenueInPeriodMock } from './get-daily-revenue-in-period-mock'
import { getDayOrdersAmountMock } from './get-day-orders-amount-mock'
import { getMonthCanceledOrdersAmountMock } from './get-month-cancelled-orders-amount-mock'
import { getMonthOrdersAmountMock } from './get-month-orders-amount-mock'
import { getMonthRevenueMock } from './get-month-revenue-mock'
import { getPopularProductsMock } from './get-popular-products-mock'
import { getRestaurantMock } from './get-restaurant-mock'
import { getUserProfileMock } from './get-user-profile-mock'
import { registerRestaurantMock } from './register-restaurant-mock'
import { updateRestaurantMock } from './update-restaurant-mock'
import { userSignInMock } from './user-sign-in-mock'

export const worker = setupWorker(
  getRestaurantMock,
  getUserProfileMock,
  updateRestaurantMock,
  userSignInMock,
  registerRestaurantMock,
  getDayOrdersAmountMock,
  getMonthOrdersAmountMock,
  getMonthCanceledOrdersAmountMock,
  getMonthRevenueMock,
  getDailyRevenueInPeriodMock,
  getPopularProductsMock,
)

export async function enableMSW() {
  if (env.MODE !== 'test') {
    return
  }

  await worker.start()
}
