<template>
  <span class="flex flex-col text-brand-gray-900 text-sm font-medium space-y-2">
    <label v-if="label" :for="inputRef?.id">
      <slot name="label">{{ label }}</slot>
    </label>

    <div
      :class="[
        'flex shrink-0 items-center border-0 pl-1 pt-1 shadow-sm ring-inset rounded-md flex-wrap cursor-text',
        focused ? 'ring-brand-600 ring-2' : 'ring-brand-gray-300 ring-1',
        disabled
          ? 'bg-brand-gray-100 text-brand-gray-500'
          : 'bg-white text-brand-gray-900',
      ]"
      @click="inputRef?.focus()"
    >
      <slot name="tags">
        <slot v-for="(tag, i) in model" name="tag">
          <Tag
            brand
            removable
            :key="tag.index"
            :disabled="disabled"
            v-bind="tag.attrs"
            @click="removeTag(i)"
            :class="[
              'shrink-0 mr-1 mb-1',
              disabled ? 'pointer-events-none' : '',
            ]"
          >
            {{ tag.name }}
          </Tag>
        </slot>
      </slot>
      <slot name="input" v-bind="{ addTag, removeTag, mode: input }">
        <input
          type="tags"
          v-model="input"
          v-uid
          ref="inputRef"
          @keydown.enter="addTag"
          @keydown.delete="removeTag()"
          @keydown.passive="onKeyDown"
          @focus="focused = true"
          @blur="handleBlur"
          class="text-brand-gray-900 outline-none mr-1 mb-1"
          :disabled="disabled"
        />
      </slot>
    </div>
  </span>
</template>

<script setup lang="ts">
import { PropType, computed, ref } from 'vue'
import Tag from './tag.vue'

const focused = ref(false)
const inputRef = ref<HTMLInputElement | null>(null)

type TagType = {
  index: number
  name: string
  attrs: Record<string, unknown>
}
type TagProps = {
  modelValue: TagType[]
  disabled?: boolean
}

const props = defineProps({
  modelValue: {
    type: Array as PropType<TagProps['modelValue']>,
    default: [],
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
  },
})

const emit = defineEmits<{
  'update:modelValue': [value: TagType[]]
}>()

const innerModel = ref(props.modelValue)

const model = computed({
  get: () => innerModel.value,
  set: (value: TagType[]) => {
    emit('update:modelValue', value)
    innerModel.value = value
  },
})

const input = ref('')
const addTag = () => {
  if (input.value.length > 0) {
    model.value.push({
      index: model.value.length,
      name: input.value,
      attrs: {},
    })
    model.value = [...model.value]
    input.value = ''
    setTimeout(() => {
      input.value = ''
    }, 0)
  }
}

const removeTag = (index?: number) => {
  if (index !== undefined) {
    model.value.splice(index, 1)
  } else if (input.value.length === 0 && model.value.length > 0) {
    model.value.pop()
  }
  model.value = [...model.value]
}

const handleBlur = () => {
  addTag()
  focused.value = false
}

const onKeyDown = (event: KeyboardEvent) => {
  if (['Comma', 'Period', 'Semicolon'].includes(event.code)) {
    addTag()
  }
}
</script>
