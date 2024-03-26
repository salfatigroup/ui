<template>
  <div class="w-full flex flex-col space-y-2 mt-10">
    <ComponentCodeWrapper :code="example1">
      <k-slider v-model="modelValue" :min="min" :max="max" />
    </ComponentCodeWrapper>

    <ComponentCodeWrapper :code="script" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const example1 = `<k-slider v-model="modelValue" />`

const modelValue = ref(20)
const min = ref(0)
const max = ref(100)

const script = `
  <script setup lang="ts">
  import { ref } from 'vue'
  
const modelValue = ref(20)
const min = ref(0)
const max = ref(100)
  \<\/script\>
  `
</script>
