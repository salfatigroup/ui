<template>
  <div class="w-full flex flex-col space-y-2 mt-10">
    <ComponentCodeWrapper :code="example1">
      <k-select
        :options="people"
        v-model="selectedSingle"
        label="Assign to one"
      />
    </ComponentCodeWrapper>

    <ComponentCodeWrapper :code="example6">
      <k-select
        :options="people"
        v-model="selectedSingle"
        label="Assign to one"
        direction="up"
      />
    </ComponentCodeWrapper>

    <ComponentCodeWrapper :code="example2">
      <k-select
        :options="people"
        v-model="selected"
        multiple
        label="Assign to many"
      />
    </ComponentCodeWrapper>

    <ComponentCodeWrapper :code="example3">
      <k-select
        :options="people"
        disabled
        v-model="selectedSingle"
        label="Disabled"
      />
    </ComponentCodeWrapper>

    <ComponentCodeWrapper :code="example4">
      <k-select
        :options="dates"
        v-model="pillSelected1"
        placeholder="Due Date"
        pill
        label="Pill select"
      >
        <template #prefixIcon>
          <ICalendar variant="line" class="w-4 h-4" />
        </template>
      </k-select>
    </ComponentCodeWrapper>

    <ComponentCodeWrapper :code="example5">
      <k-select
        :options="people"
        v-model="pillSelected2"
        placeholder="Assign"
        pill
        label="Pill select"
      >
        <template #placeholderIcon>
          <IUserCircle variant="filled" class="w-4 h-4" />
        </template>
      </k-select>
    </ComponentCodeWrapper>

    <ComponentCodeWrapper :code="example7">
      <k-select
        :options="people"
        v-model="selectedSingle"
        label="Assign to one"
        errorText="This is an error example"
      />
    </ComponentCodeWrapper>
    <ComponentCodeWrapper :code="script" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  ICalendar,
  IUserCircle,
} from '../../../../packages/ui/src/runtime/components/icon'
import { dates, people } from '../../mocks/options_mocks'
const selected = ref([])
const selectedSingle = ref([])
const pillSelected1 = ref()
const pillSelected2 = ref()

const script = `
<script setup lang="ts">
  import { ref } from 'vue'
  const dates = [
    { value: null, label: 'No due date' },
    { value: 1, label: 'Today' },
    { value: 2, label: 'Tomorrow' },
  ]
  const people: OptionType[] = [
    { value: null, label: 'Unassign', icon: IUserCircle },
    { value: 1, label: 'Wade Cooper', online: true },
    {
      value: 2,
      label: 'Arlene Mccoy',
      avatar:
        'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    { value: 3, label: 'Devon Webb', description: '@devonwebb' },
    { value: 4, label: 'Tom Cook' },
    { value: 5, label: 'Tanya Fox' },
    { value: 6, label: 'Hellen Schmvaluet' },
    { value: 7, label: 'Caroline Schultz' },
    { value: 8, label: 'Mason Heaney' },
    { value: 9, label: 'Claudie Smitham' },
    { value: 10, label: 'Emil Schaefer' },
  ]

  const selected = ref([])
  const selectedSingle = ref([])
  const pillSelected1 = ref()
  const pillSelected2 = ref()
\<\/script\>
`

const example1 = `
<k-select
  :options="people"
  v-model="selectedSingle"
  label="Assign to one"
/>
`

const example2 = `
<k-select
  :options="people"
  v-model="selected"
  multiple
  label="Assign to many"
/>
`

const example3 = `
<k-select
  :options="people"
  disabled
  v-model="selectedSingle"
  label="Disabled"
/>
`

const example4 = `
<k-select
  :options="dates"
  v-model="pillSelected1"
  placeholder="Due Date"
  pill
  label="Pill select"
>
  <template #prefixIcon>
    <ICalendar variant="line" class="w-4 h-4" />
  </template>
</k-select>
`

const example5 = `
<k-select
  :options="people"
  v-model="pillSelected2"
  placeholder="Assign"
  pill
  label="Pill select"
>
  <template #placeholderIcon>
    <IUserCircle variant="filled" class="w-4 h-4" />
  </template>
</k-select>
`

const example6 = `
<k-select
  :options="people"
  v-model="selectedSingle"
  label="Assign to one"
  direction="up"
/>
`

const example7 = `
<k-select
  :options="people"
  v-model="selectedSingle"
  label="Assign to one"
  errorText="This is an error example"
/>
`
</script>
