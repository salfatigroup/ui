<template>
  <form class="relative w-full">
    <div
      class="overflow-hidden rounded-lg border border-brand-gray-300 shadow-sm focus-within:border-brand-500 focus-within:ring-1 focus-within:ring-brand-500"
    >
      <label for="title" class="sr-only">{{ titlePlaceholder }}</label>
      <input
        type="text"
        name="title"
        id="title"
        class="block w-full border-0 pt-2.5 text-lg font-medium placeholder:text-brand-gray-400 focus:ring-0"
        :placeholder="titlePlaceholder"
      />
      <label for="description" class="sr-only">{{
        descriptionPlaceholder
      }}</label>
      <textarea
        rows="2"
        name="description"
        id="description"
        class="block w-full resize-none border-0 py-0 text-brand-gray-900 placeholder:text-brand-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
        :placeholder="descriptionPlaceholder"
      />

      <!-- Spacer element to match the height of the toolbar -->
      <div aria-hidden="true">
        <div class="py-2">
          <div class="h-9" />
        </div>
        <div class="h-px" />
        <div class="py-2">
          <div class="py-px">
            <div class="h-9" />
          </div>
        </div>
      </div>
    </div>

    <div class="absolute inset-x-px bottom-0">
      <div class="flex flex-nowrap justify-end space-x-2 px-2 py-2 sm:px-3">
        <slot name="actions"></slot>
      </div>
      <div
        class="flex items-center justify-between space-x-3 border-t border-brand-gray-200 px-2 py-2 sm:px-3"
      >
        <div class="flex">
          <slot name="toolbar"></slot>
        </div>
        <div class="flex-shrink-0">
          <button
            type="submit"
            class="inline-flex items-center rounded-md bg-brand-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
          >
            {{ actionText }}
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
defineProps({
  titlePlaceholder: {
    type: String,
    default: 'Title',
  },
  descriptionPlaceholder: {
    type: String,
    default: 'Write a description...',
  },
  actionText: {
    type: String,
    default: 'Create',
  },
})
</script>
