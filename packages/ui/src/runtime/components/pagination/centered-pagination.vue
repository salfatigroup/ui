<template>
  <nav
    class="flex items-center justify-between border-t border-brand-gray-200 px-4 sm:px-0 w-full"
  >
    <div class="-mt-px flex flex-1 w-0">
      <a
        href="#"
        @click="emit('update:modelValue', Math.max(1, modelValue - 1))"
        class="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-brand-gray-500 hover:border-brand-gray-300 hover:text-brand-gray-700"
      >
        <IArrowLeft
          class="mr-3 h-5 w-5 text-brand-gray-400"
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
    <div class="-mt-px flex flex-1 w-0 justify-end">
      <a
        href="#"
        @click="emit('update:modelValue', Math.min(totalPages, modelValue + 1))"
        class="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-brand-gray-500 hover:border-brand-gray-300 hover:text-brand-gray-700"
      >
        {{ nextLabel }}
        <IArrowRight
          class="ml-3 h-5 w-5 text-brand-gray-400"
          aria-hidden="true"
          variant="line"
        />
      </a>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { IArrowLeft, IArrowRight } from '../icon'
import Page from './page.vue'
import usePages from './use_pages'

type PaginationProps = {
  total: number
  modelValue: number
  pageSize: number
  previousLabel: string
  nextLabel: string
  variant: 'centered' | 'footer' | 'simple-footer'
  maxPages: number
}
const props = defineProps({
  total: {
    type: Number as PropType<PaginationProps['total']>,
    required: true,
  },
  modelValue: {
    type: Number as PropType<PaginationProps['modelValue']>,
    required: true,
    default: 2,
  },
  pageSize: {
    type: Number,
    required: true,
  },
  previousLabel: {
    type: String,
    default: 'Previous',
  },
  nextLabel: {
    type: String,
    default: 'Next',
  },
  maxPages: {
    type: Number,
    default: 7,
  },
})

const { pages, totalPages } = usePages(props)

const emit = defineEmits<{
  'update:modelValue': [value: number]
}>()
</script>
