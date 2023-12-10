<template>
  <ComponentCodeWrapper :code="code">
    <k-tags-input
      success
      v-model="model"
      class="focus:ring-brand-600 focus:ring-2 focus:ring-inset"
    />
  </ComponentCodeWrapper>
</template>

<script setup lang="ts">
import { computed } from 'vue'
const model = computed({
  get: () => ['tag1', 'tag2', 'tag3'],
  set: (value: string) => console.log(value),
})

const code = `
const model = computed({
  get: () => ['tag1', 'tag2', 'tag3'],
  set: (value: string) => console.log(value),
})

<k-tags-input
  success
  v-model="model"
  class="focus:ring-brand-600 focus:ring-2 focus:ring-inset"
/>
`
</script>
