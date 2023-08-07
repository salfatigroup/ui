<template>
  <div class="flex flex-col space-y-2 mt-10 justify-center items-center">
    <ComponentCodeWrapper :code="example9">
      <k-alert variant="info" :description="props.description" />
    </ComponentCodeWrapper>

    <ComponentCodeWrapper :code="example1">
      <k-alert variant="info" v-bind="props" />
    </ComponentCodeWrapper>

    <ComponentCodeWrapper :code="example2">
      <k-alert variant="success" v-bind="props" />
    </ComponentCodeWrapper>

    <ComponentCodeWrapper :code="example3">
      <k-alert variant="warn" v-bind="props" />
    </ComponentCodeWrapper>

    <ComponentCodeWrapper :code="example4">
      <k-alert variant="danger" v-bind="props" />
    </ComponentCodeWrapper>

    <ComponentCodeWrapper :code="example5">
      <k-alert variant="info" v-bind="props" accent :onClose="onClose" />
    </ComponentCodeWrapper>

    <ComponentCodeWrapper :code="example6">
      <k-alert variant="success" v-bind="props" accent :onClose="onClose" />
    </ComponentCodeWrapper>

    <ComponentCodeWrapper :code="example7">
      <k-alert variant="warn" v-bind="props" accent :onClose="onClose" />
    </ComponentCodeWrapper>

    <ComponentCodeWrapper :code="example8">
      <k-alert variant="danger" v-bind="props" accent :onClose="onClose" />
    </ComponentCodeWrapper>

    <ComponentCodeWrapper :code="script" />
  </div>
</template>
<script setup lang="ts">
const buttons = [{ label: 'View Status' }, { label: 'Dismiss' }]
const title = 'Order completed'
const description = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            pariatur, ipsum similique veniam.`
const onClose = () => console.log('close')
const props = { title, description, buttons }

const script = `<script setup lang="ts">
  const buttons = [{ label: 'View Status' }, { label: 'Dismiss' }]
  const title = 'Order completed'
  const description = \`Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.\`
  const onClose = () => console.log('close')
  const props = { title, description, buttons }
\<\/script\>`
const example1 = `<k-alert variant="info" v-bind="props" />`
const example2 = `<k-alert variant="success" v-bind="props" />`
const example3 = `<k-alert variant="warn" v-bind="props" />`
const example4 = `<k-alert variant="danger" v-bind="props" />`
const example5 = `<k-alert variant="info" v-bind="props" accent :onClose="onClose" />`
const example6 = `<k-alert variant="success" v-bind="props" accent :onClose="onClose" />`
const example7 = `<k-alert variant="warn" v-bind="props" accent :onClose="onClose" />`
const example8 = `<k-alert variant="danger" v-bind="props" accent :onClose="onClose" />`
const example9 = `<k-alert variant="info" :description="props.description" />`
</script>
