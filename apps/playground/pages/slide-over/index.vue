<template>
  <div class="space-y-2">
    <ComponentCodeWrapper :code="example1">
      <KSlideOver :open="open" @close="open = false">
        <template #title>This is a title slot</template>

        <div>This is a slide over</div>
      </KSlideOver>

      <div class="flex flex-col space-y-2 mt-10 justify-center items-center">
        <KButton @click="open = true">Open Slide Over</KButton>
      </div>
    </ComponentCodeWrapper>
    <ComponentCodeWrapper :code="script" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const open = ref(false)

const script = `
<script setup lang="ts">
  import { ref } from 'vue'
  const open = ref(false)
\<\/script\>
`

const example1 = `
<KSlideOver :open="open" @close="open = false">
  <template #title>This is a title slot</template>

  <div>This is a slide over</div>
</KSlideOver>
<div class="flex flex-col space-y-2 mt-10 justify-center items-center">
  <KButton @click="open = true">Open Slide Over</KButton>
</div>
`
</script>
