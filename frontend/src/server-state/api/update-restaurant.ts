import { api } from '@/lib/axios'

export interface UpdateRestaurantBody {
  name: string
  description: string | null
}

export async function updateRestaurant({
  description,
  name,
}: UpdateRestaurantBody) {
  await api.put('/profile', { name, description })
}
