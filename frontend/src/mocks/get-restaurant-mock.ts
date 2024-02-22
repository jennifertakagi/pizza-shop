import { http, HttpResponse } from 'msw'

import { GetRestaurantResponse } from '@/server-state/api/get-restaurant'

export const getRestaurantMock = http.get<never, never, GetRestaurantResponse>(
  '/managed-restaurant',
  () => {
    return HttpResponse.json({
      id: 'custom-restaurant-id',
      name: 'Pizza Shop',
      description: 'Custom restaurant description.',
      managerId: 'custom-user-id',
      createdAt: new Date(),
      updatedAt: null,
    })
  },
)
