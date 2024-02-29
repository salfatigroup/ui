<template>
  <SoftInput v-if="softInput" v-bind="$attrs">
    <template v-for="(_, slot) of $slots" v-slot:[slot]="scope">
      <slot :name="slot" v-bind="scope" />
    </template>
  </SoftInput>
  <InsetLabelInput v-else-if="insetLabel" v-bind="$attrs">
    <template v-for="(_, slot) of $slots" v-slot:[slot]="scope">
      <slot :name="slot" v-bind="scope" />
    </template>
  </InsetLabelInput>
  <DefaultInput v-else v-bind="$attrs">
    <template v-for="(_, slot) of $slots" v-slot:[slot]="scope">
      <slot :name="slot" v-bind="scope" />
    </template>
  </DefaultInput>
</template>

<script setup lang="ts">
import DefaultInput from './input/default-input.vue'
import InsetLabelInput from './input/inset-label-input.vue'
import SoftInput from './input/soft-input.vue'

const { insetLabel, softInput } = defineProps({
  insetLabel: {
    type: Boolean,
    default: false,
  },
  softInput: {
    type: Boolean,
    default: false,
  },
})

defineSlots()
</script>
