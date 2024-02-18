import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'

import { userSignOut } from '@/server-state/api/user-sign-out'

export const usePostUserSignOut = () => {
  const navigate = useNavigate()

  return useMutation({
    mutationFn: userSignOut,
    onSuccess: () => {
      navigate('/sign-in', { replace: true })
    },
  })
}
