<template>
  <div class="w-full flex flex-col space-y-2 mt-10">
    <ComponentCodeWrapper :code="example1">
      <k-number-input v-model="number1" />
    </ComponentCodeWrapper>

    <ComponentCodeWrapper :code="example2">
      <div class="w-52">
        <k-number-input v-model="number2" :min="0" :max="10" />
      </div>
    </ComponentCodeWrapper>

    <ComponentCodeWrapper>
      <div class="w-52">
        <k-number-input v-model="number2" :min="0" :max="10" disabled />
      </div>
    </ComponentCodeWrapper>

    <ComponentCodeWrapper :code="script" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const example1 = `<k-number-input v-model="number1" />`
const example2 = `<div class="w-52">
  <k-number-input v-model="number2" :min="0" :max="10" />
</div>`

const number1 = ref(0)
const number2 = ref(9)

const script = `
<script setup lang="ts">
import { ref } from 'vue'

const number1 = ref(0)
const number2 = ref(0)
\<\/script\>
`
</script>
