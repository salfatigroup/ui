<template>
  <div
    class="flex items-center justify-between border-t border-brand-gray-200 bg-white px-4 py-3 sm:px-6"
  >
    <div class="flex flex-1 justify-between sm:hidden">
      <a
        href="#"
        class="relative inline-flex items-center rounded-md border border-brand-gray-300 bg-white px-4 py-2 text-sm font-medium text-brand-gray-700 hover:bg-brand-gray-50"
        >Previous</a
      >
      <a
        href="#"
        class="relative ml-3 inline-flex items-center rounded-md border border-brand-gray-300 bg-white px-4 py-2 text-sm font-medium text-brand-gray-700 hover:bg-brand-gray-50"
        >Next</a
      >
    </div>
    <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
      <div>
        <p class="text-sm text-brand-gray-700">
          Showing
          {{ ' ' }}
          <span class="font-medium">{{ from }}</span>
          {{ ' ' }}
          to
          {{ ' ' }}
          <span class="font-medium">{{ to }}</span>
          {{ ' ' }}
          of
          {{ ' ' }}
          <span class="font-medium">{{ total }}</span>
          {{ ' ' }}
          results
        </p>
      </div>
      <div v-if="variant === 'footer'">
        <nav
          class="isolate inline-flex -space-x-px rounded-md shadow-sm"
          aria-label="Pagination"
        >
          <a
            href="#"
            @click="emit('update:modelValue', Math.max(1, modelValue - 1))"
            class="relative inline-flex items-center rounded-l-md px-2 py-2 text-brand-gray-400 ring-1 ring-inset ring-brand-gray-300 hover:bg-brand-gray-50 focus:z-20 focus:outline-offset-0"
          >
            <span class="sr-only">Previous</span>
            <IChevronLeft class="h-5 w-5" aria-hidden="true" variant="line" />
          </a>
          <FooterPage
            v-for="i in pages.start"
            :key="i"
            :number="i"
            :model-value="i === modelValue"
            @update:model-value="emit('update:modelValue', i)"
          />

          <template v-if="pages.middle.length">
            <span
              class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-brand-gray-700 ring-1 ring-inset ring-brand-gray-300 focus:outline-offset-0"
              >...</span
            >
            <FooterPage
              v-for="i in pages.middle"
              :key="i"
              :number="i"
              :model-value="i === modelValue"
              @update:model-value="emit('update:modelValue', i)"
            />
          </template>

          <template v-if="pages.end.length">
            <span
              class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-brand-gray-700 ring-1 ring-inset ring-brand-gray-300 focus:outline-offset-0"
              >...</span
            >
            <FooterPage
              v-for="i in pages.end"
              :key="i"
              :number="i"
              :model-value="i === modelValue"
              @update:model-value="emit('update:modelValue', i)"
            />
          </template>
          <a
            href="#"
            @click="
              emit('update:modelValue', Math.min(totalPages, modelValue + 1))
            "
            class="relative inline-flex items-center rounded-r-md px-2 py-2 text-brand-gray-400 ring-1 ring-inset ring-brand-gray-300 hover:bg-brand-gray-50 focus:z-20 focus:outline-offset-0"
          >
            <span class="sr-only">Next</span>
            <IChevronRight class="h-5 w-5" aria-hidden="true" variant="line" />
          </a>
        </nav>
      </div>
      <div
        v-else-if="variant === 'simple-footer'"
        class="flex flex-1 justify-between sm:justify-end"
      >
        <a
          href="#"
          @click="emit('update:modelValue', Math.max(1, modelValue - 1))"
          class="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-brand-gray-900 ring-1 ring-inset ring-brand-gray-300 hover:bg-brand-gray-50 focus-visible:outline-offset-0"
          >{{ previousLabel }}</a
        >
        <a
          href="#"
          class="relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-brand-gray-900 ring-1 ring-inset ring-brand-gray-300 hover:bg-brand-gray-50 focus-visible:outline-offset-0"
          @click="
            emit('update:modelValue', Math.min(totalPages, modelValue + 1))
          "
          >{{ nextLabel }}</a
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType, ref, computed } from 'vue'
import { useElementSize } from '@vueuse/core'
import { IChevronLeft, IChevronRight } from '../icon'
import FooterPage from './footer-page.vue'
import usePages from './use_pages'
import useFromTo from './use_from_to'

type PaginationProps = {
  total: number
  modelValue: number
  pageSize: number
  previousLabel: string
  nextLabel: string
  variant: 'footer' | 'simple-footer'
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
  variant: {
    type: String as PropType<PaginationProps['variant']>,
    default: 'footer',
  },
  maxPages: {
    type: Number,
    default: 7,
  },
})

const { pages, totalPages } = usePages(props)
const { from, to } = useFromTo(props)

const emit = defineEmits<{
  'update:modelValue': [value: number]
}>()
</script>
