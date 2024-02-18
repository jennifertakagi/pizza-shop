import { api } from '@/lib/axios'

export async function userSignOut() {
  await api.post('/sign-out')
}
