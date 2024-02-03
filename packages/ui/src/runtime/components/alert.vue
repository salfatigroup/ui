<template>
  <div :class="wrapperClasses">
    <div class="flex">
      <div class="flex-shrink-0">
        <slot name="icon">
          <component :is="iconComponent?.value" v-bind="iconProps"></component>
        </slot>
      </div>
      <div class="ml-3 w-full">
        <h3 :class="titleClasses">
          <slot name="title">{{ title }}</slot>
        </h3>
        <div :class="descriptionClasses">
          <slot name="description">
            <p>
              {{ description }}
            </p>
          </slot>
        </div>
        <slot name="buttons">
          <div class="mt-4" v-if="buttons?.length">
            <div class="-mx-2 -my-1.5 flex space-x-3">
              <button
                v-for="button in buttons"
                :key="button.label"
                type="button"
                :class="buttonClasses"
                @click="button.onClick"
              >
                {{ button.label }}
              </button>
            </div>
          </div>
        </slot>
      </div>
      <div class="ml-auto pl-3" v-if="onClose">
        <div class="-mx-1.5 -my-1.5">
          <button type="button" :class="closeIconClasses" @click="onClose()">
            <span class="sr-only">Dismiss</span>
            <ICross class="h-4 w-4" aria-hidden="true" variant="line" />
          </button>
        </div>
      </div>
      <slot name="learnMore">
        <p class="mt-3 text-sm md:ml-6 md:mt-0" v-if="onLearnMore">
          <a href="#" :class="learnMoreClasses">
            {{ learnMoreText }}
            <span aria-hidden="true">&rarr;</span>
          </a>
        </p>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType, computed, shallowRef } from 'vue'
import {
  ICheckCircle,
  IAlertTriangle,
  IInfo,
  ICrossCircle,
  ICross,
} from './icon'

type ButtonProps = {
  onClick?: () => void
  label: string
}
type Props = {
  variant?: 'info' | 'success' | 'warn' | 'danger' | 'brand'
  title?: string
  description?: string
  buttons?: ButtonProps[]
  accent?: boolean
  withBorder?: boolean
  onClose?: () => void
  onLearnMore?: () => void
  learnMoreText?: string
}

const props: Props = defineProps({
  variant: {
    type: String as PropType<Props['variant']>,
    default: 'success',
  },
  title: {
    type: String,
    default: '' as Props['title'],
  },
  description: {
    type: String,
    default: '' as Props['description'],
  },
  buttons: {
    type: Array as PropType<Props['buttons']>,
    default: () => [] as Props['buttons'],
  },
  accent: {
    type: Boolean,
    default: false,
  },
  withBorder: {
    type: Boolean,
    default: false,
  },
  onClose: {
    type: Function as PropType<Props['onClose']>,
    default: undefined,
  },
  onLearnMore: {
    type: Function as PropType<Props['onLearnMore']>,
    default: undefined,
  },
  learnMoreText: {
    type: String,
    default: 'Details' as Props['learnMoreText'],
  },
})

const iconComponent = computed(() => {
  switch (props.variant) {
    case 'brand':
      return shallowRef(IInfo)
    case 'info':
      return shallowRef(IInfo)
    case 'success':
      return shallowRef(ICheckCircle)
    case 'warn':
      return shallowRef(IAlertTriangle)
    case 'danger':
      return shallowRef(ICrossCircle)
  }
})
const iconProps = computed(() => {
  return {
    class: {
      'h-5 w-5': true,
      'text-brand-500': props.variant === 'brand',
      'text-brand-info-400': props.variant === 'info',
      'text-brand-success-400': props.variant === 'success',
      'text-brand-warn-400': props.variant === 'warn',
      'text-brand-danger-400': props.variant === 'danger',
    },
    'aria-hidden': true,
    variant: 'filled',
  }
})
const wrapperClasses = computed(() => {
  return {
    'p-4 w-full': true,
    'bg-brand-50': props.variant === 'brand',
    'bg-brand-info-50': props.variant === 'info',
    'bg-brand-success-50': props.variant === 'success',
    'bg-brand-warn-50': props.variant === 'warn',
    'bg-brand-danger-50': props.variant === 'danger',
    'rounded-md': !props.accent,
    'border-l-4': props.accent,
    'border ': props.withBorder,
    'border-brand-400':
      props.variant === 'brand' && (props.accent || props.withBorder),
    'border-brand-info-400':
      props.variant === 'info' && (props.accent || props.withBorder),
    'border-brand-success-400':
      props.variant === 'success' && (props.accent || props.withBorder),
    'border-brand-warn-400':
      props.variant === 'warn' && (props.accent || props.withBorder),
    'border-brand-danger-400':
      props.variant === 'danger' && (props.accent || props.withBorder),
  }
})

