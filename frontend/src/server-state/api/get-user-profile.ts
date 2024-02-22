import { api } from '@/lib/axios'

export interface GetUserProfileResponse {
  id: string
  name: string
  email: string
  phone: string | null
  role: 'manager' | 'customer'
  createdAt: Date | null
  updatedAt: Date | null
}

export async function getUserProfile() {
  const response = await api.get<GetUserProfileResponse>('/me')

  return response.data
}
