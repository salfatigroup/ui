<template>
  <div class="flex flex-col space-y-2 mt-10 justify-center items-center">
    <div>
      <k-modal
        :open="simpleOpen"
        title="Deactivate account"
        layout="simple"
        @close="simpleOpen = false"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            pariatur, ipsum similique veniam."
        variant="danger"
        :buttons="[
          {
            label: 'Cancel',
            variant: 'secondary',
          },
          {
            label: 'Confirm',
            variant: 'danger',
          },
        ]"
      />
      <k-modal
        :open="centeredOpen"
        title="Payment successful"
        @close="centeredOpen = false"
        layout="centered"
        hideCloseButton
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            pariatur, ipsum similique veniam."
        :buttons="[
          {
            label: 'Cancel',
            variant: 'secondary',
          },
          {
            label: 'Confirm',
            variant: 'success',
          },
        ]"
      />
    </div>
    <k-button @click="centeredOpen = true" variant="success">
      Centered modal
    </k-button>
    <k-button @click="simpleOpen = true" variant="danger">
      Simple modal
    </k-button>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const centeredOpen = ref(false)
const simpleOpen = ref(false)
</script>
