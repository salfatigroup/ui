<template>
  <div>
    <h1>{{ componentName }} Component Documentation</h1>
    <h2>Props</h2>
    <ul>
      <li v-for="prop in propsDefinition" :key="prop.name">
        <h3>{{ prop.name }}</h3>
        <p>Type: {{ prop.type }}</p>
        <p>Description: {{ prop.description }}</p>
      </li>
    </ul>
    <h2>Emit Events</h2>
    <ul>
      <li v-for="emit in emitDefinition" :key="emit.name">
        <h3>{{ emit.name }}</h3>
        <p>Description: {{ emit.description }}</p>
        <ul>
          <li v-for="arg in emit.args" :key="arg.name">
            <p>{{ arg.name }}: {{ arg.type }} - {{ arg.description }}</p>
          </li>
        </ul>
      </li>
    </ul>
    <h2>Slots</h2>
    <ul>
      <li v-for="slot in slotDefinition" :key="slot.name">
        <h3>{{ slot.name }}</h3>
        <p>Description: {{ slot.description }}</p>
        <ul>
          <li v-for="arg in slot.args" :key="arg.name">
            <p>{{ arg.name }}: {{ arg.type }} - {{ arg.description }}</p>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'

export type Arg = {
  name: string
  type: string
  description: string
}

export type EmitDefinition = {
  name: string
  args: Arg[]
  description: string
}

export type SlotDefinition = {
  name: string
  args: Arg[]
  description: string
}

defineProps({
  componentName: {
    type: String,
    required: true,
  },
  propsDefinition: {
    type: Array as PropType<Arg[]>,
    default: () => [],
  },
  emitDefinition: {
    type: Array as PropType<EmitDefinition[]>,
    default: () => [],
  },
  slotDefinition: {
    type: Array as PropType<SlotDefinition[]>,
    default: () => [],
  },
})
</script>
