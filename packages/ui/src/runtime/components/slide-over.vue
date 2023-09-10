<template>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-50" @close="$emit('close')">
      <TransitionChild
        as="template"
        enter="ease-in-out duration-500"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in-out duration-500"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div
          class="fixed inset-0 bg-brand-gray-500 bg-opacity-75 transition-opacity"
        />
      </TransitionChild>

      <div class="fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div
            class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10"
          >
            <TransitionChild
              as="template"
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enter-from="translate-x-full"
              enter-to="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leave-from="translate-x-0"
              leave-to="translate-x-full"
            >
              <DialogPanel :class="dialogPanelClass">
                <div
                  class="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl"
                >
                  <slot name="content">
                    <div class="px-4 sm:px-6">
                      <div class="flex items-start justify-between">
                        <DialogTitle
                          v-if="$slots.title"
                          class="text-base font-semibold leading-6 text-brand-gray-900"
                        >
                          <slot name="title" />
                        </DialogTitle>
                        <div class="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            class="rounded-md bg-white text-brand-gray-400 hover:text-brand-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
                            @click="$emit('close')"
                          >
                            <span class="sr-only">Close panel</span>
                            <ICross class="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="relative mt-6 flex-1 px-4 sm:px-6">
                      <!-- Your content -->
                      <slot />
                    </div>
                  </slot>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import { ICross } from '../components/icon'

export type SlideOverProps = {
  open: boolean
}

const props = defineProps({
  open: {
    type: Boolean,
    required: true,
  },
  dialogPanelClass: {
    type: String,
    default: 'pointer-events-auto w-screen max-w-md',
  },
})

const emit = defineEmits<{
  (e: 'close'): void
}>()
</script>
