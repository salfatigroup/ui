<template>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-10" @close="emit('close')">
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div
          class="fixed inset-0 bg-brand-gray-500 bg-opacity-75 transition-opacity"
        />
      </TransitionChild>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div
          class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
        >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <DialogPanel
              class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6"
            >
              <CloseButton v-if="!hideCloseButton" @close="emit('close')" />
              <div>
                <div :class="iconWrapperClasses">
                  <slot :class="iconClasses">
                    <ICheck
                      :class="iconClasses"
                      aria-hidden="true"
                      variant="line"
                    />
                  </slot>
                </div>
                <div class="mt-3 text-center sm:mt-5">
                  <DialogTitle
                    as="h3"
                    class="text-base font-semibold leading-6 text-brand-gray-900"
                    >{{ title }}</DialogTitle
                  >
                  <div class="mt-2">
                    <p class="text-sm text-brand-gray-500">
                      {{ description }}
                    </p>
                  </div>
                </div>
              </div>
              <div
                class="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3"
              >
                <slot name="buttons">
                  <ModalButtons :buttons="buttons" />
                </slot>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import { PropType, computed } from 'vue'
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import { ICheck } from '../icon'
import { ModalProps } from './types'
import ModalButtons from './modal-buttons.vue'
import CloseButton from './close-button.vue'

const props = defineProps({
  open: {
    type: Boolean as PropType<ModalProps['open']>,
    default: false,
  },
  variant: {
    type: String as PropType<ModalProps['variant']>,
    default: 'success' as ModalProps['variant'],
  },
  title: {
    type: String as PropType<ModalProps['title']>,
    default: undefined,
  },
  description: {
    type: String as PropType<ModalProps['description']>,
    default: undefined,
  },
  buttons: {
    type: Array as PropType<ModalProps['buttons']>,
  },
  hideCloseButton: {
    type: Boolean as PropType<ModalProps['hideCloseButton']>,
    default: false,
  },
})

const iconWrapperClasses = computed(() => [
  'mx-auto flex h-12 w-12 items-center justify-center rounded-full',
  {
    'bg-brand-info-100': props.variant === 'info',
    'bg-brand-success-100': props.variant === 'success',
    'bg-brand-warn-100': props.variant === 'warn',
    'bg-brand-danger-100': props.variant === 'danger',
  },
])

const iconClasses = computed(() => [
  'h-6 w-6',
  {
    'text-brand-info-600': props.variant === 'info',
    'text-brand-success-600': props.variant === 'success',
    'text-brand-warn-600': props.variant === 'warn',
    'text-brand-danger-600': props.variant === 'danger',
  },
])

const emit = defineEmits<{
  (e: 'close'): void
}>()
</script>
