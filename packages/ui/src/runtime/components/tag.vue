<template>
  <div class="flex items-center justify-center" v-bind="$attrs">
    <div
      :class="{
        'cursor-pointer': removable,
        'flex text-xs rounded-full py-0.5 px-1 items-center': true,
        'bg-brand-success-500/10 text-brand-success-500 border border-brand-success-500/80':
          success,
        'bg-brand-warn-500/10 text-brand-warn-500 border border-brand-warn-500/80':
          warning,
        'bg-brand-danger-500/10 text-brand-danger-500 border border-brand-danger-500/80':
          danger,
        'bg-brand-500/10 text-brand-500 border border-brand-500/80': brand,
        'bg-brand-gray-500/10 text-brand-gray-500 border border-brand-gray-500/80':
          !success && !warning && !danger && !brand,
      }"
      :aria-label="ariaLabel"
    >
      <slot></slot>
      <ICross
        v-if="removable"
        class="w-3 h-3 ml-1 hover:opacity-50"
        aria-hidden="true"
        variant="line"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType, computed } from 'vue'
import { ICross } from './icon'

type TagProps = {
  success: boolean
  warning: boolean
  danger: boolean
  brand: boolean
  removable: boolean
}

const props = defineProps({
  success: {
    type: Boolean as PropType<TagProps['success']>,
    default: false,
  },
  warning: {
    type: Boolean as PropType<TagProps['warning']>,
    default: false,
  },
  danger: {
    type: Boolean as PropType<TagProps['danger']>,
    default: false,
  },
  brand: {
    type: Boolean as PropType<TagProps['brand']>,
    default: false,
  },
  removable: {
    type: Boolean as PropType<TagProps['removable']>,
    default: false,
  },
})

const ariaLabel = computed(() => {
  if (props.success) {
    return 'Success Tag'
  }

  if (props.warning) {
    return 'Warning Tag'
  }

  if (props.danger) {
    return 'Error Tag'
  }

  return 'Tag'
})
</script>
