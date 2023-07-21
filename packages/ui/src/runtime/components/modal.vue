<template>
  <div>
    <SimpleModal v-if="layout === 'simple'" v-bind="$attrs">
      <template v-for="(_, slot) of $slots" v-slot:[slot]="scope">
        <slot :name="slot" v-bind="scope" />
      </template>
    </SimpleModal>
    <CenteredModal v-else v-bind="$attrs">
      <template v-for="(_, slot) of $slots" v-slot:[slot]="scope">
        <slot :name="slot" v-bind="scope" />
      </template>
    </CenteredModal>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { ModalProps } from './modal/types'
import CenteredModal from './modal/centered-modal.vue'
import SimpleModal from './modal/simple-modal.vue'

defineProps({
  layout: {
    type: String as PropType<ModalProps['layout']>,
    default: 'vertical' as ModalProps['layout'],
  },
})
</script>
