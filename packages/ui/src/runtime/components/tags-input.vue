<template>
  <div
    :class="[
      'flex items-center justify-center border-0 p-1 shadow-sm ring-inset rounded-md',
      focused ? 'ring-brand-600 ring-2' : 'ring-brand-gray-300 ring-1',
    ]"
  >
    <slot name="tags">
      <div :class="['flex space-x-1']">
        <slot v-for="tag in model" name="tag">
          <Tag brand removable v-bind="tag.attrs">{{ tag.name }}</Tag>
        </slot>
      </div>
    </slot>
    <slot name="input">
      <input
        v-model="input"
        @keydown.enter="addTag"
        @keydown.delete="removeTag"
        @keydown.passive="$event.code === 'Comma' && addTag()"
        @focus="focused = true"
        @blur="focused = false"
        class="w-full text-brand-gray-900 outline-none ml-1"
      />
    </slot>
  </div>
</template>

<script setup lang="ts">
import { PropType, computed, ref } from 'vue'
import Tag from './tag.vue'

const focused = ref(false)
type TagType = {
  index: number
  name: string
  attrs: Record<string, unknown>
}
type TagProps = {
  modelValue: TagType[]
}

const props = defineProps({
  modelValue: {
    type: Array as PropType<InputProps['modelValue']>,
    default: [],
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
    input.value = ''
    setTimeout(() => {
      input.value = ''
    }, 0)
  }
}

const removeTag = () => {
  if (input.value.length === 0 && model.value.length > 0) {
    model.value.pop()
    model.value = [...model.value]
  }
}
</script>
