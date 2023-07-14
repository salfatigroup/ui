<template>
  <FooterPagination
    v-if="footerVariants.includes(variant)"
    :variant="variant"
    v-bind="$attrs"
    ><template v-for="(_, slot) of $slots" v-slot:[slot]="scope"
      ><slot :name="slot" v-bind="scope" /></template
  ></FooterPagination>
  <CenteredPagination v-else v-bind="$attrs" :variant="variant">
    <template v-for="(_, slot) of $slots" v-slot:[slot]="scope"
      ><slot :name="slot" v-bind="scope"
    /></template>
  </CenteredPagination>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import CenteredPagination, { Props } from './pagination/centered-pagination.vue'
import FooterPagination from './pagination/footer-pagination.vue'

defineProps({
  variant: {
    type: String as PropType<Props['variant']>,
    default: 'vertical' as Props['variant'],
  },
})

const footerVariants = ['footer', 'simple-footer']
defineSlots()
</script>
