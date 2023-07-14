<template>
  <RadioGroup
    :model-value="modelValue"
    @update:model-value="emit('update:modelValue', $event)"
  >
    <RadioGroupLabel
      class="text-base font-semibold leading-6 text-brand-gray-900"
      >{{ title }}</RadioGroupLabel
    >

    <div class="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
      <RadioGroupOption
        as="template"
        v-for="item in items"
        :key="item.value"
        :value="item.value"
        v-slot="{ active, checked }"
      >
        <div
          :class="[
            active
              ? 'border-indigo-600 ring-2 ring-indigo-600'
              : 'border-gray-300',
            'relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none',
          ]"
        >
          <span class="flex flex-1">
            <span class="flex flex-col">
              <RadioGroupLabel
                as="span"
                class="block text-sm font-medium text-brand-gray-900"
                >{{ item.label }}</RadioGroupLabel
              >
              <RadioGroupDescription
                as="span"
                class="mt-1 flex items-center text-sm text-brand-gray-500"
                >{{ item.description }}</RadioGroupDescription
              >
              <RadioGroupDescription
                as="span"
                class="mt-6 text-sm font-medium text-brand-gray-900"
                >{{ item.bottomText }}</RadioGroupDescription
              >
            </span>
          </span>
          <ICheckCircle
            :class="[!checked ? 'invisible' : '', 'h-5 w-5 text-brand-600']"
            aria-hidden="true"
            variant="filled"
          />
          <span
            :class="[
              active ? 'border' : 'border-2',
              checked ? 'border-brand-600' : 'border-transparent',
              'pointer-events-none absolute -inset-px rounded-lg',
            ]"
            aria-hidden="true"
          />
        </div>
      </RadioGroupOption>
    </div>
  </RadioGroup>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import {
  RadioGroup,
  RadioGroupDescription,
  RadioGroupLabel,
  RadioGroupOption,
} from '@headlessui/vue'
import { ICheckCircle } from '../icon'

export type CardItem = {
  value: string
  label: string
  description?: string
  bottomText?: string
}
export type Props = {
  title?: string
  description?: string
  items: CardItem[]
  name: string
  variant: 'horizontal' | 'vertical' | 'vertical-right' | 'cards'
  inlineItemDescription?: boolean
}
const props = defineProps({
  title: {
    type: String,
    default: '' as Props['title'],
  },
  description: {
    type: String,
    default: '' as Props['description'],
  },
  items: {
    type: Array as PropType<CardItem[]>,
    required: true,
    default: [] as Props['items'],
  },
  modelValue: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    default: '' as Props['name'],
  },
  variant: {
    type: String as PropType<Props['variant']>,
    default: 'vertical' as Props['variant'],
  },
  inlineItemDescription: {
    type: Boolean,
    default: false as Props['inlineItemDescription'],
  },
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>
