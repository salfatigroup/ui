<template>
  <button v-bind="$attrs" :type="type" :class="buttonClasses">
    <slot name="prefixIcon" v-if="$slots.prefixIcon"></slot>
    <div><slot></slot></div>
    <slot name="suffixIcon" v-if="$slots.suffixIcon"></slot>
  </button>
</template>

<script setup lang="ts">
import { computed, PropType } from 'vue'

export type Props = {
  variant?: 'primary' | 'secondary' | 'info' | 'warn' | 'danger' | 'success'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  soft?: boolean
  pill?: boolean
  disabled?: boolean
  type: 'button' | 'submit' | 'reset' | undefined
}

const props = defineProps({
  variant: {
    type: String as PropType<Props['variant']>,
    default: 'primary' as Props['variant'],
  },
  size: {
    type: String,
    default: 'md' as Props['size'],
  },
  soft: {
    type: Boolean,
    default: false as Props['soft'],
  },
  pill: {
    type: Boolean,
    default: false as Props['pill'],
  },
  disabled: {
    type: Boolean,
    default: false as Props['disabled'],
  },
  type: {
    type: String as PropType<Props['type']>,
    default: 'button' as Props['type'],
  },
})

const primaryFocusVisible =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'

const primaryClasses = computed(() => ({
  [primaryFocusVisible]: true,
  'focus-visible:outline-brand-600': true,
  'bg-brand-600 text-white hover:bg-brand-500': !props.soft,
  'bg-brand-100 text-brand-600 hover:bg-brand-200': props.soft,
}))

const secondaryClasses = computed(() => ({
  'ring-1 ring-inset ring-brand-gray-300 text-brand-gray-900 hover:bg-brand-gray-50':
    !props.soft,
  'bg-brand-gray-100 text-brand-gray-500 hover:bg-brand-gray-200': props.soft,
}))

const infoClasses = computed(() => ({
  [primaryFocusVisible]: true,
  'focus-visible:outline-brand-info-600': true,
  'bg-brand-info-500 text-white hover:bg-brand-info-400': !props.soft,
  'bg-brand-info-100 text-brand-info-600 hover:bg-brand-info-200': props.soft,
}))

const warnClasses = computed(() => ({
  [primaryFocusVisible]: true,
  'focus-visible:outline-brand-warn-600': true,
  'bg-brand-warn-500 text-white hover:bg-brand-warn-400': !props.soft,
  'bg-brand-warn-100 text-brand-warn-600 hover:bg-brand-warn-200': props.soft,
}))

const dangerClasses = computed(() => ({
  [primaryFocusVisible]: true,
  'focus-visible:outline-brand-danger-600': true,
  'bg-brand-danger-500 text-white hover:bg-brand-danger-400': !props.soft,
  'bg-brand-danger-100 text-brand-danger-600 hover:bg-brand-danger-200':
    props.soft,
}))

const successClasses = computed(() => ({
  [primaryFocusVisible]: true,
  'focus-visible:outline-brand-success-600': true,
  'bg-brand-success-600 text-white hover:bg-brand-success-500': !props.soft,
  'bg-brand-success-100 text-brand-success-600 hover:bg-brand-success-200':
    props.soft,
}))

const slots = defineSlots()
// generate the button classes based on the props
const buttonClasses = computed(() => {
  const baseClasses: Record<string, Record<string, boolean>> = {
    primary: primaryClasses.value,
    info: infoClasses.value,
    warn: warnClasses.value,
    danger: dangerClasses.value,
    success: successClasses.value,
    secondary: secondaryClasses.value,
  }

  return {
    ...baseClasses[props.variant ?? 'primary'],
    'flex justify-center items-center font-semibold': true,
    'px-2 py-1': ['xs', 'sm'].includes(props.size),
    'px-2.5 py-1.5': ['md'].includes(props.size),
    'px-3 py-2': ['lg'].includes(props.size),
    'px-3.5 py-2.5': ['xl'].includes(props.size),

    'text-xs': ['xs'].includes(props.size),
    'text-sm': ['sm', 'md', 'lg', 'xl'].includes(props.size),

    // Pill
    'rounded-full': props.pill,
    rounded: !props.pill && ['xs', 'sm'].includes(props.size),
    'rounded-md': !props.pill && ['md', 'lg', 'xl'].includes(props.size),

    // Disabled
    'opacity-50 pointer-events-none': props.disabled,

    'space-x-2': slots.prefixIcon || slots.suffixIcon,
  }
})
</script>
