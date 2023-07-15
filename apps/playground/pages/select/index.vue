<template>
  <div class="w-full flex flex-col space-y-2 mt-10">
    <k-select
      :options="people"
      v-model="selectedSingle"
      label="Assign to one"
    />
    <k-select
      :options="people"
      v-model="selected"
      multiple
      label="Assign to many"
    />
    <k-select
      :options="people"
      disabled
      v-model="selectedSingle"
      label="Disabled"
    />
    <k-select
      :options="dates"
      v-model="pillSelected1"
      placeholder="Due Date"
      pill
      label="Pill select"
    >
      <template #prefixIcon
        ><ICalendar variant="line" class="w-4 h-4"
      /></template>
    </k-select>
    <k-select
      :options="people"
      v-model="pillSelected2"
      placeholder="Assign"
      pill
      label="Pill select"
    >
      <template #placeholderIcon
        ><IUserCircle variant="filled" class="w-4 h-4"
      /></template>
    </k-select>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  ICalendar,
  IUserCircle,
} from '../../../../packages/ui/src/runtime/components/icon'
import { dates, people } from '../../mocks/options_mocks'
const selected = ref([])
const selectedSingle = ref([])
const pillSelected1 = ref()
const pillSelected2 = ref()
</script>
