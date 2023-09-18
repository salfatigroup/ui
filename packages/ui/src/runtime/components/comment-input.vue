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
  <div :class="wrapperClasses" v-else>
    <slot name="avatar">
      <KAvatar v-if="avatar" :src="avatar" />
    </slot>
    <div class="min-w-0 flex-1 relative">
      <div :class="textAreaWrapperClasses">
        <label for="comment" class="sr-only">{{ placeholder }}</label>
        <slot name="description"></slot>
        <div v-if="readonly" :class="readonlyDivClasses">
          {{ modelValue }}
        </div>
        <textarea
          v-else
          v-bind="$attrs"
          :disabled="disabled || readonly || isPosting"
          :rows="rows"
          name="comment"
          id="comment"
          ref="textAreaRef"
          class="block w-full resize-none border-0 bg-transparent py-1.5 text-brand-gray-900 placeholder:text-brand-gray-400 focus:ring-0 sm:text-sm sm:leading-6 min-h-fit"
          :placeholder="!readonly ? placeholder : ''"
          @input="onChange"
          :value="value"
        />

        <!-- Spacer element to match the height of the toolbar -->
        <slot name="spacer">
          <div class="py-2" aria-hidden="true" v-if="$slots.customAddons">
            <!-- Matches height of button in toolbar (1px border + 16px content height) -->
            <div class="py-px">
              <div class="h-4" />
            </div>
          </div>
        </slot>
      </div>

      <slot name="footer">
        <div
          :class="[
            'absolute bottom-0 flex justify-between pb-2 pl-3 pr-2 right-0',
            $slots.customAddons ? 'w-full' : 'w-fit',
          ]"
        >
          <div :class="footerClasses">
            <div class="w-fit">
              <slot name="customAddons"></slot>
            </div>
            <div v-if="expandable" class="justify-end flex -mb-1">
              <KButton
                variant="secondary"
                size="xs2"
                isIcon
                @click="expanded = !expanded"
              >
                <IChevronsUpRec v-if="expanded" />
                <IChevronsDownRec v-else />
              </KButton>
            </div>
          </div>
          <div class="flex-grow-0">
            <slot name="actionButton">
              <KButton
                v-if="!readonly"
                @click="emit('post', value)"
                :loading="isPosting"
                :disabled="buttonDisabled"
              >
                {{ actionText }}
              </KButton>
            </slot>
          </div>
        </div>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, PropType, ref, onMounted, watch } from 'vue'
import { IChevronsDownRec, IChevronsUpRec } from './icon'

type Props = {
  placeholder: string
  avatar: string
  actionText: string
  modelValue: string
  disabled: boolean
  readonly: boolean
  isPosting: boolean
  expandable: boolean
  skeleton: boolean
  autofocus: boolean
  wrapperClasses: string
}

const props = defineProps({
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
  isPosting: {
    type: Boolean as PropType<Props['isPosting']>,
    default: false,
  },
  readonly: {
    type: Boolean as PropType<Props['readonly']>,
    default: false,
  },
  expandable: {
    type: Boolean as PropType<Props['expandable']>,
    default: false,
  },
  skeleton: {
    type: Boolean as PropType<Props['skeleton']>,
    default: false,
  },
  autofocus: {
    type: Boolean as PropType<Props['autofocus']>,
    default: false,
  },
  wrapperClasses: {
    type: String as PropType<Props['wrapperClasses']>,
    default: 'flex items-start space-x-4 w-full',
  },
})

const expanded = ref(false)

// The purpose of this ref is to keep the value of the textarea in case only :model-value is sent
// Then we need the updated value
const value = ref(props.modelValue)

const buttonDisabled = computed(
  () => props.disabled || props.isPosting || !value.value,
)

const onChange = (e: Event) => {
  const target = e.target as HTMLTextAreaElement
  value.value = target.value
  emit('update:modelValue', value.value)
}
const rows = computed(() => {
  if (!props.expandable) {
    return 3
  }

  if (props.readonly) {
    return expanded.value ? 5 : 1
  }

  return expanded.value ? 5 : 3
})

watch(
  () => props.modelValue,
  (newValue: string) => {
    value.value = newValue
  },
)

const emit = defineEmits<{
  'update:modelValue': [value: string]
  post: []
}>()

const footerClasses = computed(() => ({
  'flex items-center justify-between space-x-5 w-full flex-1': true,
  'mr-[49%]': props.readonly,
}))

const readonlyDivClasses = computed(() => ({
  'block resize-none border-0 px-3 text-brand-gray-900 sm:text-sm sm:leading-6 mr-2 min-h-fit whitespace-pre-wrap':
    true,
  'xs:max-w-[10rem] sm:max-w-[14rem] md:max-w-[18rem] lg:max-w-[25rem] xl:max-w-[30rem] 2xl:max-w-[35rem] truncate max-h-[2.5rem]':
    props.expandable && !expanded.value,
}))

const textAreaWrapperClasses = computed(() => ({
  'overflow-hidden rounded-lg min-h-fit': true,
  'ring-1 ring-inset ring-brand-gray-300 focus-within:ring-2 focus-within:ring-brand-600':
    !props.readonly,
}))

const textAreaRef = ref<HTMLTextAreaElement | null>(null)
onMounted(() => {
  if (props.autofocus) textAreaRef.value?.focus()
})
</script>
