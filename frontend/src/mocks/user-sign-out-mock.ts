import { http, HttpResponse } from 'msw'

export const userSignOutMock = http.post<never>('/sign-out', async () => {
  return new HttpResponse(null, {
    status: 200,
  })
})
