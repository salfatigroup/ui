<template>
  <CardsRadioGroup
    v-if="cardsVariants.includes(variant)"
    :variant="variant"
    v-bind="$attrs"
    ><template v-for="(_, slot) of $slots" v-slot:[slot]="scope"
      ><slot :name="slot" v-bind="scope" /></template
  ></CardsRadioGroup>
  <DefaultRadioGroup v-else v-bind="$attrs" :variant="variant">
    <template v-for="(_, slot) of $slots" v-slot:[slot]="scope"
      ><slot :name="slot" v-bind="scope"
    /></template>
  </DefaultRadioGroup>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { Variant } from './radio-group/types'
import DefaultRadioGroup from './radio-group/default-radio-group.vue'
import CardsRadioGroup from './radio-group/cards-radio-group.vue'

defineProps({
  variant: {
    type: String as PropType<Variant>,
    default: 'vertical' as Variant,
  },
})

const cardsVariants = ['cards', 'small-cards', 'stacked-cards']
defineSlots()
</script>
