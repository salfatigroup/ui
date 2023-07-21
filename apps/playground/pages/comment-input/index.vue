<template>
  <div class="w-full flex flex-col space-y-2 mt-10">
    <ComponentCodeWrapper :code="example1">
      <k-comment-input
        @post="console.log('posted', $event)"
        v-model="modelValue"
        avatar="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      />
    </ComponentCodeWrapper>
    <ComponentCodeWrapper :code="example2">
      <k-comment-input
        disabled
        model-value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
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
        model-value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
      >
        <template #customAddons>
          <div class="text-sm text-brand-gray-600">Yesterday, 12:10 am</div>
        </template>
      </k-comment-input>
    </ComponentCodeWrapper>
    <ComponentCodeWrapper :code="example4">
      <k-comment-input
        readonly
        model-value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
        expandable
      >
        <template #customAddons>
          <div class="text-sm text-brand-gray-600">Yesterday, 12:10 am</div>
        </template>
      </k-comment-input>
    </ComponentCodeWrapper>
    <ComponentCodeWrapper :code="example5">
      <k-comment-input
        readonly
        :model-value="`Lorem ipsum dolor

         sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`"
      >
        <template #customAddons>
          <div class="text-sm text-brand-gray-600">Yesterday, 12:10 am</div>
        </template>
      </k-comment-input>
    </ComponentCodeWrapper>

    <ComponentCodeWrapper :code="example6">
      <k-comment-input readonly model-value="Short text">
        <template #customAddons>
          <div class="text-sm text-brand-gray-600">Yesterday, 12:10 am</div>
        </template>
      </k-comment-input>
    </ComponentCodeWrapper>
    <ComponentCodeWrapper :code="example7">
      <k-comment-input skeleton />
    </ComponentCodeWrapper>

    <ComponentCodeWrapper :code="example8">
      <k-button @click="showAutoFocus = !showAutoFocus">
        Toggle auto focus textarea
      </k-button>
      <k-comment-input
        autofocus
        v-model="autoFocusValue"
        v-if="showAutoFocus"
      />
    </ComponentCodeWrapper>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
const modelValue = ref('hi')
const autoFocusValue = ref('')
const showAutoFocus = ref(false)

const example1 = `
<k-comment-input
  @post="console.log('posted', $event)"
  v-model="modelValue"
  avatar="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
/>
`
const example2 = `
<k-comment-input
        disabled
        model-value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
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

const example4 = `
<k-comment-input
  readonly
  model-value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  expandable
>
  <template #customAddons>
    <div class="text-sm text-brand-gray-600">Yesterday, 12:10 am</div>
  </template>
</k-comment-input>
`

const example5 = `
<k-comment-input
  readonly
  :model-value="\`Lorem ipsum dolor

    sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum\`"
>
  <template #customAddons>
    <div class="text-sm text-brand-gray-600">Yesterday, 12:10 am</div>
  </template>
</k-comment-input>
`

const example6 = `
<k-comment-input
  readonly
  model-value="Short text"
>
  <template #customAddons>
    <div class="text-sm text-brand-gray-600">Yesterday, 12:10 am</div>
  </template>
</k-comment-input>
`

const example7 = `
<k-comment-input skeleton />
`

const example8 = `
<k-button @click="showAutoFocus = !showAutoFocus">
  Toggle auto focus textarea
</k-button>
<k-comment-input
  autofocus
  v-model="autoFocusValue"
  v-if="showAutoFocus"
/>
`
</script>
