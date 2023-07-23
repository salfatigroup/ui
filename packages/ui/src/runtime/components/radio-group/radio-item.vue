<template>
  <label :key="item.value" :class="itemClasses" :for="current?.id">
    <div class="flex h-6 items-center">
      <input
        v-uid
        ref="current"
        :name="name"
        type="radio"
        :checked="modelValue"
        @input="emit('update:modelValue', $event?.target?.value)"
        class="h-4 w-4 border-brand-gray-300 text-brand-600 focus:ring-brand-600 cursor-pointer"
      />
    </div>
    <slot :checked="modelValue" :item="item">
      <div class="ml-3 text-sm leading-6">
        <span class="font-medium text-brand-gray-900">{{ item.label }}</span>
        <template v-if="inlineDescription">
          {{ ' ' }}
          <span :id="`${item.value}-description`" class="text-brand-gray-500">
            {{ item.description }}
          </span>
        </template>
        <span
          v-else-if="!hideDescription"
          as="p"
          :id="`${item.value}-description`"
          class="text-brand-gray-500 block"
        >
          {{ item.description }}
        </span>
      </div>
    </slot>
  </label>
</template>
<script setup lang="ts">
import { PropType, computed, ref } from 'vue'
export type Item = {
  label: string
  value: string | number | boolean | null
  description?: string
}

const current = ref()

const props = defineProps({
  item: {
    type: Object as PropType<Item>,
    required: true,
  },
  modelValue: {
    type: Boolean,
    required: true,
  },
  name: {
    type: String,
    default: '',
  },
  inlineDescription: {
    type: Boolean,
    default: false,
  },
  hideDescription: {
    type: Boolean,
    default: false,
  },
  reverse: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const itemClasses = computed(() => {
  return {
    'relative flex cursor-pointer': true,
    'flex-row-reverse justify-between py-4': props.reverse,
  }
})
</script>
