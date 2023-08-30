<template>
  <div class="space-y-5">
    <div
      :class="[
        'relative flex items-start',
        right ? 'flex-row-reverse justify-between' : '',
      ]"
    >
      <div class="flex h-6 items-center">
        <input
          v-bind="$attrs"
          v-uid
          :disabled="disabled"
          ref="current"
          type="checkbox"
          :checked="modelValue"
          @input="
            emit(
              'update:modelValue',
              ($event.target as HTMLInputElement).checked,
            )
          "
          class="h-4 w-4 rounded border-brand-gray-300 text-brand-600 focus:ring-indigo-600"
        />
      </div>
      <div class="mx-3 text-sm leading-6">
        <label :for="current?.id" class="font-medium text-brand-gray-900">
          {{ label }}
        </label>

        <template v-if="inlineDescription">
          {{ ' ' }}
          <span class="text-brand-gray-500">
            <span class="sr-only">{{ label }}</span>
            {{ description }}
          </span>
        </template>
        <p class="text-brand-gray-500" v-else>
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
type Props = {
  right?: boolean
  disabled?: boolean
  indeterminate?: boolean
  label?: string
  description?: string
  inlineDescription?: boolean
  modelValue: boolean
}

const props = defineProps({
  right: {
    type: Boolean,
    default: false as Props['right'],
  },
  disabled: {
    type: Boolean,
    default: false as Props['disabled'],
  },
  indeterminate: {
    type: Boolean,
    default: false as Props['indeterminate'],
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
})

const current = ref<HTMLInputElement>()

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()
</script>
