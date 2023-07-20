<template>
  <div class="w-full flex flex-col space-y-2 mt-10">
    <ComponentCodeWrapper :code="example1">
      <k-comment-input
        avatar="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      />
    </ComponentCodeWrapper>
    <ComponentCodeWrapper :code="example2">
      <k-comment-input
        disabled
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
      >
        <template #customAddons>
          <div class="text-sm text-brand-gray-600">Yesterday, 12:10 am</div>
        </template>
      </k-comment-input>
    </ComponentCodeWrapper>
    <ComponentCodeWrapper :code="example3">
      <k-comment-input
        disabled
        is-posting="true"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
      >
        <template #customAddons>
          <div class="text-sm text-brand-gray-600">Yesterday, 12:10 am</div>
        </template>
      </k-comment-input>
    </ComponentCodeWrapper>
    <ComponentCodeWrapper>
      <k-comment-input
        readonly
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
        expandable
      >
        <template #customAddons>
          <div class="text-sm text-brand-gray-600">Yesterday, 12:10 am</div>
        </template>
      </k-comment-input>
    </ComponentCodeWrapper>
    <ComponentCodeWrapper :code="example5">
      <k-comment-input skeleton />
    </ComponentCodeWrapper>
  </div>
</template>

<script setup lang="ts">
const example1 = `
<k-comment-input
  avatar="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
/>
`
const example2 = `
<k-comment-input
        disabled
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
      >
  <template #customAddons>
    <div class="text-sm text-brand-gray-600">Yesterday, 12:10 am</div>
  </template>
</k-comment-input>
`

const example3 = `
<k-comment-input
  is-posting="true"
  avatar="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
/>
`

const example5 = `
<k-comment-input skeleton />
`
</script>
