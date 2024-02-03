<template>
  <div class="w-full flex flex-col space-y-2 mt-10">
    <ComponentCodeWrapper :code="example1">
      <KButton @click="show = !show">Toggle Toast</KButton>
      <k-toast :show="show" variant="info">
        <template #description>
          <div class="flex justify-between items-start w-full">
            <span>Description</span>
            <button @click="show = false">
              <KIconCross />
            </button>
          </div>
        </template>
      </k-toast>
    </ComponentCodeWrapper>

    <ComponentCodeWrapper :code="script" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const show = ref(false)
const script = `
  <script setup lang="ts">
  const show = ref(false)
\<\/script\>
  `

const example1 = `
<KButton @click="show = !show">Toggle Toast</KButton>
<k-toast :show="show" variant="info">
  <template #description>
    <div class="flex justify-between items-start w-full">
      <span>Description</span>
      <button @click="show = false">
        <KIconCross />
      </button>
    </div>
  </template>
</k-toast>
  `
</script>
