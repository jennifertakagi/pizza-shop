export function formatCurrency(
  value: number,
  locale = 'en-US',
  currency = 'USD',
) {
  return value.toLocaleString(locale, {
    style: 'currency',
    currency,
  })
}
