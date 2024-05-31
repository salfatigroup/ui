<template>
  <div class="w-full flex flex-col space-y-2 mt-10">
    <ComponentCodeWrapper :code="example1">
      <k-combobox
        label="Assigned to"
        :options="people"
        v-model="selectedValue"
      />
    </ComponentCodeWrapper>

    <ComponentCodeWrapper :code="example2">
      <k-combobox
        label="Assigned to (disabled)"
        :options="people"
        v-model="selectedValue"
        disabled
      />
    </ComponentCodeWrapper>

    <ComponentCodeWrapper :code="example3">
      <k-combobox
        label="Assigned to (multiple) up right"
        :options="people"
        v-model="selectedValues"
        multiple
        direction="up-right"
        errorText="This is an error message"
      />
    </ComponentCodeWrapper>
    <ComponentCodeWrapper :code="script" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { people } from '../../mocks/options_mocks'
const selectedValue = ref(people[1])
const selectedValues = ref([people[1]])

const script = `
<script setup lang="ts">
  import { ref } from 'vue'
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
  const selectedValue = ref(people[1])
  const selectedValues = ref([people[1]])
\<\/script\>
`
const example1 = `
<k-combobox
  label="Assigned to"
  :options="people"
  v-model="selectedValue"
/>
`

const example2 = `
<k-combobox
  label="Assigned to (disabled)"
  :options="people"
  v-model="selectedValue"
  disabled
/>
`

const example3 = `
<k-combobox
  label="Assigned to (multiple)"
  :options="people"
  v-model="selectedValues"
  multiple
  direction="up-right"
  errorText="This is an error message"
/>
`
</script>
