<template>
  <div class="w-full flex flex-col space-y-10 mt-10">
    <k-combobox label="Assigned to" :options="people" v-model="selectedValue" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { people } from '../../mocks/options_mocks'

const selectedValue = ref(people[1])
</script>
