import { IUserCircle } from '../../../packages/ui/src/runtime/components/icon'
import type { OptionType } from '../../../packages/ui/src/runtime/components/select/option.vue'

export const dates = [
  { value: null, label: 'No due date' },
  { value: 1, label: 'Today' },
  { value: 2, label: 'Tomorrow' },
]
export const people: OptionType[] = [
  {
    value: null,
    label: 'Unassign',
    icon: IUserCircle,
    iconProps: { variant: 'filled' },
  },
  { value: 1, label: 'Wade Cooper', online: true },
  {
    value: 2,
    label: 'Arlene Mccoy',
    avatar:
      'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  { value: 3, label: 'Devon Webb', description: '@devonwebb' },
  {
    value: 4,
    label:
      'Tom Cook this is a very long name of a person Tom Cook this is a very long name of a person Tom Cook this is a very long name of a person',
  },
  { value: 5, label: 'Tanya Fox' },
  { value: 6, label: 'Hellen Schmvaluet' },
  { value: 7, label: 'Caroline Schultz' },
  { value: 8, label: 'Mason Heaney' },
  { value: 9, label: 'Claudie Smitham' },
  { value: 10, label: 'Emil Schaefer' },
]
