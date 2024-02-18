import { userSignIn } from "@/server-state/api/user-sign-in"
import { useMutation } from "@tanstack/react-query"

export const usePostUserSignIn =() => {
  return useMutation({
    mutationFn: userSignIn,
  })
}