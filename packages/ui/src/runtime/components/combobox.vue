<template>
  <Combobox
    as="div"
    :model-value="modelValue"
    @update:model-value="emit('update:modelValue', $event)"
    v-bind="$attrs"
    :multiple="multiple"
    :disabled="disabled"
    class="w-full"
    v-slot="{ open }"
  >
    <slot name="label">
      <ComboboxLabel
        class="block text-sm font-medium leading-6 text-brand-gray-900"
      >
        {{ label }}
      </ComboboxLabel>
    </slot>
    <div class="relative mt-2">
      <slot name="input">
        <ComboboxInput
          class="w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-brand-gray-900 shadow-sm ring-1 ring-inset ring-brand-gray-300 focus:ring-2 focus:ring-inset focus:ring-brand-600 sm:text-sm sm:leading-6 disabled:cursor-not-allowed disabled:bg-brand-gray-50 disabled:text-brand-gray-500 disabled:ring-brand-gray-200 peer"
          @change="query = $event.target.value"
          @blur="query = ''"
          v-bind="$attrs"
          :disabled="disabled"
          :display-value="(option) => option?.label"
        ></ComboboxInput>
      </slot>
      <slot>
        <div
          class="absolute pointer-events-none line-clamp-1 pt-2 pl-3 pr-10 peer-focus:hidden top-0 text-sm text-brand-gray-900"
        >
          <slot name="placeholder"></slot>
        </div>
      </slot>
      <slot name="button">
        <ComboboxButton
          :disabled="disabled"
          class="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none disabled:cursor-not-allowed"
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
        </ComboboxButton>
      </slot>

      <slot name="options">
        <ComboboxOptions
          v-if="filteredOptions.length > 0"
          :disabled="disabled"
          :class="comboboxOptionsClasses"
        >
          <ComboboxOption
            v-for="option in filteredOptions"
            :key="option.value"
            :value="option"
            as="template"
            v-slot="{ active, selected }"
          >
            <li
              :class="[
                'relative cursor-default select-none py-2 pl-3 pr-9',
                active ? 'bg-brand-600 text-white' : 'text-brand-gray-900',
              ]"
            >
              <Option :active="active" :selected="selected" :option="option" />
            </li>
          </ComboboxOption>
        </ComboboxOptions>
      </slot>
    </div>
  </Combobox>
</template>

<script setup lang="ts">
import { computed, ref, PropType, watch } from 'vue'
import { ICheck, IChevronDown, IChevronUp } from './icon'
import Option, { OptionType } from './select/option.vue'
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxLabel,
  ComboboxOption,
  ComboboxOptions,
} from '@headlessui/vue'

type Props = {
  options: OptionType[]
  label: string
  disabled?: boolean
  direction?:
    | 'up'
    | 'down'
    | 'up-left'
    | 'up-right'
    | 'down-left'
    | 'down-right'
}

const props = defineProps({
  label: {
    type: String,
    default: '' as Props['label'],
  },
  options: {
    type: Array as PropType<Props['options']>,
    default: [] as Props['options'],
  },
  multiple: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: [Object, Array] as PropType<OptionType | OptionType[]>,
  },
  onTextChange: {
    type: Function as PropType<(value: string) => void>,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  direction: {
    type: String as PropType<Props['direction']>,
    default: 'down',
  },
})

const query = ref('')

watch(query, (value) => {
  props.onTextChange?.(value)
})
const filteredOptions = computed(() => {
  if (props.onTextChange || query.value === '') {
    return props.options
  }
  return props.options.filter((option) => {
    return option?.label?.toLowerCase?.().includes(query.value.toLowerCase())
  })
})

const emit = defineEmits<{
  'update:modelValue': [value: OptionType | OptionType[]]
}>()

const comboboxOptionsClasses = computed(() => ({
  'absolute z-10 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm':
    true,
  'top-full mt-1': props.direction === 'down',
  'bottom-full mb-1': props.direction === 'up',
  'left-full ml-1 top-0': props.direction === 'down-right',
  'left-full ml-1 bottom-0': props.direction === 'up-right',
  'right-full mr-1 top-0': props.direction === 'down-left',
  'right-full mr-1 bottom-0': props.direction === 'up-left',
}))
</script>
