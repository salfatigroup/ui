<template>
  <div class="w-full flex flex-col space-y-10 mt-10">
    <k-pagination :total="452" v-model="currentPage" :pageSize="50" />
    <k-pagination
      :total="452"
      v-model="currentPage"
      :pageSize="50"
      variant="footer"
    />
    <k-pagination
      :total="452"
      v-model="currentPage"
      :pageSize="50"
      variant="simple-footer"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const currentPage = ref(2)
</script>
