<template>
  <div class="w-full flex flex-col space-y-2 mt-10">
    <ComponentCodeWrapper :code="example2">
      <k-text-area label="Label" placeholder="Placeholder" rows="10" />
    </ComponentCodeWrapper>
    <ComponentCodeWrapper :code="example1">
      <k-text-area label="Label" disabled placeholder="Disabled" rows="10" />
    </ComponentCodeWrapper>
  </div>
</template>

<script setup lang="ts">
const example1 = `<k-text-area label="Label" disabled placeholder="Disabled" rows="10" />`

const example2 = `<k-text-area label="Label" placeholder="Placeholder" rows="10" />`
</script>
