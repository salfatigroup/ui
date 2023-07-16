<template>
  <div class="w-full flex flex-col space-y-2 mt-10">
    <ComponentCodeWrapper :code="example1">
      <k-toggle variant="icon" v-model="checked" />
    </ComponentCodeWrapper>

    <ComponentCodeWrapper :code="example2">
      <k-toggle inline-description variant="simple" v-model="checked" />
    </ComponentCodeWrapper>

    <ComponentCodeWrapper :code="example3">
      <k-toggle variant="short" v-model="checked" />
    </ComponentCodeWrapper>

    <ComponentCodeWrapper :code="example4">
      <k-toggle
        variant="icon"
        label="Comments"
        v-model="checked"
        description="Get notified blah blah blah..."
      />
    </ComponentCodeWrapper>
    <ComponentCodeWrapper :code="script" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const checked = ref(true)

const script = `
<script setup lang="ts">
  import { ref } from 'vue'
  const checked = ref(true)
\<\/script\>
`

const example1 = `
<k-toggle
  variant="icon"
  v-model="checked"
/>
`

const example2 = `
<k-toggle
  inline-description
  variant="simple"
  v-model="checked"
/>
`

const example3 = `
<k-toggle
  variant="short"
  v-model="checked"
/>
`

const example4 = `
<k-toggle
  variant="icon"
  label="Comments"
  v-model="checked"
  description="Get notified blah blah blah..."
/>
`
</script>
