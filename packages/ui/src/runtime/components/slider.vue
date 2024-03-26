<template>
  <div
    ref="sliderRef"
    class="relative h-2 bg-brand-gray-200 rounded cursor-pointer w-full"
    @click="onBarClick"
  >
    <div
      class="absolute bg-brand-500/60 h-full border-r border-brand-gray-200 rounded"
      :style="{ width: `${percentage}%` }"
    ></div>
    <div
      class="absolute -top-1 -ml-2 w-4 h-4 bg-brand-500 rounded-full"
      :style="{ left: `${percentage}%` }"
      @mousedown="onMouseDown"
    ></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  modelValue: {
    type: Number,
    required: true,
  },
  min: {
    type: Number,
    default: 0,
  },
  max: {
    type: Number,
    default: 100,
  },
  step: {
    type: Number,
    default: 1,
  },
})

const emit = defineEmits<{
  (event: 'update:modelValue', value: number): void
}>()

const sliderRef = ref<HTMLElement | null>(null)
const isDragging = ref(false)
const percentage = computed(
  () => ((props.modelValue - props.min) / (props.max - props.min)) * 100,
)

function onBarClick(event: MouseEvent) {
  if (sliderRef.value) {
    const { left, width } = sliderRef.value.getBoundingClientRect()
    const newValue =
      ((event.clientX - left) / width) * (props.max - props.min) + props.min

    const step = props.step
    const roundedValue = Math.round(newValue / step) * step
    emit('update:modelValue', roundedValue)
  }
}

function onMouseDown(event: MouseEvent) {
  event.preventDefault()
  isDragging.value = true
  window.addEventListener('mousemove', onMouseMove)
  window.addEventListener('mouseup', onMouseUp)
}

function onMouseMove(event: MouseEvent) {
  if (isDragging.value && sliderRef.value) {
    const { left, width } = sliderRef.value.getBoundingClientRect()
    let newValue =
      ((event.clientX - left) / width) * (props.max - props.min) + props.min
    newValue = Math.max(props.min, Math.min(newValue, props.max))

    const step = props.step
    newValue = Math.round(newValue / step) * step

    emit('update:modelValue', newValue)
  }
}

function onMouseUp() {
  isDragging.value = false
  window.removeEventListener('mousemove', onMouseMove)
  window.removeEventListener('mouseup', onMouseUp)
}

onMounted(() => {
  if (props.modelValue < props.min || props.modelValue > props.max) {
    console.warn('modelValue should be within the min and max values')
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('mousemove', onMouseMove)
  window.removeEventListener('mouseup', onMouseUp)
})
</script>
