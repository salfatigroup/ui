<template>
  <div class="w-[40%] flex flex-col space-y-10 mt-10">
    <k-checkbox
      label="Comments"
      v-model="checked"
      description="Get notified when someones posts a comment on a posting."
    />
    <k-checkbox
      inline-description
      v-model="checked"
      label="Comments"
      description="Get notified when someones posts a comment on a posting."
    />
    <k-checkbox right label="Comments" v-model="checked" />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
const checked = ref(true)
</script>
