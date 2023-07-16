<template>
  <div class="w-full flex flex-col space-y-10 mt-10">
    <Documentation
      componentName="KTextInput"
      :propsDefinition="[
        {
          name: 'modelValue',
          type: 'string',
          description: 'The value of the input',
        },
        {
          name: 'label',
          type: 'string',
          description: 'The label of the input',
        },
        {
          name: 'helpText',
          type: 'string',
          description: 'The help text of the input',
        },
        {
          name: 'errorText',
          type: 'string',
          description: 'The error text of the input',
        },
        {
          name: 'cornerHint',
          type: 'string',
          description: 'The corner hint of the input',
        },
        {
          name: 'placeholder',
          type: 'string',
          description: 'The placeholder of the input',
        },
        {
          name: 'disabled',
          type: 'boolean',
          description: 'Whether the input is disabled',
        },
        {
          name: 'insetLabel',
          type: 'boolean',
          description: 'Whether the input has an inset label',
        },
        {
          name: 'pill',
          type: 'boolean',
          description: 'Whether the input is pill shaped',
        },
      ]"
      :slotsDefinition="[]"
      :emitDefinition="[]"
    />
    <k-text-input modelValue="No labels" />
    <k-text-input
      label="Company Name"
      modelValue="Salfati Group"
      helpText="This is a help text"
      cornerHint="Corner"
    />
    <k-text-input
      label="Forever invalid"
      modelValue="Invalid"
      helpText="This is a help text"
      errorText="This is error text"
    />

    <k-text-input label="Disabled input" modelValue="Disabled" disabled />

    <k-text-input label="With icons" modelValue="Lots of icons">
      <template #leadingIcon>
        <KIconEmail class="h-5 w-5 text-brand-gray-400" aria-hidden="true" />
      </template>
      <template #trailingIcon>
        <KIconQuestion class="h-5 w-5 text-brand-gray-400" aria-hidden="true" />
      </template>
    </k-text-input>

    <k-text-input
      insetLabel
      label="With inset label"
      placeholder="Placeholder"
    />

    <k-text-input label="Pill" placeholder="Placeholder" pill />
  </div>
</template>
