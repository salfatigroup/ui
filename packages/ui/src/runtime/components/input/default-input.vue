<template>
  <div class="w-full">
    <div class="flex justify-between">
      <label :for="current?.id" :class="labelClasses">{{ label }}</label>
      <span class="text-sm leading-6 text-brand-gray-500" id="email-optional">
        {{ cornerHint }}
      </span>
    </div>

    <div :class="inputWrapperClasses">
      <div
        v-if="leadingIcon"
        ref="leadingIconRef"
        class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
      >
        <slot name="leadingIcon"></slot>
      </div>
      <input
        v-uid
        ref="current"
        v-bind="$attrs"
        :required="required"
        :disabled="disabled"
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        :class="inputClasses"
        @input="
          emit('update:modelValue', ($event.target as HTMLInputElement).value)
        "
      />
      <div
        v-if="trailingIcon || errorText"
        ref="trailingIconRef"
        class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"
      >
        <IAlertCircle
          v-if="errorText"
          :height="20"
          :width="20"
          class="text-brand-danger-500"
          aria-hidden="true"
        />
        <slot v-else name="trailingIcon"></slot>
      </div>
    </div>
    <p :class="bottomTextClasses">
      {{ errorText?.length > 0 ? errorText : helpText }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref, PropType, computed, onMounted } from 'vue'
import { IAlertCircle } from '../icon'
import { DISABLED_INPUT_CLASSES } from '../common/classes'

const current = ref<HTMLInputElement>()
const leadingIconRef = ref<HTMLInputElement>()
const trailingIconRef = ref<HTMLInputElement>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

type InputProps = {
  label: string
  required: boolean
  disabled: boolean
  type: 'text' | 'password' | 'email' | 'url'
  modelValue: string
  placeholder: string
  helpText: string
  errorText: string
  cornerHint: string
  pill: boolean
}

const props = defineProps({
  label: {
    type: String as PropType<InputProps['label']>,
    default: '',
  },
  required: {
    type: Boolean as PropType<InputProps['required']>,
    default: false,
  },
  disabled: {
    type: Boolean as PropType<InputProps['disabled']>,
    default: false,
  },
  type: {
    type: String as PropType<InputProps['type']>,
    default: 'text',
  },
  modelValue: {
    type: String as PropType<InputProps['modelValue']>,
    default: '',
  },
  placeholder: {
    type: String as PropType<InputProps['placeholder']>,
    default: '',
  },
  helpText: {
    type: String as PropType<InputProps['helpText']>,
    default: '',
  },
  errorText: {
    type: String as PropType<InputProps['errorText']>,
    default: '',
  },
  cornerHint: {
    type: String as PropType<InputProps['cornerHint']>,
    default: '',
  },
  pill: {
    type: Boolean as PropType<InputProps['pill']>,
    default: false,
  },
})

defineOptions({
  inheritAttrs: false,
})

onMounted(() => {
  if (current.value) {
    if (leadingIconRef.value) {
      current.value.style.paddingLeft = `calc(${leadingIconRef.value.offsetWidth}px + 0.5rem)`
    }
    if (trailingIconRef.value) {
      current.value.style.paddingRight = `calc(${trailingIconRef.value.offsetWidth}px + 0.5rem)`
    }
  }
})

const { leadingIcon, trailingIcon } = defineSlots()
const labelClasses = computed(() => ({
  'block text-sm font-medium leading-6 text-brand-gray-900': props.label,
  'sr-only': !props.label,
  'pl-4': props.pill,
}))
const inputWrapperClasses = computed(() => ({
  'w-full': true,
  'mt-2': !!props.label,
  'relative rounded-md shadow-sm': props.errorText || leadingIcon,
}))

const bottomTextClasses = computed(() => ({
  'mt-2 text-sm': true,
  hidden: !props.errorText && !props.helpText,
  'text-brand-gray-500': !props.errorText,
  'text-brand-danger-500': props.errorText,
}))

const inputClasses = computed(() => ({
  'block w-full border-0 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6':
    true,
  [DISABLED_INPUT_CLASSES]: true,
  'text-brand-gray-900 ring-brand-gray-300 placeholder:text-brand-gray-400 focus:ring-brand-600':
    !props.errorText,
  'text-brand-danger-900 ring-brand-danger-300 placeholder:text-brand-danger-400 focus:ring-brand-danger-500':
    props.errorText || trailingIcon,

  'rounded-full px-4': props.pill,
  'rounded-md': !props.pill,
  // These will be overriden by the onMounted hook above, but prevents a glitch on load
  'pr-10': trailingIcon,
  'pl-10': leadingIcon,
}))
</script>
