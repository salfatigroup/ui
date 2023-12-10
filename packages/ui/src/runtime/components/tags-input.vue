<style lang="css">
.v3ti--focus {
  border: 1px solid #6952d5 !important;
  box-shadow: #6952d5 0px 0px 0px 1px !important;
}
.v3ti {
  border: 1px solid #6b7280;
  display: flex;
}

.v3ti .v3ti-tag {
  background: transparent;
  margin-left: 0;
  margin-right: 0;
  padding-right: 0;
  position: relative;
}

.v3ti .v3ti-tag .v3ti-remove-tag {
  position: absolute;
  color: transparent;
  width: 100%;
  pointer-events: all;
  &:hover {
    color: transparent !important;
  }
}

.v3ti .v3ti-tag .v3ti-remove-tag:hover {
  color: #ffffff;
}
</style>

<template>
  <div class="flex items-center justify-center">
    <Vue3TagsInput
      :tags="model"
      @on-tags-changed="model = $event"
      v-bind="$attrs"
      :add-tag-on-keys="[13, 188]"
    >
      <template #item="{ tag, index }">
        <Tag removable>{{ tag }}</Tag>
      </template>
    </Vue3TagsInput>
  </div>
</template>

<script setup lang="ts">
import { PropType, computed } from 'vue'
import Vue3TagsInput from 'vue3-tags-input'
import Tag from './tag.vue'

type TagProps = {
  modelValue: string[]
}

const props = defineProps({
  modelValue: {
    type: Array as PropType<InputProps['modelValue']>,
    default: [],
  },
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const model = computed({
  get: () => props.modelValue,
  set: (value: string) => emit('update:modelValue', value),
})
</script>
