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
    'inline-flex items-center border-t-2 px-4 pt-4 text-sm font-medium': true,
    'text-brand-gray-500 border-transparent hover:border-brand-gray-300 hover:text-brand-gray-700':
      !props.modelValue,
    'border-brand-500 text-brand-600': props.modelValue,
  }
})
const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()
</script>
