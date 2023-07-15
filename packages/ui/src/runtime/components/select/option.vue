<template>
  <div class="flex">
    <div
      class="flex items-center text-left"
      v-if="option.online !== undefined || option.avatar || option?.icon"
    >
      <component
        v-if="option?.icon"
        :is="option.icon"
        :class="'w-4 h-4'"
      ></component>
      <img
        :src="option.avatar"
        alt=""
        class="h-5 w-5 flex-shrink-0 rounded-full"
        v-if="option.avatar"
      />
      <span
        :class="[
          option.online ? 'bg-green-400' : 'bg-gray-200',
          'inline-block h-2 w-2 flex-shrink-0 rounded-full',
        ]"
        aria-hidden="true"
        v-if="option.online !== undefined"
      />
      <span
        :class="[
          selected ? 'font-semibold' : 'font-normal',
          'ml-3 block truncate',
        ]"
      >
        {{ option.label }}
        <span class="sr-only" v-if="option.online !== undefined">
          is {{ option.online ? 'online' : 'offline' }}
        </span>
      </span>
    </div>
    <span
      v-else
      class="text-left"
      :class="[selected ? 'font-semibold' : 'font-normal', 'block truncate']"
    >
      {{ option.label }}
    </span>
    <span
      v-if="option.description"
      :class="[
        'ml-2 truncate text-brand-gray-500',
        active ? 'text-brand-200' : 'text-brand-gray-500',
      ]"
    >
      {{ option.description }}
    </span>
    <slot></slot>
    <span
      v-if="selected"
      :class="[
        active ? 'text-white' : 'text-brand-600',
        'absolute inset-y-0 right-0 flex items-center pr-4',
      ]"
    >
      <ICheck :height="20" :width="20" aria-hidden="true" variant="line" />
    </span>
  </div>
</template>
<script setup lang="ts">
import { PropType } from 'vue'
import { ICheck, IUserCircle } from '../icon'

export type OptionType = {
  value: string | number | null
  label: string
  online?: boolean
  avatar?: string
  icon?: Object
  description?: string
}

const { option } = defineProps({
  option: {
    type: Object as PropType<OptionType>,
    required: true,
  },
  selected: {
    type: Boolean,
    default: false,
  },
  active: {
    type: Boolean,
    default: false,
  },
})
</script>
