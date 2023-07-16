<template>
  <ul>
    <li v-for="icon in iconSamples" :key="icon.iconName" class="py-2">
      <ComponentCodeWrapper :code="`<${icon.iconName} variant='...'/>`">
        <div class="flex space-x-10">
          <div
            v-for="variant in supportedVariants"
            :key="`${icon.iconName}-${variant}`"
            class="flex flex-col items-center justify-center space-y-1"
          >
            <component
              :is="icon.component"
              :variant="variant"
              class="w-5 h-5 text-brand-500"
            />

            <legend class="text-xs text-brand-gray-500">{{ variant }}</legend>
          </div>
        </div>
      </ComponentCodeWrapper>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref, shallowRef } from 'vue'
import * as ICONS from '../../../../packages/ui/src/runtime/components/icon'

const supportedVariants = [
  'duocolor',
  'duotone',
  'mono',
  'filled',
  'gestalt',
  'line',
]

const iconsKeys = Object.keys(ICONS)

const iconSamples = ref(
  iconsKeys.map((iconName) => ({
    iconName,
    component: shallowRef(ICONS[iconName]),
  })),
)
</script>
