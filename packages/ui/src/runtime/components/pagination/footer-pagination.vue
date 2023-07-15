<template>
  <div
    class="flex items-center justify-between border-t border-brand-gray-200 bg-white px-4 py-3 sm:px-6"
  >
    <div class="flex flex-1 justify-between sm:hidden">
      <k-button
        :hidden="totalPages === 1"
        :disabled="!hasPrevious"
        variant="secondary"
        @click="
          () => {
            emit('update:modelValue', Math.max(1, modelValue - 1))
            onPrevious?.()
          }
        "
        >Previous</k-button
      >
      <k-button
        :hidden="totalPages === 1"
        :disabled="!hasNext"
        variant="secondary"
        @click="
          () => {
            emit('update:modelValue', Math.min(totalPages, modelValue + 1))
            onNext?.()
          }
        "
        >Next</k-button
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
          <k-button
            :hidden="totalPages === 1"
            :disabled="!hasPrevious"
            variant="secondary"
            size="sm"
            class="rounded-r-none"
            @click="
              () => {
                emit('update:modelValue', Math.max(1, modelValue - 1))
                onPrevious?.()
              }
            "
          >
            <span class="sr-only">Previous</span>
            <IChevronLeft class="h-5 w-5" aria-hidden="true" variant="line" />
          </k-button>
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
          <k-button
            :hidden="totalPages === 1"
            :disabled="!hasNext"
            variant="secondary"
            size="sm"
            class="space-x-0 rounded-l-none"
            @click="
              () => {
                emit('update:modelValue', Math.min(totalPages, modelValue + 1))
                onNext?.()
              }
            "
          >
            <span class="sr-only">Next</span>
            <IChevronRight class="h-5 w-5" aria-hidden="true" variant="line" />
          </k-button>
        </nav>
      </div>
      <div
        v-else-if="variant === 'simple-footer'"
        class="flex flex-1 justify-between sm:justify-end"
      >
        <k-button
          :hidden="totalPages === 1"
          :disabled="!hasPrevious"
          variant="secondary"
          size="lg"
          @click="
            () => {
              emit('update:modelValue', Math.max(1, modelValue - 1))
              onPrevious?.()
            }
          "
          >{{ previousLabel }}</k-button
        >
        <k-button
          :hidden="totalPages === 1"
          :disabled="!hasNext"
          variant="secondary"
          size="lg"
          class="ml-3"
          @click="
            () => {
              emit('update:modelValue', Math.min(totalPages, modelValue + 1))
              onNext?.()
            }
          "
          >{{ nextLabel }}</k-button
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
const { from, to } = useFromTo(props)

const emit = defineEmits<{
  'update:modelValue': [value: number]
}>()
</script>
