<template>
  <div :key="item.value" :class="itemClasses">
    <div class="flex h-6 items-center">
      <input
        :id="item.value"
        :name="name"
        type="radio"
        :checked="modelValue"
        @input="emit('update:modelValue', $event?.target?.value)"
        class="h-4 w-4 border-brand-gray-300 text-brand-600 focus:ring-brand-600"
      />
    </div>

    <div class="ml-3 text-sm leading-6">
      <label :for="item.value" class="font-medium text-brand-gray-900">{{
        item.label
      }}</label>
      <template v-if="inlineDescription">
        {{ ' ' }}
        <span :id="`${item.value}-description`" class="text-brand-gray-500">
          {{ item.description }}
        </span>
      </template>
      <p
        v-else-if="!hideDescription"
        :id="`${item.value}-description`"
        class="text-brand-gray-500"
      >
        {{ item.description }}
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { PropType, computed } from 'vue'
export type Item = {
  label: string
  value: string
  description?: string
}
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
    'relative flex': true,
    'flex-row-reverse justify-between py-4': props.reverse,
  }
})
</script>
