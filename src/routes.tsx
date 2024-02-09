import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layouts/AppLayout'
import { AuthLayout } from './pages/_layouts/AuthLayout'
import { DashboardPage } from './pages/app/DashboardPage'
import { OrdersPage } from './pages/app/OrdersPage'
import { SignInPage } from './pages/auth/SignInPage'
import { SignUpPage } from './pages/auth/SignUpPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <DashboardPage />,
      },
      {
        path: '/orders',
        element: <OrdersPage />,
      },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: '/sign-in',
        element: <SignInPage />,
      },
      {
        path: '/sign-up',
        element: <SignUpPage />,
      },
    ],
  },
])
