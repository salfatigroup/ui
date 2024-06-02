<template>
  <div class="w-full flex flex-col space-y-2 mt-10">
    <ComponentCodeWrapper :code="example1">
      <k-filters
        :filters="filters"
        :active-filters="activeFilters"
        @update:active-filters="activeFilters = $event"
      />
    </ComponentCodeWrapper>

    <ComponentCodeWrapper :code="script" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const filters = ref([
  {
    id: 'category',
    name: 'Category',
    options: [
      { value: 'new-arrivals', label: 'All New Arrivals', checked: false },
      { value: 'tees', label: 'Tees', checked: false },
      { value: 'objects', label: 'Objects', checked: true },
    ],
  },
  {
    id: 'color',
    name: 'Color',
    options: [
      { value: 'white', label: 'White', checked: false },
      { value: 'beige', label: 'Beige', checked: false },
      { value: 'blue', label: 'Blue', checked: false },
    ],
  },
  {
    id: 'sizes',
    name: 'Sizes',
    options: [
      { value: 's', label: 'S', checked: false },
      { value: 'm', label: 'M', checked: false },
      { value: 'l', label: 'L', checked: false },
    ],
  },
])
const activeFilters = ref<
  {
    value: string
    label: string
  }[]
>([
  { value: 'objects', label: 'Objects' },
  { value: 'blue', label: 'Blue' },
  { value: 'm', label: 'M' },
])

const script = `
  <script setup lang="ts">
  import { ref } from 'vue'

    const filters = ref([
    {
        id: 'category',
        name: 'Category',
        options: [
        { value: 'new-arrivals', label: 'All New Arrivals', checked: false },
        { value: 'tees', label: 'Tees', checked: false },
        { value: 'objects', label: 'Objects', checked: true },
        ],
    },
    {
        id: 'color',
        name: 'Color',
        options: [
        { value: 'white', label: 'White', checked: false },
        { value: 'beige', label: 'Beige', checked: false },
        { value: 'blue', label: 'Blue', checked: false },
        ],
    },
    {
        id: 'sizes',
        name: 'Sizes',
        options: [
        { value: 's', label: 'S', checked: false },
        { value: 'm', label: 'M', checked: false },
        { value: 'l', label: 'L', checked: false },
        ],
    },
    ])
    const activeFilters = ref<
    {
        value: string
        label: string
    }[]
    >([
    { value: 'objects', label: 'Objects' },
    { value: 'blue', label: 'Blue' },
    { value: 'm', label: 'M' },
    ])
  \<\/script>
  `

const example1 = `
  <k-filters 
    :filters="filters"
    :active-filters="activeFilters"
    @update:active-filters="activeFilters = $event"
    />
  `
</script>
