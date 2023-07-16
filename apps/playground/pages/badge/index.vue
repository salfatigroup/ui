<template>
  <div class="w-full flex flex-col space-y-2 mt-10">
    <ComponentCodeWrapper :code="example1">
      <k-badge>Primary</k-badge>
    </ComponentCodeWrapper>

    <ComponentCodeWrapper :code="example2">
      <k-badge dot>Primary Dot</k-badge>
    </ComponentCodeWrapper>

    <ComponentCodeWrapper :code="example3">
      <k-badge button>Primary Button</k-badge>
    </ComponentCodeWrapper>

    <ComponentCodeWrapper :code="example4">
      <k-badge flat>Primary Flat</k-badge>
    </ComponentCodeWrapper>

    <ComponentCodeWrapper :code="example5">
      <k-badge button flat>Primary Button Flat</k-badge>
    </ComponentCodeWrapper>

    <ComponentCodeWrapper :code="example6">
      <k-badge dot flat>Primary Dot Flat</k-badge>
    </ComponentCodeWrapper>

    <ComponentCodeWrapper :code="example7">
      <k-badge variant="secondary">Seondary</k-badge>
    </ComponentCodeWrapper>

    <ComponentCodeWrapper :code="example8">
      <k-badge variant="info">Info</k-badge>
    </ComponentCodeWrapper>

    <ComponentCodeWrapper :code="example9">
      <k-badge variant="success">Success</k-badge>
    </ComponentCodeWrapper>

    <ComponentCodeWrapper :code="example10">
      <k-badge variant="warn">Warn</k-badge>
    </ComponentCodeWrapper>

    <ComponentCodeWrapper :code="example11">
      <k-badge variant="danger">Danger</k-badge>
    </ComponentCodeWrapper>

    <ComponentCodeWrapper :code="example12">
      <k-badge size="sm">Small</k-badge>
    </ComponentCodeWrapper>

    <ComponentCodeWrapper :code="example13">
      <k-badge size="md">Medium</k-badge>
    </ComponentCodeWrapper>

    <ComponentCodeWrapper :code="example14">
      <k-badge pill>Pill</k-badge>
    </ComponentCodeWrapper>

    <ComponentCodeWrapper :code="example15">
      <k-badge variant="secondary" pill>Secondary Pill</k-badge>
    </ComponentCodeWrapper>
  </div>
</template>
<script setup lang="ts">
const example1 = `<k-badge>Primary</k-badge>`
const example2 = `<k-badge dot>Primary Dot</k-badge>`
const example3 = `<k-badge button>Primary Button</k-badge>`
const example4 = `<k-badge flat>Primary Flat</k-badge>`
const example5 = `<k-badge button flat>Primary Button Flat</k-badge>`
const example6 = `<k-badge dot flat>Primary Dot Flat</k-badge>`
const example7 = `<k-badge variant="secondary">Seondary</k-badge>`
const example8 = `<k-badge variant="info">Info</k-badge>`
const example9 = `<k-badge variant="success">Success</k-badge>`
const example10 = `<k-badge variant="warn">Warn</k-badge>`
const example11 = `<k-badge variant="danger">Danger</k-badge>`
const example12 = `<k-badge size="sm">Small</k-badge>`
const example13 = `<k-badge size="md">Medium</k-badge>`
const example14 = `<k-badge pill>Pill</k-badge>`
const example15 = `<k-badge variant="secondary" pill>Secondary Pill</k-badge>`
</script>