const titleClasses = computed(() => {
  return {
    'text-sm font-medium': true,
    'text-brand-800': props.variant === 'brand',
    'text-brand-info-800': props.variant === 'info',
    'text-brand-success-800': props.variant === 'success',
    'text-brand-warn-800': props.variant === 'warn',
    'text-brand-danger-800': props.variant === 'danger',
  }
})

const descriptionClasses = computed(() => {
  return {
    'mt-2': props.title,
    'text-sm': true,
    'text-brand-700': props.variant === 'brand',
    'text-brand-info-700': props.variant === 'info',
    'text-brand-success-700': props.variant === 'success',
    'text-brand-warn-700': props.variant === 'warn',
    'text-brand-danger-700': props.variant === 'danger',
  }
})

const buttonClasses = computed(() => {
  return {
    'rounded-md px-2 py-1.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 ':
      true,
    'text-brand-800 bg-brand-100 hover:bg-brand-200 focus:ring-brand-500 focus:ring-offset-brand-50':
      props.variant === 'brand',
    'bg-brand-success-50 text-brand-success-800 hover:bg-brand-success-100 focus:ring-brand-success-600 focus:ring-offset-brand-success-50':
      props.variant === 'success',
    'bg-brand-warn-50 text-brand-warn-800 hover:bg-brand-warn-100 focus:ring-brand-warn-600 focus:ring-offset-brand-warn-50':
      props.variant === 'warn',
    'bg-brand-danger-50 text-brand-danger-800 hover:bg-brand-danger-100 focus:ring-brand-danger-600 focus:ring-offset-brand-danger-50':
      props.variant === 'danger',
    'bg-brand-info-50 text-brand-info-800 hover:bg-brand-info-100 focus:ring-brand-info-600 focus:ring-offset-brand-info-50':
      props.variant === 'info',
  }
})

const closeIconClasses = computed(() => {
  return {
    'inline-flex rounded-md p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2 ':
      true,
    'text-brand-500 bg-brand-100 hover:bg-brand-200 focus:ring-brand-500 focus:ring-offset-brand-50':
      props.variant === 'brand',
    'bg-brand-info-50 text-brand-info-500 hover:bg-brand-info-100 focus:ring-brand-info-600 focus:ring-offset-brand-info-50':
      props.variant === 'info',
    'bg-brand-success-50 text-brand-success-500 hover:bg-brand-success-100 focus:ring-brand-success-600 focus:ring-offset-brand-success-50':
      props.variant === 'success',
    'bg-brand-warn-50 text-brand-warn-500 hover:bg-brand-warn-100 focus:ring-brand-warn-600 focus:ring-offset-brand-warn-50':
      props.variant === 'warn',
    'bg-brand-danger-50 text-brand-danger-500 hover:bg-brand-danger-100 focus:ring-brand-danger-600 focus:ring-offset-brand-danger-50':
      props.variant === 'danger',
  }
})

const learnMoreClasses = computed(() => {
  return {
    'whitespace-nowrap font-medium': true,
    'text-brand-600 hover:text-brand-500': props.variant === 'brand',
    'text-brand-info-700 hover:text-brand-info-600': props.variant === 'info',
    'text-brand-success-700 hover:text-brand-success-600':
      props.variant === 'success',
    'text-brand-warn-700 hover:text-brand-warn-600': props.variant === 'warn',
    'text-brand-danger-700 hover:text-brand-danger-600':
      props.variant === 'danger',
  }
})
</script>
