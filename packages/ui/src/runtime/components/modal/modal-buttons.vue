<template>
  <k-button
    v-for="(button, i) in buttons"
    :tabindex="i + 1"
    :key="button.label"
    v-bind="button"
    @click="button.onClick?.()"
  >
    {{ button.label }}
  </k-button>
</template>
<script setup lang="ts">
import { PropType } from 'vue'
import { ModalProps } from './types'

defineProps({
  buttons: {
    type: Array as PropType<ModalProps['buttons']>,
    default: [
      {
        label: 'Cancel',
        variant: 'secondary',
      },
      {
        label: 'Confirm',
        variant: 'info',
      },
    ],
  },
})
</script>
