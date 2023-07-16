<template>
  <Combobox
    as="div"
    :model-value="modelValue"
    @update:model-value="emit('update:modelValue', $event)"
    v-bind="$attrs"
    class="w-full"
  >
    <ComboboxLabel
      class="block text-sm font-medium leading-6 text-brand-gray-900"
      >{{ label }}</ComboboxLabel
    >
    <div class="relative mt-2">
      <ComboboxInput
        class="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-brand-gray-900 shadow-sm ring-1 ring-inset ring-brand-gray-300 focus:ring-2 focus:ring-inset focus:ring-brand-600 sm:text-sm sm:leading-6"
        @change="query = $event.target.value"
        :display-value="(option) => option?.label"
      />
      <ComboboxButton
        class="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none"
      >
        <IChevronDown
          class="h-5 w-5 text-brand-gray-400"
          aria-hidden="true"
          variant="line"
        />
      </ComboboxButton>

      <ComboboxOptions
        v-if="filteredOptions.length > 0"
        class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
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
    </div>
  </Combobox>
</template>

<script setup lang="ts">
import { computed, ref, PropType, watch } from 'vue'
import { ICheck, IChevronDown } from './icon'
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
    default: true,
  },
  modelValue: {
    type: [Object, Array] as PropType<OptionType | OptionType[]>,
  },
  onTextChange: {
    type: Function as PropType<(value: string) => void>,
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
</script>
