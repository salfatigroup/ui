export type PaginationProps = {
  total: number
  modelValue: number
  pageSize: number
  previousLabel: string
  nextLabel: string
  variant: 'footer' | 'simple-footer' | 'centered'
  maxPages: number
  onNext: () => void
  onPrevious: () => void
}
