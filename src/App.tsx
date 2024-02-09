import './global.css'

import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { router } from './routes'

export const App = () => {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | pizza.shop" />

      <Toaster richColors />

      <RouterProvider router={router} />
    </HelmetProvider>
  )
}
