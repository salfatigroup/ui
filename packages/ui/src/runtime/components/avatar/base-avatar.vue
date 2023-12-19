<template>
  <span class="relative inline-block shrink-0">
    <img
      v-if="src && !hasError"
      v-bind="$attrs"
      :class="classes"
      :src="src"
      :alt="alt"
      @error="hasError = true"
    />
    <span v-else-if="placeholderInitials" :class="placeholderInitialsClasses">
      <span class="font-medium leading-none text-white">
        {{ placeholderInitials }}
      </span>
    </span>

    <span v-else :class="placeholderClasses">
      <slot name="placeholderIcon">
        <svg
          class="text-brand-gray-300"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      </slot>
    </span>
    <span v-if="notificationProps" :class="notificationClasses">
      <span
        v-if="variant === 'rounded'"
        :class="notificationChildClasses"
      ></span>
    </span>
  </span>
</template>

<script lang="ts" setup>
import { computed, PropType, ref } from 'vue'
export type NotificationProps = {
  position: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'
  color: 'gray' | 'red' | 'green'
}
type Props = {
  src: string
  alt: string
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  variant: 'circular' | 'rounded'
  notificationProps?: NotificationProps
  placeholderInitials?: string
}

const hasError = ref(false)

const props = defineProps({
  src: {
    type: String,
    default: '' as Props['src'],
  },
  alt: {
    type: String,
    default: '' as Props['alt'],
  },
  size: {
    type: String,
    default: 'md' as Props['size'],
  },
  variant: {
    type: String,
    default: 'circular' as Props['variant'],
  },
  notificationProps: {
    type: Object as PropType<NotificationProps>,
    default: undefined as Props['notificationProps'],
  },
  placeholderInitials: {
    type: String,
    default: '' as Props['placeholderInitials'],
  },
})

const classes = computed(() => ({
  'h-3.5 w-3.5': props.size === '3xs',
  'h-4.5 w-4.5': props.size === '2xs',
  'h-6 w-6': props.size === 'xs',
  'h-8 w-8': props.size === 'sm',
  'h-10 w-10': props.size === 'md',
  'h-12 w-12': props.size === 'lg',
  'h-14 w-14': props.size === 'xl',
  'h-16 w-16': props.size === '2xl',
  'rounded-full': props.variant === 'circular',
  'rounded-md': props.variant === 'rounded',
}))

const placeholderInitialsClasses = computed(() => ({
  ...classes.value,
  'text-xs': props.size === 'xs',
  'text-sm': props.size === 'sm',
  'text-md': props.size === 'md',
  'text-lg': props.size === 'lg',
  'text-xl': props.size === 'xl',
  'text-2xl': props.size === '2xl',
  'inline-flex items-center justify-center bg-brand-gray-500': true,
}))
const placeholderClasses = computed(() => ({
  ...classes.value,
  'overflow-hidden inline-block bg-brand-gray-100': true,
}))

const notificationBaseClasses = computed(() => ({
  'bg-brand-gray-300': props.notificationProps.color === 'gray',
  'bg-brand-danger-400': props.notificationProps.color === 'red',
  'bg-brand-success-400': props.notificationProps.color === 'green',
  'h-1.5 w-1.5': props.size === 'xs',
  'h-2 w-2': props.size === 'sm',
  'h-2.5 w-2.5': props.size === 'md',
  'h-3 w-3': props.size === 'lg',
  'h-3.5 w-3.5': props.size === 'xl',
  'h-4 w-4': props.size === '2xl',
}))

const roundedNotificationClasses = computed(() => ({
  transform: true,
  '-translate-y-1/2 translate-x-1/2':
    props.notificationProps.position === 'top-right',
  'translate-y-1/2 translate-x-1/2':
    props.notificationProps.position === 'bottom-right',
  '-translate-y-1/2 -translate-x-1/2':
    props.notificationProps.position === 'bottom-left',
  'translate-y-1/2 -translate-x-1/2':
    props.notificationProps.position === 'top-left',
}))
const notificationClasses = computed(() => ({
  ...notificationBaseClasses.value,
  ...(props.variant === 'rounded' ? roundedNotificationClasses.value : {}),
  'rounded-full block ring-2 ring-white absolute': true,
  'top-0 right-0': props.notificationProps.position === 'top-right',
  'bottom-0 right-0': props.notificationProps.position === 'bottom-right',
  'bottom-0 left-0': props.notificationProps.position === 'bottom-left',
  'top-0 left-0': props.notificationProps.position === 'top-left',
}))
const notificationChildClasses = computed(() => ({
  ...notificationBaseClasses.value,
  'block rounded-full': true,
}))
</script>
