<template>
  <div>
    <Listbox
      as="div"
      class="w-full"
      :model-value="modelValue"
      @update:model-value="
        emit('update:modelValue', $event?.value === null ? undefined : $event)
      "
      :multiple="multiple"
      :disabled="disabled === true || disabled === 'true'"
      v-slot="{ open }"
    >
      <slot name="label">
        <ListboxLabel
          v-if="label"
          class="block text-sm font-medium leading-6 text-brand-gray-900 mb-2"
        >
          {{ label }}
        </ListboxLabel>
      </slot>
      <div class="relative">
        <ListboxButton :class="listBoxButtonClasses">
          <slot name="prefixIcon"></slot>
          <Option :option="modelValue" v-if="!Array.isArray(modelValue)" />
          <Option :option="modelValue[0]" v-else-if="modelValue.length > 0">
            <template v-if="modelValue.length > 1">
              <span class="text-brand-gray-500 text-ellipsis ml-1">
                +{{ modelValue.length - 1 }} more
              </span>
            </template>
          </Option>
          <div
            class="flex items-center space-x-2 truncate text-brand-gray-500/50"
            v-else
          >
            <slot name="placeholderIcon"></slot>
            <div>
              {{ placeholder }}
            </div>
          </div>
          <span
            v-if="!pill"
            class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
          >
            <IChevronUp
              v-if="open"
              class="h-5 w-5 text-brand-gray-400"
              aria-hidden="true"
              variant="line"
            />
            <IChevronDown
              v-else
              class="h-5 w-5 text-brand-gray-400"
              aria-hidden="true"
              variant="line"
            />
          </span>
        </ListboxButton>

        <transition
          leave-active-class="transition ease-in duration-100"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <slot name="options">
            <ListboxOptions :class="listboxOptionsClasses">
              <ListboxOption
                as="template"
                v-for="option in options"
                :key="option.value ?? ''"
                :value="option"
                v-slot="{ active, selected }"
              >
                <slot
                  :active="active"
                  :selected="selected"
                  :option="option"
                  name="option"
                >
                  <li
                    :class="[
                      active
                        ? 'bg-brand-600 text-white'
                        : 'text-brand-gray-900',
                      'relative cursor-default select-none py-2 pl-3 pr-9',
                    ]"
                  >
                    <Option
                      :active="active"
                      :selected="selected"
                      :option="option"
                    />
                  </li>
                </slot>
              </ListboxOption>
            </ListboxOptions>
          </slot>
        </transition>
      </div>
    </Listbox>
    <p v-if="errorText" :class="bottomTextClasses">
      {{ errorText }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { PropType, computed } from 'vue'
import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/vue'
import { IChevronDown, IChevronUp } from './icon'
import Option, { OptionType } from './select/option.vue'
import { DISABLED_INPUT_CLASSES } from './common/classes'

type Props = {
  options: OptionType[]
  modelValue: OptionType | OptionType[]
  multiple: boolean
  placeholder: string
  label: string
  pill: boolean
  disabled: boolean | string
  direction: 'up' | 'down' | 'up-left' | 'up-right' | 'down-left' | 'down-right'
  errorText?: string
}

const props = defineProps({
  options: {
    type: Array as PropType<Props['options']>,
    default: () => [],
  },
  modelValue: {
    type: [Object, Array] as PropType<Props['modelValue']>,
    default: () => [],
  },
  multiple: {
    type: Boolean as PropType<Props['multiple']>,
    default: false,
  },
  placeholder: {
    type: String as PropType<Props['placeholder']>,
    default: 'Select an option',
  },
  label: {
    type: String as PropType<Props['label']>,
    default: '',
  },
  pill: {
    type: Boolean as PropType<Props['pill']>,
    default: false,
  },
  disabled: {
    type: [Boolean, String] as PropType<Props['disabled']>,
    default: false,
  },
  direction: {
    type: String as PropType<Props['direction']>,
    default: 'down',
  },
  errorText: {
    type: String as PropType<Props['errorText']>,
    default: '',
  },
})

const emit = defineEmits<{
  'update:modelValue': [value: OptionType | OptionType[]]
}>()

const hasValue = computed(() => {
  if (Array.isArray(props.modelValue)) {
    return props.modelValue.length > 0
  }
  return !!props.modelValue
})

const listBoxButtonClasses = computed(() => ({
  'relative space-x-2': true,
  'text-brand-gray-900': hasValue.value,
  'text-brand-gray-500/50': !hasValue.value,
  'ring-brand-gray-300': !props.errorText && !props.pill,
  'w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left shadow-sm ring-1 ring-inset focus:outline-none focus:ring-2 focus:ring-brand-600 sm:text-sm sm:leading-6':
    !props.pill,
  'inline-flex items-center whitespace-nowrap rounded-full bg-brand-gray-50 px-2 py-2 text-sm font-medium hover:bg-brand-gray-100 sm:px-3':
    props.pill,
  'ring-brand-danger-300': props.errorText,
  [DISABLED_INPUT_CLASSES]: true,
}))

const listboxOptionsClasses = computed(() => ({
  'absolute z-10 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm':
    true,
  'top-full mt-1': props.direction === 'down',
  'bottom-full mb-1': props.direction === 'up',
  'left-full ml-1 top-0': props.direction === 'down-right',
  'left-full ml-1 bottom-0': props.direction === 'up-right',
  'right-full mr-1 top-0': props.direction === 'down-left',
  'right-full mr-1 bottom-0': props.direction === 'up-left',
}))

const bottomTextClasses = computed(() => ({
  'mt-2 text-sm': true,
  'text-brand-danger-500': props.errorText,
}))
</script>
