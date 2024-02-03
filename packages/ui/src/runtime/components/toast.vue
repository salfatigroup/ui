<template>
  <Teleport to="body">
    <div
      aria-live="assertive"
      class="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6 z-[100]"
    >
      <div class="flex w-full flex-col items-center space-y-4 sm:items-end">
        <!-- Notification panel, dynamically insert this into the live region when it needs to be displayed -->
        <transition
          enter-active-class="transform ease-out duration-300 transition"
          enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
          enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
          leave-active-class="transition ease-in duration-100"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <div
            v-if="show"
            class="pointer-events-auto w-full max-w-sm rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5"
          >
            <KAlert withBorder v-bind="$attrs">
              <template #icon>
                <slot name="icon" />
              </template>

              <template #title>
                <slot name="title" />
              </template>

              <template #description>
                <slot name="description" />
              </template>

              <template #buttons>
                <slot name="buttons" />
              </template>

              <template #learnMore>
                <slot name="learnMore" />
              </template>
              <slot />
            </KAlert>
          </div>
        </transition>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { Teleport } from 'vue'

defineProps({
  show: Boolean,
})
</script>
