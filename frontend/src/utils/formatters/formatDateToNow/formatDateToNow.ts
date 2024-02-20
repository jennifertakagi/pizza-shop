import { formatDistanceToNow } from 'date-fns'
import { enUS } from 'date-fns/locale'

export function formatDateToNow(date: string, locale = enUS) {
  return formatDistanceToNow(date, {
    locale,
    addSuffix: true,
  })
}
