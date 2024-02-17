import { userAuthentication } from "@/server-state/api/user-authentication"
import { useMutation } from "@tanstack/react-query"

export const usePostUserAuthentication =() => {
  return useMutation({
    mutationFn: userAuthentication,
  })
}