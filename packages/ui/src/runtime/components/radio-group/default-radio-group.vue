<template>
  <div>
    <label class="text-base font-semibold text-brand-gray-900">{{
      title
    }}</label>
    <p class="text-sm text-brand-gray-500">
      {{ description }}
    </p>
    <fieldset class="mt-4">
      <legend class="sr-only">{{ title }}</legend>
      <div :class="itemsWrapperClasses">
        <RadioItem
          v-for="item in items"
          :item="item"
          :key="item.value"
          :name="name || JSON.stringify(items)"
          :model-value="modelValue === item.value"
          :inline-description="inlineItemDescription"
          :hide-description="variant === 'horizontal'"
          :reverse="variant === 'vertical-right'"
          @update:model-value="emit('update:modelValue', item.value)"
        />
      </div>
    </fieldset>
  </div>
</template>

<script setup lang="ts">
import { PropType, computed } from 'vue'
import RadioItem, { Item } from './radio-item.vue'

export type Props = {
  title?: string
  description?: string
  items: Item[]
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
    type: Array as PropType<Item[]>,
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
const itemsWrapperClasses = computed(() => {
  return {
    'space-y-4': props.variant !== 'vertical-right',
    'divide-brand-gray-200 divide-y': props.variant === 'vertical-right',
    'sm:flex sm:items-center sm:space-x-10 sm:space-y-0':
      props.variant === 'horizontal',
  }
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>
