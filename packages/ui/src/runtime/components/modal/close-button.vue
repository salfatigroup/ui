<template>
  <div class="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
    <button
      tabindex="10"
      type="button"
      class="rounded-md bg-white text-brand-gray-400 hover:text-brand-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
      @click="onClose?.()"
    >
      <span class="sr-only">Close</span>
      <ICrossCircle class="h-6 w-6" aria-hidden="true" variant="duotone" />
    </button>
  </div>
</template>
<script setup lang="ts">
import { PropType } from 'vue'
import { ModalProps } from './types'
import { ICrossCircle } from '../icon'

defineProps({
  onClose: {
    type: Function as PropType<ModalProps['onClose']>,
  },
})
</script>
