import { http, HttpResponse } from 'msw'

import { UpdateRestaurantBody } from '@/server-state/api/update-restaurant'

export const updateRestaurantMock = http.put<never, UpdateRestaurantBody>(
  '/profile',
  async ({ request }) => {
    const { name } = await request.json()

    if (name === 'Rocket Pizza') {
      return new HttpResponse(null, { status: 204 })
    }

    return new HttpResponse(null, { status: 400 })
  },
)
