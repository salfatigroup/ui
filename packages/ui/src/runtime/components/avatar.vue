<template>
  <div v-if="title || description" class="flex items-center group">
    <BaseAvatar v-bind="$attrs"
      ><template v-for="(_, slot) of $slots" v-slot:[slot]="scope"
        ><slot :name="slot" v-bind="scope" /></template
    ></BaseAvatar>
    <div class="ml-3">
      <p
        class="text-sm font-medium text-brand-gray-700 group-hover:text-brand-gray-900"
      >
        {{ title }}
      </p>
      <p
        class="text-xs font-medium text-brand-gray-500 group-hover:text-brand-gray-700"
      >
        {{ description }}
      </p>
    </div>
  </div>
  <div v-else class="flex items-center">
    <BaseAvatar v-bind="$attrs">
      <template v-for="(_, slot) of $slots" v-slot:[slot]="scope"
        ><slot :name="slot" v-bind="scope"
      /></template>
    </BaseAvatar>
  </div>
</template>

<script setup lang="ts">
import BaseAvatar from './avatar/base-avatar.vue'

defineProps({
  title: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
})
</script>
