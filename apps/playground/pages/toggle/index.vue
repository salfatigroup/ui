<template>
  <div class="w-[40%] flex flex-col space-y-10 mt-10">
    <k-toggle
      variant="icon"
      v-model="checked"
    />
    <k-toggle
      inline-description
      variant="simple"
      v-model="checked"
    />
    <k-toggle variant="short" v-model="checked" />
    <k-toggle variant="icon" label="Comments" v-model="checked" description="Get notified blah blah blah..."/>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const checked = ref(true)
</script>
