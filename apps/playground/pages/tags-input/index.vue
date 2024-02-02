<template>
  <div class="w-full flex flex-col space-y-2 mt-10">
    <ComponentCodeWrapper :code="code1">
      <k-tags-input
        success
        v-model="model"
        class="focus:ring-brand-600 focus:ring-2 focus:ring-inset"
      />
    </ComponentCodeWrapper>
    <ComponentCodeWrapper :code="code2">
      <k-tags-input
        success
        v-model="model"
        disabled
        class="focus:ring-brand-600 focus:ring-2 focus:ring-inset"
      />
    </ComponentCodeWrapper>

    <ComponentCodeWrapper :code="script" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
const model = computed({
  get: () => [
    { name: 'tag1', attrs: {} },
    { name: 'tag2', attrs: {} },
    { name: 'tag3', attrs: {} },
  ],
  set: (value: string[]) => console.log(value),
})

const script = `
const model = computed({
  get: () => [
    { name: 'tag1', attrs: {} },
    { name: 'tag2', attrs: {} },
    { name: 'tag3', attrs: {} },
  ],
  set: (value: string) => console.log(value),
})
`

const code1 = `
<k-tags-input
  success
  v-model="model"
  class="focus:ring-brand-600 focus:ring-2 focus:ring-inset"
/>
`

const code2 = `
<k-tags-input
  success
  v-model="model"
  disabled
  class="focus:ring-brand-600 focus:ring-2 focus:ring-inset"
/>
`
</script>
