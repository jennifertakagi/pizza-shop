import { signIn } from "@/server-state/api/sign-in"
import { useMutation } from "@tanstack/react-query"

export const usePostProfile =() => {
  return useMutation({
    mutationFn: signIn,
  })
}