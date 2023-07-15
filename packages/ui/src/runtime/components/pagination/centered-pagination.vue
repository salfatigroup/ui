<template>
  <nav
    class="flex items-center justify-between border-t border-brand-gray-200 px-4 sm:px-0 w-full"
  >
    <div :class="previousClasses">
      <a
        :hidden="totalPages === 1"
        :disabled="!hasPrevious"
        @click="
          () => {
            emit('update:modelValue', Math.max(1, modelValue - 1))
            onPrevious?.()
          }
        "
        class="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-brand-gray-500 hover:border-brand-gray-300 hover:text-brand-gray-700 hidden:invisible"
      >
        <IArrowLeft
          class="mr-3 h-4 w-4 text-brand-gray-400"
          aria-hidden="true"
          variant="line"
        />
        {{ previousLabel }}
      </a>
    </div>
    <div class="-mt-px flex justify-center">
      <Page
        v-for="i in pages.start"
        :key="i"
        :number="i"
        :model-value="i === modelValue"
        @update:model-value="emit('update:modelValue', i)"
      />

      <template v-if="pages.middle.length">
        <span
          class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500"
          >...</span
        >
        <Page
          v-for="i in pages.middle"
          :key="i"
          :number="i"
          :model-value="i === modelValue"
          @update:model-value="emit('update:modelValue', i)"
        />
      </template>

      <template v-if="pages.end.length">
        <span
          class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500"
          >...</span
        >
        <Page
          v-for="i in pages.end"
          :key="i"
          :number="i"
          :model-value="i === modelValue"
          @update:model-value="emit('update:modelValue', i)"
        />
      </template>
    </div>
    <div :class="nextClasses">
      <a
        :hidden="totalPages === 1"
        :disabled="!hasNext"
        @click="
          () => {
            emit('update:modelValue', Math.min(totalPages, modelValue + 1))
            onNext?.()
          }
        "
        class="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-brand-gray-500 hover:border-brand-gray-300 hover:text-brand-gray-700 cursor-pointer"
      >
        {{ nextLabel }}
        <IArrowRight
          class="ml-3 h-4 w-4 text-brand-gray-400"
          aria-hidden="true"
          variant="line"
        />
      </a>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { PropType, computed } from 'vue'
import { IArrowLeft, IArrowRight } from '../icon'
import Page from './page.vue'
import usePages from './use_pages'
import { PaginationProps } from './types'

const props = defineProps({
  total: {
    type: Number as PropType<PaginationProps['total']>,
  },
  modelValue: {
    type: Number as PropType<PaginationProps['modelValue']>,
    default: 2,
  },
  pageSize: {
    type: Number,
  },
  previousLabel: {
    type: String,
    default: 'Previous',
  },
  nextLabel: {
    type: String,
    default: 'Next',
  },
  variant: {
    type: String as PropType<PaginationProps['variant']>,
    default: 'footer',
  },
  maxPages: {
    type: Number,
    default: 7,
  },
  onNext: {
    type: Function as PropType<PaginationProps['onNext']>,
  },
  onPrevious: {
    type: Function as PropType<PaginationProps['onPrevious']>,
  },
})

const { pages, totalPages, hasNext, hasPrevious } = usePages(props)

const nextClasses = computed(() => [
  {
    '-mt-px flex flex-1 w-0 justify-end': true,
    'cursor-pointer': hasNext.value,
    invisible: totalPages.value === 1,
    'opacity-50 cursor-not-allowed pointer-events-none': !hasNext.value,
  },
])

const previousClasses = computed(() => [
  {
    '-mt-px flex flex-1 w-0': true,
    'cursor-pointer': hasPrevious.value,
    invisible: totalPages.value === 1,
    'opacity-50 cursor-not-allowed pointer-events-none': !hasPrevious.value,
  },
])

const emit = defineEmits<{
  'update:modelValue': [value: number]
}>()
</script>
