import { http, HttpResponse } from 'msw'

import { GetUserProfileResponse } from '@/server-state/api/get-user-profile'

export const getUserProfileMock = http.get<
  never,
  never,
  GetUserProfileResponse
>('/me', () => {
  return HttpResponse.json({
    id: 'custom-user-id',
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '81237127123',
    role: 'manager',
    createdAt: new Date(),
    updatedAt: null,
  })
})
