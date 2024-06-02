export type FilterOption = {
  label: string
  value: string
}

export type Filters = {
  id: string
  name: string
  options: FilterOption[]
}[]
