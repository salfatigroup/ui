<template>
  <div
    role="status"
    class="max-w-sm p-4 rounded animate-pulse md:p-6 w-full"
    v-if="skeleton"
  >
    <div class="flex items-center mt-4 space-x-3 w-full">
      <svg
        class="w-10 h-10 text-brand-gray-200 dark:text-brand-gray-700 flex-shrink-0"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"
        />
      </svg>
      <div class="w-full">
        <div
          class="h-2.5 bg-brand-gray-200 rounded-full dark:bg-brand-gray-700 w-[65%] mb-2"
        ></div>
        <div
          class="w-full h-2 bg-brand-gray-200 rounded-full dark:bg-brand-gray-700"
        ></div>
      </div>
    </div>
  </div>
  <div class="flex items-start space-x-4 w-full" v-else>
    <KAvatar :src="avatar" />
    <div class="min-w-0 flex-1 relative">
      <div
        class="overflow-hidden rounded-lg shadow-sm ring-1 ring-inset ring-brand-gray-300 focus-within:ring-2 focus-within:ring-brand-600 min-h-fit"
      >
        <label for="comment" class="sr-only">{{ placeholder }}</label>
        <textarea
          v-bind="$attrs"
          :disabled="disabled"
          rows="3"
          name="comment"
          id="comment"
          class="block w-full resize-none border-0 bg-transparent py-1.5 text-brand-gray-900 placeholder:text-brand-gray-400 focus:ring-0 sm:text-sm sm:leading-6 min-h-fit"
          :placeholder="!disabled ? placeholder : ''"
          @input="emit('update:modelValue', $event?.target?.value)"
          :value="modelValue"
        />

        <!-- Spacer element to match the height of the toolbar -->
        <div class="py-2" aria-hidden="true">
          <!-- Matches height of button in toolbar (1px border + 16px content height) -->
          <div class="py-px">
            <div class="h-4" />
          </div>
        </div>
      </div>

      <div
        class="absolute inset-x-0 bottom-0 flex justify-between pb-2 pl-3 pr-2 grow-0"
      >
        <div class="flex items-center space-x-5">
          <slot name="customAddons"></slot>
        </div>
        <div class="flex-grow-0">
          <slot name="actionButton">
            <KButton v-if="!disabled" @click="emit('post')">
              {{ actionText }}
            </KButton>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'

type Props = {
  placeholder: string
  avatar: string
  actionText: string
  modelValue: string
  disabled: boolean
  skeleton: boolean
}

defineProps({
  placeholder: {
    type: String as PropType<Props['placeholder']>,
    default: 'Add your comment...',
  },
  avatar: {
    type: String as PropType<Props['avatar']>,
    default: '',
  },
  actionText: {
    type: String as PropType<Props['actionText']>,
    default: 'Post',
  },
  modelValue: {
    type: String as PropType<Props['modelValue']>,
    default: '',
  },
  disabled: {
    type: Boolean as PropType<Props['disabled']>,
    default: false,
  },
  skeleton: {
    type: Boolean as PropType<Props['skeleton']>,
    default: false,
  },
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
  post: []
}>()
</script>
