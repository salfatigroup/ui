<template>
  <div class="flex">
    <KButton variant="secondary" class="h-9" @click="decrementDelay">
      <KIconMinus class="h-4 w-4 text-brand-gray-500" aria-hidden="true" />
    </KButton>

    <div class="w-full">
      <KTextInput
        class="w-full"
        name="delay"
        type="number"
        :min="min"
        :max="max"
        :model-value="modelValue"
        v-bind="$attrs"
        @update:model-value="handleDelayChange"
      />
    </div>

    <KButton variant="secondary" class="h-9" @click="incrementDelay">
      <KIconPlus class="h-4 w-4 text-brand-gray-500" aria-hidden="true" />
    </KButton>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ modelValue?: number; min?: number; max?: number }>()
const emit = defineEmits<{ 'update:modelValue': [value: number] }>()

const modelValue = computed<number>({
  get() {
    return props.modelValue ?? 0
  },
  set(value) {
    emit('update:modelValue', value)
  },
})
function handleDelayChange(value: string) {
  const parsedValue = parseInt(value)
  if (isNaN(parsedValue)) {
    return
  }
  modelValue.value = parsedValue
}
function incrementDelay() {
  if (props.max !== undefined && modelValue.value >= props.max) return
  modelValue.value += 1
}
function decrementDelay() {
  if (props.min !== undefined && modelValue.value <= props.min) return
  modelValue.value -= 1
}
</script>
