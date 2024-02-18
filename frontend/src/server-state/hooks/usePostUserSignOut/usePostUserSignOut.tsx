import { userSignOut } from "@/server-state/api/user-sign-out"
import { useMutation } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"

export const usePostUserSignOut =() => {
  const navigate = useNavigate()

  return useMutation({
    mutationFn: userSignOut,
    onSuccess: () => {
      navigate('/sign-in', { replace: true })
    },
  })
}