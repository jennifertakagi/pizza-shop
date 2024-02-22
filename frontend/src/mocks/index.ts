import { setupWorker } from 'msw/browser'

import { env } from '@/env'

import { getDailyRevenueInPeriodMock } from './get-daily-revenue-in-period-mock'
import { getDayOrdersAmountMock } from './get-day-orders-amount-mock'
import { getMonthCanceledOrdersAmountMock } from './get-month-cancelled-orders-amount-mock'
import { getMonthOrdersAmountMock } from './get-month-orders-amount-mock'
import { getMonthRevenueMock } from './get-month-revenue-mock'
import { getOrderDetailsMock } from './get-order-details-mock'
import { getOrdersMock } from './get-orders-mock'
import { getPopularProductsMock } from './get-popular-products-mock'
import { getRestaurantMock } from './get-restaurant-mock'
import { getUserProfileMock } from './get-user-profile-mock'
import { registerRestaurantMock } from './register-restaurant-mock'
import { updateRestaurantMock } from './update-restaurant-mock'
import { userSignInMock } from './user-sign-in-mock'
import { userSignOutMock } from './user-sign-out-mock'

export const worker = setupWorker(
  getDailyRevenueInPeriodMock,
  getDayOrdersAmountMock,
  getMonthCanceledOrdersAmountMock,
  getMonthOrdersAmountMock,
  getMonthRevenueMock,
  getOrderDetailsMock,
  getOrdersMock,
  getPopularProductsMock,
  getRestaurantMock,
  getUserProfileMock,
  registerRestaurantMock,
  updateRestaurantMock,
  userSignInMock,
  userSignOutMock,
)

export async function enableMSW() {
  if (env.MODE !== 'test') {
    return
  }

  await worker.start()
}
