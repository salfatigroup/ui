<template>
  <div class="flex flex-col space-y-2 mt-10">
    <ComponentCodeWrapper :code="example1">
      <k-checkbox v-bind="props" v-model="checked" />
    </ComponentCodeWrapper>

    <ComponentCodeWrapper :code="example2">
      <k-checkbox v-bind="props" v-model="checked" inline-description />
    </ComponentCodeWrapper>

    <ComponentCodeWrapper :code="example3">
      <k-checkbox v-bind="props" v-model="checked" right />
    </ComponentCodeWrapper>

    <ComponentCodeWrapper :code="script" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const checked = ref(true)
const label = 'Comments'
const description = 'Get notified when someones posts a comment on a posting.'
const props = { label, description }

const script = `
<script setup lang="ts">
  import { ref } from 'vue'
  const checked = ref(true)
  const label = 'Comments'
  const description = 'Get notified when someones posts a comment on a posting.'
  const props = { label, description }
\<\/script\>
`

const example1 = `<k-checkbox v-bind="props" v-model="checked" />`
const example2 = `<k-checkbox v-bind="props" v-model="checked" inline-description />`
const example3 = `<k-checkbox v-bind="props" v-model="checked" right />`
</script>
