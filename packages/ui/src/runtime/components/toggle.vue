<template>
  <SwitchGroup as="div" class="flex items-center justify-between">
    <slot name="label"></slot>
    <span class="flex flex-grow flex-col mr-2" v-if="label || description">
      <SwitchLabel
        as="span"
        class="text-sm font-medium leading-6 text-brand-gray-900"
        passive
        >{{ label }}</SwitchLabel
      >
      <SwitchDescription as="span" class="text-sm text-brand-gray-500">{{
        description
      }}</SwitchDescription>
    </span>
    <Switch
      v-bind="$attrs"
      :disabled="disabled"
      v-if="variant === 'short'"
      :model-value="modelValue"
      @update:model-value="emit('update:modelValue', $event)"
      ref="current"
      class="group relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-offset-2"
    >
      <span
        aria-hidden="true"
        class="pointer-events-none absolute h-full w-full rounded-md bg-white"
      />
      <span
        aria-hidden="true"
        :class="[
          modelValue ? 'bg-brand-600' : 'bg-brand-gray-200',
          'pointer-events-none absolute mx-auto h-4 w-9 rounded-full transition-colors duration-200 ease-in-out',
        ]"
      />
      <span
        aria-hidden="true"
        :class="[
          modelValue ? 'translate-x-5' : 'translate-x-0',
          'pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full border border-brand-gray-200 bg-white shadow ring-0 transition-transform duration-200 ease-in-out',
        ]"
      />
    </Switch>
    <Switch
      v-else
      :model-value="modelValue"
      @update:model-value="emit('update:modelValue', $event)"
      ref="current"
      :class="[
        modelValue ? 'bg-brand-600' : 'bg-brand-gray-200',
        'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-offset-2',
      ]"
    >
      <span class="sr-only">Use setting</span>
      <span
        :class="[
          modelValue ? 'translate-x-5' : 'translate-x-0',
          'pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
        ]"
      >
        <span
          v-if="variant === 'icon'"
          :class="[
            modelValue
              ? 'opacity-0 duration-100 ease-out'
              : 'opacity-100 duration-200 ease-in',
            'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity',
          ]"
          aria-hidden="true"
        >
          <svg
            class="h-3 w-3 text-brand-gray-400"
            fill="none"
            viewBox="0 0 12 12"
          >
            <path
              d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
        <span
          v-if="variant === 'icon'"
          :class="[
            modelValue
              ? 'opacity-100 duration-200 ease-in'
              : 'opacity-0 duration-100 ease-out',
            'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity',
          ]"
          aria-hidden="true"
        >
          <svg
            class="h-3 w-3 text-brand-600"
            fill="currentColor"
            viewBox="0 0 12 12"
          >
            <path
              d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z"
            />
          </svg>
        </span>
      </span>
    </Switch>
  </SwitchGroup>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  Switch,
  SwitchGroup,
  SwitchLabel,
  SwitchDescription,
} from '@headlessui/vue'

type Props = {
  disabled?: boolean
  label?: string
  description?: string
  inlineDescription?: boolean
  modelValue: boolean
  variant?: 'simple' | 'icon' | 'short'
}

const props = defineProps({
  disabled: {
    type: Boolean,
    default: false as Props['disabled'],
  },
  label: {
    type: String,
    default: '' as Props['label'],
  },
  description: {
    type: String,
    default: '' as Props['description'],
  },
  inlineDescription: {
    type: Boolean,
    default: false as Props['inlineDescription'],
  },
  modelValue: {
    type: Boolean,
    default: false as Props['modelValue'],
  },
  variant: {
    type: String,
    default: 'simple' as Props['variant'],
  },
})
const current = ref<HTMLInputElement>()

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()
</script>
