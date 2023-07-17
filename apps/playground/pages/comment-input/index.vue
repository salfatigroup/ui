<template>
  <div class="w-full flex flex-col space-y-2 mt-10">
    <ComponentCodeWrapper :code="example1">
      <k-comment-input
        avatar="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      />
    </ComponentCodeWrapper>
  </div>
</template>

<script setup lang="ts">
const example1 = `
<k-comment-input
  avatar="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
/>
`
</script>
