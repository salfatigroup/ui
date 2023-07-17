export type PaginationProps = {
  total: number
  modelValue: number
  pageSize: number
  previousLabel: string
  nextLabel: string
  variant: 'footer' | 'simple-footer' | 'centered'
  maxPageButtons: number
  onNext: () => void
  onPrevious: () => void
}
