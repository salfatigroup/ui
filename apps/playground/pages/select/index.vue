<template>
  <div class="w-full flex flex-col space-y-2 mt-10">
    <k-select
      :options="people"
      v-model="selectedSingle"
      label="Assign to one"
    />
    <k-select
      :options="people"
      v-model="selected"
      multiple
      label="Assign to many"
    />
    <k-select
      :options="dates"
      v-model="pillSelected1"
      placeholder="Due Date"
      pill
      label="Pill select"
    >
      <template #prefixIcon
        ><ICalendar variant="line" class="w-4 h-4"
      /></template>
    </k-select>

    <k-select
      :options="people"
      v-model="pillSelected2"
      placeholder="Assign"
      pill
      label="Pill select"
    >
      <template #placeholderIcon
        ><IUserCircle variant="filled" class="w-4 h-4"
      /></template>
    </k-select>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  ICalendar,
  IUserCircle,
} from '../../../../packages/ui/src/runtime/components/icon'

const selected = ref([])
const selectedSingle = ref([])
const pillSelected1 = ref()
const pillSelected2 = ref()

const dates = [
  { id: 0, text: 'No due date', CLEAR_SELECTION: true },
  { id: 1, text: 'Today' },
  { id: 2, text: 'Tomorrow' },
]
const people = [
  { id: 0, text: 'Unassign', CLEAR_SELECTION: true, icon: IUserCircle },
  { id: 1, text: 'Wade Cooper', online: true },
  {
    id: 2,
    text: 'Arlene Mccoy',
    avatar:
      'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  { id: 3, text: 'Devon Webb' },
  { id: 4, text: 'Tom Cook' },
  { id: 5, text: 'Tanya Fox' },
  { id: 6, text: 'Hellen Schmidt' },
  { id: 7, text: 'Caroline Schultz' },
  { id: 8, text: 'Mason Heaney' },
  { id: 9, text: 'Claudie Smitham' },
  { id: 10, text: 'Emil Schaefer' },
]

// const modelValue = [people[1], people[2]]
</script>
