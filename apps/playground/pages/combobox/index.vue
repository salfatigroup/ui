<template>
  <div class="w-full flex flex-col space-y-10 mt-10">
    <k-combobox label="Assigned to" :options="people" />
  </div>
</template>

<script setup lang="ts">
import { people } from '../../mocks/options_mocks'
</script>
