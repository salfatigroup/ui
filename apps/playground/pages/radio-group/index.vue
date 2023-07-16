<template>
  <div class="w-[70%] flex flex-col space-y-10 mt-10">
    <k-radio-group
      title="Notifications"
      name="notifications"
      description="How do you prefer to receive notifications?"
      :items="items"
      v-model="checked"
    />
    <k-radio-group
      title="Notifications"
      name="notifications2"
      description="How do you prefer to receive notifications?"
      :items="items"
      variant="horizontal"
      v-model="checked"
    />
    <k-radio-group
      title="Notifications"
      name="notifications3"
      variant="vertical-right"
      :items="items"
      v-model="checked"
    />
    <k-radio-group
      title="Select a mailing list"
      name="notifications4"
      variant="cards"
      :items="items"
      v-model="checked"
    />
    <k-radio-group
      title="Select a small card"
      name="notifications5"
      variant="small-cards"
      learnMoreText="Learn more"
      :items="smallItems"
      v-model="checked"
    />
    <k-radio-group
      title="Select a stacked card"
      name="notifications6"
      variant="stacked-cards"
      :items="items"
      v-model="checked"
    />
    <k-radio-group
      title="Select a stacked card"
      name="notifications6"
      variant="stacked-cards"
      :items="items"
      v-model="checked"
      ><template #title
        ><h2 class="text-lg font-medium leading-6 text-brand-gray-900">
          Custom title
        </h2></template
      ><template v-slot="{ checked, item }"
        ><div>
          {{ `${checked ? 'Checked - ' : ''}${JSON.stringify(item)}` }}
        </div></template
      >
    </k-radio-group>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { items, smallItems } from '../../mocks/radio_mocks'
const checked = ref(items[1].value)
</script>
