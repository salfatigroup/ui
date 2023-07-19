<template>
  <div class="flex items-start space-x-4 w-full">
    <KAvatar :src="avatar" />
    <div class="min-w-0 flex-1 relative">
      <div
        class="overflow-hidden rounded-lg shadow-sm ring-1 ring-inset ring-brand-gray-300 focus-within:ring-2 focus-within:ring-brand-600 min-h-fit"
      >
        <label for="comment" class="sr-only">{{ placeholder }}</label>
        <textarea
          v-bind="$attrs"
          :disabled="disabled || readonly || isPosting"
          rows="3"
          name="comment"
          id="comment"
          class="block w-full resize-none border-0 bg-transparent py-1.5 text-brand-gray-900 placeholder:text-brand-gray-400 focus:ring-0 sm:text-sm sm:leading-6 min-h-fit"
          :placeholder="!readonly ? placeholder : ''"
          @input="emit('update:modelValue', $event?.target?.value)"
          :value="text"
        />
        <!-- Spacer element to match the height of the toolbar -->
        <div class="py-2" aria-hidden="true" v-if="$slots.customAddons">
          <!-- Matches height of button in toolbar (1px border + 16px content height) -->
          <div class="py-px">
            <div class="h-4" />
          </div>
        </div>
      </div>

      <div
        :class="[
          'absolute bottom-0 flex justify-between pb-2 pl-3 pr-2 right-0',
          $slots.customAddons ? 'w-full' : 'w-fit',
        ]"
      >
        <div class="flex items-center space-x-5 w-full flex-1">
          <slot name="customAddons"></slot>
        </div>
        <div class="flex-grow-0">
          <slot name="actionButton">
            <KButton
              v-if="!readonly"
              @click="emit('post')"
              :loading="isPosting"
              :disabled="isPosting"
            >
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
  text: string
  disabled: boolean
  readonly: boolean
  isPosting: boolean
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
  text: {
    type: String as PropType<Props['text']>,
    default: '',
  },
  disabled: {
    type: Boolean as PropType<Props['disabled']>,
    default: false,
  },
  isPosting: {
    type: Boolean as PropType<Props['isPosting']>,
    default: false,
  },
  readonly: {
    type: Boolean as PropType<Props['readonly']>,
    default: false,
  },
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
  post: []
}>()
</script>
