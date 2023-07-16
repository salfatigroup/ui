<template>
  <div class="w-full flex flex-col space-y-2 mt-10">
    <ComponentCodeWrapper :code="exmaple1">
      <k-text-input modelValue="No labels" />
    </ComponentCodeWrapper>

    <ComponentCodeWrapper :code="exmaple2">
      <k-text-input
        label="Company Name"
        modelValue="Salfati Group"
        helpText="This is a help text"
        cornerHint="Corner"
      />
    </ComponentCodeWrapper>

    <ComponentCodeWrapper :code="exmaple3">
      <k-text-input
        label="Forever invalid"
        modelValue="Invalid"
        helpText="This is a help text"
        errorText="This is error text"
      />
    </ComponentCodeWrapper>

    <ComponentCodeWrapper :code="exmaple4">
      <k-text-input label="Disabled input" modelValue="Disabled" disabled />
    </ComponentCodeWrapper>

    <ComponentCodeWrapper :code="exmaple5">
      <k-text-input label="With icons" modelValue="Lots of icons">
        <template #leadingIcon>
          <KIconEmail class="h-5 w-5 text-brand-gray-400" aria-hidden="true" />
        </template>
        <template #trailingIcon>
          <KIconQuestion
            class="h-5 w-5 text-brand-gray-400"
            aria-hidden="true"
          />
        </template>
      </k-text-input>
    </ComponentCodeWrapper>

    <ComponentCodeWrapper :code="exmaple6">
      <k-text-input
        insetLabel
        label="With inset label"
        placeholder="Placeholder"
      />
    </ComponentCodeWrapper>

    <ComponentCodeWrapper :code="exmaple7">
      <k-text-input label="Pill" placeholder="Placeholder" pill />
    </ComponentCodeWrapper>
  </div>
</template>
<script setup lang="ts">
const exmaple1 = `<k-text-input modelValue="No labels" />`
const exmaple2 = `<k-text-input
  label="Company Name"
  modelValue="Salfati Group"
  helpText="This is a help text"
  cornerHint="Corner"
/>`
const exmaple3 = `<k-text-input
  label="Forever invalid"
  modelValue="Invalid"
  helpText="This is a help text"
  errorText="This is error text"
/>`

const exmaple4 = `<k-text-input label="Disabled input" modelValue="Disabled" disabled />`

const exmaple5 = `<k-text-input label="With icons" modelValue="Lots of icons">
  <template #leadingIcon>
    <KIconEmail class="h-5 w-5 text-brand-gray-400" aria-hidden="true" />
  </template>
  <template #trailingIcon>
    <KIconQuestion class="h-5 w-5 text-brand-gray-400" aria-hidden="true" />
  </template>
</k-text-input>`
const exmaple6 = `<k-text-input
  insetLabel
  label="With inset label"
  placeholder="Placeholder"
/>`
const exmaple7 = `<k-text-input label="Pill" placeholder="Placeholder" pill />`
</script>
