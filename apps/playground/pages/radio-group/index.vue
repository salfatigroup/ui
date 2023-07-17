<template>
  <div class="w-full flex flex-col space-y-2 mt-10">
    <ComponentCodeWrapper :code="example1">
      <k-radio-group
        title="Notifications"
        name="notifications"
        description="How do you prefer to receive notifications?"
        :items="items"
        v-model="checked"
      />
    </ComponentCodeWrapper>

    <ComponentCodeWrapper :code="example2">
      <k-radio-group
        title="Notifications"
        name="notifications2"
        description="How do you prefer to receive notifications?"
        :items="items"
        variant="horizontal"
        v-model="checked"
      />
    </ComponentCodeWrapper>

    <ComponentCodeWrapper :code="example3">
      <k-radio-group
        title="Notifications"
        name="notifications3"
        variant="vertical-right"
        :items="items"
        v-model="checked"
      />
    </ComponentCodeWrapper>

    <ComponentCodeWrapper :code="example4">
      <k-radio-group
        title="Select a mailing list"
        name="notifications4"
        variant="cards"
        :items="items"
        v-model="checked"
      />
    </ComponentCodeWrapper>

    <ComponentCodeWrapper :code="example5">
      <k-radio-group
        title="Select a small card"
        name="notifications5"
        variant="small-cards"
        learnMoreText="Learn more"
        :items="smallItems"
        v-model="checked"
      />
    </ComponentCodeWrapper>

    <ComponentCodeWrapper :code="example6">
      <k-radio-group
        title="Select a stacked card"
        name="notifications6"
        variant="stacked-cards"
        :items="items"
        v-model="checked"
      />
    </ComponentCodeWrapper>

    <ComponentCodeWrapper :code="example7">
      <k-radio-group
        title="Select a stacked card"
        name="notifications6"
        variant="stacked-cards"
        :items="items"
        v-model="checked"
      >
        <template #title>
          <h2 class="text-lg font-medium leading-6 text-brand-gray-900">
            Custom title
          </h2>
        </template>
        <template v-slot="{ checked, item }">
          <div>
            {{ `${checked ? 'Checked - ' : ''}${JSON.stringify(item)}` }}
          </div>
        </template>
      </k-radio-group>
    </ComponentCodeWrapper>
    <ComponentCodeWrapper :code="script" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { items, smallItems } from '../../mocks/radio_mocks'
const checked = ref(items[1].value)

const script = `
<script setup lang="ts">
  import { ref } from 'vue'
  const items = [
    { value: '0', label: 'Email', description: 'This is good' },
    {
      value: '1',
      label: 'Phone',
      description: 'This is less good',
      bottomText: '10000 users',
      sideLabel: 'side label',
    },
    { value: '2', label: 'Push notification', description: 'This is spammy' },
    { value: '3', label: 'No description' },
  ]

  export const smallItems = [
    { value: '0', label: '1GB', description: 'This is good' },
    {
      value: '1',
      label: '8GB',
    },
    { value: '2', label: '16GB', description: 'This is spammy' },
    { value: '3', label: '32GB' },
    { value: '4', label: '64GB', disabled: true },
  ]

  const checked = ref(items[1].value)
\<\/script\>
`

const example1 = `
<k-radio-group
  title="Notifications"
  name="notifications"
  description="How do you prefer to receive notifications?"
  :items="items"
  v-model="checked"
  />`

const example2 = `
<k-radio-group
  title="Notifications"
  name="notifications2"
  description="How do you prefer to receive notifications?"
  :items="items"
  variant="horizontal"
  v-model="checked"
  />`

const example3 = `
<k-radio-group
  title="Notifications"
  name="notifications3"
  variant="vertical-right"
  :items="items"
  v-model="checked"
  />`

const example4 = `
<k-radio-group
  title="Select a mailing list"
  name="notifications4"
  variant="cards"
  :items="items"
  v-model="checked"
  />`

const example5 = `
<k-radio-group
  title="Select a small card"
  name="notifications5"
  variant="small-cards"
  learnMoreText="Learn more"
  :items="smallItems"
  v-model="checked"
  />`

const example6 = `
<k-radio-group
  title="Select a stacked card"
  name="notifications6"
  variant="stacked-cards"
  :items="items"
  v-model="checked"
  />`

const example7 = `
<k-radio-group
  title="Select a stacked card"
  name="notifications6"
  variant="stacked-cards"
  :items="items"
  v-model="checked">
  <template #title>
    <h2 class="text-lg font-medium leading-6 text-brand-gray-900">
      Custom title
    </h2>
  </template>
  <template v-slot="{ checked, item }">
    <div>
      {{ \`\${checked ? 'Checked - ' : ''}\${JSON.stringify(item)}\` }}
    </div>
  </template>
</k-radio-group>`
</script>
