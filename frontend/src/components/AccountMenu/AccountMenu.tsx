import { Building, ChevronDown, LogOut } from 'lucide-react'

import { useGetRestaurant } from '@/server-state/hooks/useGetRestaurant'
import { useGetUserProfile } from '@/server-state/hooks/useGetUserProfile'
import { usePostUserSignOut } from '@/server-state/hooks/usePostUserSignOut'

import { StoreProfileDialog } from '../StoreProfileDialog'
import { Button } from '../ui/button'
import { Dialog, DialogTrigger } from '../ui/dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { Skeleton } from '../ui/skeleton'

export const AccountMenu = () => {
  const { data: userProfile, isLoading: isLoadingGetUserProfile } =
    useGetUserProfile()
  const { data: restaurant, isLoading: isLoadingGetRestaurant } =
    useGetRestaurant()
  const { mutateAsync: postUserSignOut, isPending: isPendingPostUserSignOut } =
    usePostUserSignOut()

  return (
    <Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="flex select-none items-center gap-2"
          >
            {isLoadingGetRestaurant ? (
              <Skeleton className="h-4 w-40" />
            ) : (
              restaurant?.name
            )}
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuLabel className="flex flex-col">
            {isLoadingGetUserProfile ? (
              <div className="space-y-1.5">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-3 w-24" />
              </div>
            ) : (
              <>
                <span>{userProfile?.name}</span>
                <span className="text-xs font-normal text-muted-foreground">
                  {userProfile?.email}
                </span>
              </>
            )}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DialogTrigger asChild>
            <DropdownMenuItem>
              <Building className="mr-2 h-4 w-4" />
              <span>Restaurant Profile</span>
            </DropdownMenuItem>
          </DialogTrigger>
          <DropdownMenuItem
            asChild
            disabled={isPendingPostUserSignOut}
            className="text-rose-500 dark:text-rose-400"
          >
            <button className="w-full" onClick={() => postUserSignOut()}>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Sair</span>
            </button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <StoreProfileDialog />
    </Dialog>
  )
}
