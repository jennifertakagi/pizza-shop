import { createBrowserRouter } from 'react-router-dom'

import { DashboardPage } from './pages/app/DashboardPage'
import { SignInPage } from './pages/auth/SignInPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardPage />,
  },
  {
    path: '/sign-in',
    element: <SignInPage />,
  },
])
