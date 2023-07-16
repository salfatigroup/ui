<template>
  <div class="flex bg-brand-gray-50 col-span-1 rounded-lg shadow w-full">
    <div
      v-if="$slots.default"
      class="bg-white space-y-6 flex-1 flex flex-col p-6 justify-center items-center"
    >
      <slot></slot>
    </div>
    <code
      class="flex flex-1 py-6 pl-6 pr-2 text-sm font-mono text-brand-gray-500 rounded-b-lg overflow-x-scroll whitespace-pre-wrap w-full justify-between items-center"
    >
      <div class="max-h-80 overflow-scroll">
        <slot name="code">{{ code.trim() }}</slot>
      </div>
      <div class="flex justify-end w-fit right-2 pl-6">
        <div
          class="hover:bg-brand-gray-100 rounded-md w-8 h-8 justify-center items-center flex"
        >
          <ICopy :class="iconClasses" @click="onClick()" />
        </div>
      </div>
    </code>
  </div>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue'
import { ICopy } from '../../../packages/ui/src/runtime/components/icon'
const props = defineProps({
  code: {
    type: String,
    default: '',
  },
})

const copied = ref(false)
const slots = defineSlots()

const iconClasses = computed(() => ({
  'cursor-pointer active:text-brand-600': true,
  'text-brand-success-600': copied.value,
}))
const onClick = () => {
  navigator.clipboard.writeText(
    props?.code?.trim() ?? slots?.code?.()?.[0]?.children?.[0]?.text,
  )
  copied.value = true
  setTimeout(() => {
    copied.value = false
  }, 3000)
}
</script>
