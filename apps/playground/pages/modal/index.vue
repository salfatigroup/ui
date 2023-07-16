<template>
  <div class="flex flex-col space-y-2 mt-10 justify-center items-center">
    <ComponentCodeWrapper :code="example1">
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
            onClick: () => {
              centeredOpen = false
            },
          },
          {
            label: 'Confirm',
            variant: 'success',
            onClick: () => {
              centeredOpen = false
            },
          },
        ]"
      />
      <k-button @click="centeredOpen = true" variant="success">
        Centered modal
      </k-button>
    </ComponentCodeWrapper>
    <ComponentCodeWrapper :code="example2">
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
            onClick: () => {
              simpleOpen = false
            },
          },
          {
            label: 'Confirm',
            variant: 'danger',
            onClick: () => {
              simpleOpen = false
            },
          },
        ]"
      />
      <k-button @click="simpleOpen = true" variant="danger">
        Simple modal
      </k-button>
    </ComponentCodeWrapper>
    <ComponentCodeWrapper :code="script" />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const centeredOpen = ref(false)
const simpleOpen = ref(false)

const script = `<script setup lang="ts">
  import { ref } from 'vue'

  const centeredOpen = ref(false)
  const simpleOpen = ref(false)
\<\/script\>`

const example1 = `<k-modal
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
      onClick: () => {
        centeredOpen = false
      },
    },
    {
      label: 'Confirm',
      variant: 'success',
      onClick: () => {
        centeredOpen = false
      },
    },
  ]"
/>
<k-button @click="centeredOpen = true" variant="success">
  Centered modal
</k-button>`
const example2 = `<k-modal
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
      onClick: () => {
        simpleOpen = false
      },
    },
    {
      label: 'Confirm',
      variant: 'danger',
      onClick: () => {
        simpleOpen = false
      },
    },
  ]"
/>
<k-button @click="simpleOpen = true" variant="danger">
  Simple modal
</k-button>`
</script>
