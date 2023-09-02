<template>
  <div>
    <div
      class="flex items-center justify-between"
      v-if="variant === 'small-cards'"
    >
      <slot name="title" :title="title" v-if="variant === 'small-cards'">
        <h2 class="text-sm font-medium leading-6 text-brand-gray-900">
          {{ title }}
        </h2>
      </slot>
      <a
        v-if="learnMoreText"
        :href="learnMoreLink ?? '#'"
        class="text-sm font-medium leading-6 text-brand-600 hover:text-brand-500"
      >
        {{ learnMoreText }}
      </a>
    </div>
    <RadioGroup
      :model-value="modelValue"
      @update:model-value="emit('update:modelValue', $event)"
      class="mt-4 space-y-4"
      v-bind="$attrs"
    >
      <slot name="title" :title="title" v-if="variant !== 'small-cards'">
        <RadioGroupLabel
          class="text-base font-semibold leading-6 text-brand-gray-900"
        >
          {{ title }}
        </RadioGroupLabel>
      </slot>

      <div
        v-if="variant === 'cards'"
        :class="wrapperClasses ?? cardsWrapperClasses"
      >
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
                ? 'border-brand-600 ring-2 ring-brand-600'
                : 'border-brand-gray-300',
              'relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none',
            ]"
          >
            <slot :active="active" :checked="checked" :item="item">
              <span class="flex flex-1">
                <span class="flex flex-col">
                  <RadioGroupLabel
                    as="span"
                    class="block text-sm font-medium text-brand-gray-900"
                  >
                    {{ item.label }}
                  </RadioGroupLabel>
                  <RadioGroupDescription
                    as="span"
                    class="mt-1 flex items-center text-sm text-brand-gray-500"
                  >
                    {{ item.description }}
                  </RadioGroupDescription>
                  <RadioGroupDescription
                    as="span"
                    class="mt-6 text-sm font-medium text-brand-gray-900"
                  >
                    {{ item.bottomText }}
                  </RadioGroupDescription>
                </span>
              </span>
            </slot>
            <slot name="icon" :active="active" :checked="checked" :item="item">
              <ICheckCircle
                :class="[!checked ? 'invisible' : '', 'h-5 w-5 text-brand-600']"
                aria-hidden="true"
                variant="filled"
              />
            </slot>
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
      <div
        v-else-if="variant === 'small-cards'"
        :class="wrapperClasses ?? smallCardsWrapperClasses"
      >
        <RadioGroupOption
          as="template"
          v-for="item in items"
          :key="item.value"
          :value="item.value"
          :disabled="item.disabled"
          v-slot="{ active, checked }"
        >
          <slot :active="active" :checked="checked" :item="item">
            <div
              :class="[
                !item.disabled
                  ? 'cursor-pointer focus:outline-none'
                  : 'cursor-not-allowed opacity-25',
                active ? 'ring-2 ring-brand-600 ring-offset-2' : '',
                checked
                  ? 'bg-brand-600 text-white hover:bg-brand-500'
                  : 'ring-1 ring-inset ring-brand-gray-300 bg-white text-brand-gray-900 hover:bg-brand-gray-50',
                'flex items-center justify-center rounded-md py-3 px-3 text-sm font-semibold uppercase sm:flex-1',
              ]"
            >
              <RadioGroupLabel as="span">
                {{ item.label }}
              </RadioGroupLabel>
            </div>
          </slot>
        </RadioGroupOption>
      </div>
      <div
        v-else-if="variant === 'stacked-cards'"
        :class="wrapperClasses ?? stackedCardsWrapperClasses"
      >
        <RadioGroupOption
          as="template"
          v-for="item in items"
          :key="item.value"
          :value="item.value"
          v-slot="{ active, checked }"
        >
          <slot :active="active" :checked="checked" :item="item">
            <div
              :class="[
                active
                  ? 'border-brand-600 ring-2 ring-brand-600'
                  : 'border-brand-gray-300',
                'relative block rounded-lg border bg-white px-6 py-4 shadow-sm focus:outline-none sm:flex sm:justify-between',
                item.disabled
                  ? 'opacity-50 cursor-not-allowed pointer-events-none'
                  : 'cursor-pointer',
              ]"
            >
              <span class="flex items-center">
                <span class="flex flex-col text-sm">
                  <RadioGroupLabel
                    as="span"
                    class="font-medium text-brand-gray-900"
                  >
                    {{ item.label }}
                  </RadioGroupLabel>
                  <RadioGroupDescription as="span" class="text-brand-gray-500">
                    <span class="block sm:inline">{{ item.description }}</span>
                  </RadioGroupDescription>
                </span>
              </span>
              <RadioGroupDescription
                as="span"
                class="mt-2 flex text-sm sm:ml-4 sm:mt-0 sm:flex-col sm:text-right"
              >
                <span class="font-medium text-brand-gray-900">
                  {{ item.sideLabel }}
                </span>
                <span class="ml-1 text-brand-gray-500 sm:ml-0">
                  {{ item.bottomText }}
                </span>
              </RadioGroupDescription>
              <span
                :class="[
                  active ? 'border' : 'border-2',
                  checked ? 'border-brand-600' : 'border-transparent',
                  'pointer-events-none absolute -inset-px rounded-lg',
                ]"
                aria-hidden="true"
              />
            </div>
          </slot>
        </RadioGroupOption>
      </div>
    </RadioGroup>
  </div>
</template>

<script setup lang="ts">
import { PropType, computed } from 'vue'
import {
  RadioGroup,
  RadioGroupDescription,
  RadioGroupLabel,
  RadioGroupOption,
} from '@headlessui/vue'
import { ICheckCircle } from '../icon'
import { Variant } from './types'

export type CardItem = {
  value: string | number | boolean | null
  label: string
  description?: string
  bottomText?: string
  sideLabel?: string
  disabled?: boolean
}
export type Props = {
  title?: string
  description?: string
  items: CardItem[]
  name: string
  variant: Variant
  inlineItemDescription?: boolean
  learnMoreText?: string
  learnMoreLink?: string
  wrapperClasses?: string | null
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
  learnMoreText: {
    type: String,
    default: '' as Props['learnMoreText'],
  },
  learnMoreLink: {
    type: String,
    default: '' as Props['learnMoreLink'],
  },
  wrapperClasses: {
    type: String,
    default: null as Props['wrapperClasses'],
  },
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const cardsWrapperClasses = computed(() => ({
  'mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4': true,
}))
const smallCardsWrapperClasses = computed(() => ({
  'grid grid-cols-3 gap-3 sm:grid-cols-6': true,
}))
const stackedCardsWrapperClasses = computed(() => ({
  'space-y-4': true,
}))
</script>
