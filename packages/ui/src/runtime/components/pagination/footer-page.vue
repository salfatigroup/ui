<template>
  <a
    href="#"
    :class="pageClasses"
    :aria-current="modelValue ? 'page' : undefined"
    @click="emit('update:modelValue', true)"
    >{{ number }}</a
  >
</template>

<script setup lang="ts">
import { computed } from 'vue'

type PaginationProps = {
  modelValue: boolean
  number: number
}
const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
})

const pageClasses = computed(() => {
  return {
    'relative inline-flex items-center px-4 py-2 text-sm font-semibold focus:z-20 focus:outline-offset-0':
      true,
    'text-brand-gray-900 ring-1 ring-inset ring-brand-gray-300 hover:bg-brand-gray-50':
      !props.modelValue,
    'z-10 bg-brand-600 px-4 py-2 text-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600':
      props.modelValue,
  }
})
const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()
</script>
