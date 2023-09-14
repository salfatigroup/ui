<template>
  <div class="w-full flex flex-col space-y-2 mt-10">
    <ComponentCodeWrapper :code="example1">
      <k-dropdown :items="items" title="Menu"></k-dropdown>
    </ComponentCodeWrapper>

    <ComponentCodeWrapper :code="example2">
      <k-dropdown size="md" :items="items" prevent-chevron class="w-10">
        <IMoreVert class="w-5 h-5 text-brand-gray-500" variant="duotone" />

        <template #item="{ item }">
          <div class="flex items-center space-x-2 hover:bg-brand-gray-100 p-1">
            <div
              class="flex items-center flex-shrink-0 w-5 h-5 text-brand-gray-500"
            >
              <IMoreVert variant="duotone" />
            </div>
            <div class="text-brand-gray-700">{{ item.label }}</div>
          </div>
        </template>
      </k-dropdown>
    </ComponentCodeWrapper>
    <ComponentCodeWrapper :code="example3">
      <k-dropdown
        size="md"
        :items="items"
        prevent-chevron
        class="w-10"
        disabled
      >
        <IMoreVert class="w-5 h-5 text-brand-gray-500" variant="duotone" />

        <template #item="{ item }">
          <div class="flex items-center space-x-2 hover:bg-brand-gray-100 p-1">
            <div
              class="flex items-center flex-shrink-0 w-5 h-5 text-brand-gray-500"
            >
              <IMoreVert variant="duotone" />
            </div>
            <div class="text-brand-gray-700">{{ item.label }}</div>
          </div>
        </template>
      </k-dropdown>
    </ComponentCodeWrapper>
    <ComponentCodeWrapper :code="example4">
      <k-dropdown :items="items" title="Menu" disabled></k-dropdown>
    </ComponentCodeWrapper>
    <ComponentCodeWrapper :code="example5">
      <k-dropdown
        :items="[
          {
            label: 'test',
            value: 'test',
            disabled: true,
            loading: true,
            onClick: () => {
              console.log('hi')
            },
          },
          { label: 'test-1', value: 'test-1' },
        ]"
        title="Menu"
      />
    </ComponentCodeWrapper>
    <ComponentCodeWrapper :code="script" />
  </div>
</template>

<script setup lang="ts">
import { IMoreVert } from '../../../../packages/ui/src/runtime/components/icon'
const items = [
  {
    label: 'Option 1',
    value: 'option-1',
    onClick: () => console.log('option 1 clicked'),
  },
  { label: 'Option 2', value: 'option-2' },
]
const script = `
<script setup lang="ts">
import { IMoreVert } from '../../../../packages/ui/src/runtime/components/icon'
const items = [
  {
    label: 'Option 1',
    value: 'option-1',
    onClick: () => console.log('option 1 clicked'),
  },
  { label: 'Option 2', value: 'option-2' },
]
\<\/script>
`

const example1 = `
<k-dropdown :items="items" title="Menu"></k-dropdown>
`

const example2 = `
<k-dropdown size="md" :items="items" prevent-chevron class="w-10">
  <IMoreVert class="w-5 h-5 text-brand-gray-500" variant="duotone" />
  <template #item="{ item }">
    <div class="flex items-center space-x-2">
      <div class="flex-shrink-0 w-5 h-5 text-brand-gray-500">
        <IMoreVert variant="duotone" />
      </div>
      <div class="text-brand-gray-700">{{ item.label }}</div>
    </div>
  </template>
</k-dropdown>`

const example3 = `
<k-dropdown size="md" :items="items" prevent-chevron class="w-10" disabled>
  <IMoreVert class="w-5 h-5 text-brand-gray-500" variant="duotone" />
  <template #item="{ item }">
    <div class="flex items-center space-x-2">
      <div class="flex-shrink-0 w-5 h-5 text-brand-gray-500">
        <IMoreVert variant="duotone" />
      </div>
      <div class="text-brand-gray-700">{{ item.label }}</div>
    </div>
  </template>
</k-dropdown>`
const example4 = `
<k-dropdown :items="items" title="Menu" disabled></k-dropdown>
`
const example5 = `
<k-dropdown
  :items="[
    {
      label: 'test',
      value: 'test',
      disabled: true,
      loading: true,
      onClick: () => {
        console.log('hi')
      },
    },
    { label: 'test-1', value: 'test-1' },
  ]"
  title="Menu"
/>
`
</script>
