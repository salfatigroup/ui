<template>
  <div class="w-full flex flex-col space-y-2 mt-10">
    <ComponentCodeWrapper code='<k-button variant="primary">Primary</k-button>'>
      <k-button variant="primary">Primary</k-button>
    </ComponentCodeWrapper>

    <ComponentCodeWrapper code="<k-button soft>Soft</k-button>">
      <k-button soft>Soft</k-button>
    </ComponentCodeWrapper>

    <ComponentCodeWrapper
      code='<k-button variant="secondary">Secondary</k-button>'
    >
      <k-button variant="secondary">Secondary</k-button>
    </ComponentCodeWrapper>

    <ComponentCodeWrapper
      :code="`<k-button soft variant='secondary'>
  Secondary soft
</k-button>`"
    >
      <k-button soft variant="secondary">Secondary soft</k-button>
    </ComponentCodeWrapper>

    <ComponentCodeWrapper code='<k-button variant="info">Info</k-button>'>
      <k-button variant="info">Info</k-button>
    </ComponentCodeWrapper>

    <ComponentCodeWrapper
      code='<k-button soft variant="info">Info Soft</k-button>'
    >
      <k-button soft variant="info">Info Soft</k-button>
    </ComponentCodeWrapper>
    <ComponentCodeWrapper code='<k-button variant="success">Success</k-button>'>
      <k-button variant="success">Success</k-button>
    </ComponentCodeWrapper>
    <ComponentCodeWrapper
      code='<k-button soft variant="success">Success Soft</k-button>'
    >
      <k-button soft variant="success">Success Soft</k-button>
    </ComponentCodeWrapper>
    <ComponentCodeWrapper code='<k-button variant="warn">Warn</k-button>'>
      <k-button variant="warn">Warn</k-button>
    </ComponentCodeWrapper>
    <ComponentCodeWrapper
      code='<k-button soft variant="warn">Warn Soft</k-button>'
    >
      <k-button soft variant="warn">Warn Soft</k-button>
    </ComponentCodeWrapper>
    <ComponentCodeWrapper code='<k-button variant="danger">Danger</k-button>'>
      <k-button variant="danger">Danger</k-button>
    </ComponentCodeWrapper>
    <ComponentCodeWrapper
      code='<k-button soft variant="danger">Danger Soft</k-button>'
    >
      <k-button soft variant="danger">Danger Soft</k-button>
    </ComponentCodeWrapper>

    <ComponentCodeWrapper code="<k-button disabled>Disabled</k-button>">
      <k-button disabled>Disabled</k-button>
    </ComponentCodeWrapper>

    <ComponentCodeWrapper
      code="<k-button soft disabled>Disabled Soft</k-button>"
    >
      <k-button size="xs">Extra small</k-button>
    </ComponentCodeWrapper>
    <ComponentCodeWrapper code='<k-button size="sm">Small</k-button>'>
      <k-button size="sm">Small</k-button>
    </ComponentCodeWrapper>
    <ComponentCodeWrapper code='<k-button size="md">Medium</k-button>'>
      <k-button size="md">Medium</k-button>
    </ComponentCodeWrapper>
    <ComponentCodeWrapper code='<k-button size="lg">Large</k-button>'>
      <k-button size="lg">Large</k-button>
    </ComponentCodeWrapper>
    <ComponentCodeWrapper code='<k-button size="xl">Extra Large</k-button>'>
      <k-button size="xl">Extra Large</k-button>
    </ComponentCodeWrapper>

    <ComponentCodeWrapper
      :code="`
<k-button soft>
  <template #prefixIcon><IEdit /></template>
  <span>Icons</span>
  <template #suffixIcon><IScan /></template>
</k-button>
        `"
    >
      <k-button soft>
        <template #prefixIcon><IEdit /></template>
        <span>Icons</span>
        <template #suffixIcon><IScan /></template>
      </k-button>
    </ComponentCodeWrapper>

    <ComponentCodeWrapper code="<k-button pill>Pill</k-button>">
      <k-button pill>Pill</k-button>
    </ComponentCodeWrapper>
    <ComponentCodeWrapper code="<k-button loading>Loading...</k-button>">
      <k-button loading>Loading...</k-button>
    </ComponentCodeWrapper>
  </div>
</template>
<script setup lang="ts">
import {
  IEdit,
  IScan,
} from '../../../../packages/ui/src/runtime/components/icon'
import ComponentCodeWrapper from '../../components/component-code-wrapper.vue'
</script>
