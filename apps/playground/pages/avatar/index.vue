<template>
  <div class="flex flex-col space-y-2 mt-10 justify-center items-center">
    <ComponentCodeWrapper :code="example1">
      <k-avatar size="xs" />
    </ComponentCodeWrapper>

    <ComponentCodeWrapper :code="example2">
      <k-avatar :src="avatarSrc" size="sm" />
    </ComponentCodeWrapper>

    <ComponentCodeWrapper :code="example3">
      <k-avatar :src="avatarSrc" variant="rounded" size="md" />
    </ComponentCodeWrapper>

    <ComponentCodeWrapper :code="example4">
      <k-avatar
        :src="avatarSrc"
        :notificationProps="{ color: 'gray', position: 'top-right' }"
        size="lg"
      />
    </ComponentCodeWrapper>

    <ComponentCodeWrapper :code="example5">
      <k-avatar
        :src="avatarSrc"
        :notificationProps="{ color: 'green', position: 'bottom-right' }"
        size="xl"
      />
    </ComponentCodeWrapper>

    <ComponentCodeWrapper :code="example6">
      <k-avatar
        :src="avatarSrc"
        variant="rounded"
        :notificationProps="{ color: 'green', position: 'bottom-right' }"
        size="2xl"
      />
    </ComponentCodeWrapper>

    <ComponentCodeWrapper :code="example7">
      <k-avatar
        :notificationProps="{ color: 'red', position: 'top-left' }"
        size="xl"
      />
    </ComponentCodeWrapper>

    <ComponentCodeWrapper :code="example8">
      <k-avatar placeholderInitials="JD" size="lg" />
    </ComponentCodeWrapper>

    <ComponentCodeWrapper :code="example9">
      <k-avatar
        :src="avatarSrc"
        size="md"
        title="Tom Cook"
        description="Software Engineer, Google"
      />
    </ComponentCodeWrapper>

    <ComponentCodeWrapper :code="example10">
      <div class="isolate flex -space-x-2 overflow-hidden">
        <k-avatar class="rounded-full ring-2 ring-white" :src="avatar4Src" />
        <k-avatar class="rounded-full ring-2 ring-white" :src="avatar2Src" />
        <k-avatar class="rounded-full ring-2 ring-white" :src="avatar3Src" />
        <k-avatar class="rounded-full ring-2 ring-white" :src="avatarSrc" />
      </div>
    </ComponentCodeWrapper>

    <ComponentCodeWrapper :code="script" />
  </div>
</template>
<script setup lang="ts">
const avatarSrc =
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
const avatar2Src =
  'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
const avatar3Src =
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80'
const avatar4Src =
  'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'

const script = `<script setup lang="ts">
const avatarSrc =
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
const avatar2Src =
  'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
const avatar3Src =
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80'
const avatar4Src =
  'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
\<\/script\>`

const example1 = `<k-avatar size="xs" />`
const example2 = `<k-avatar :src="avatarSrc" size="sm" />`
const example3 = `<k-avatar :src="avatarSrc" variant="rounded" size="md" />`
const example4 = `<k-avatar
  :src="avatarSrc"
  :notificationProps="{ color: 'gray', position: 'top-right' }"
  size="lg"
/>`

const example5 = `<k-avatar
  :src="avatarSrc"
  :notificationProps="{ color: 'green', position: 'bottom-right' }"
  size="xl"
/>`
const example6 = `<k-avatar
  :src="avatarSrc"
  variant="rounded"
  :notificationProps="{ color: 'green', position: 'bottom-right' }"
  size="2xl"
/>`
const example7 = `<k-avatar
  :notificationProps="{ color: 'red', position: 'top-left' }"
  size="xl"
/>`
const example8 = `<k-avatar placeholderInitials="JD" size="lg" />`
const example9 = `<k-avatar
  :src="avatarSrc"
  size="md"
  title="Tom Cook"
  description="Software Engineer, Google"
/>`
const example10 = `<div class="isolate flex -space-x-2 overflow-hidden">
  <k-avatar class="rounded-full ring-2 ring-white" :src="avatar4Src" />
  <k-avatar class="rounded-full ring-2 ring-white" :src="avatar2Src" />
  <k-avatar class="rounded-full ring-2 ring-white" :src="avatar3Src" />
  <k-avatar class="rounded-full ring-2 ring-white" :src="avatarSrc" />
</div>`
</script>
