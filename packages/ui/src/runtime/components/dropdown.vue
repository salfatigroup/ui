<template>
  <Menu as="div" class="relative inline-block text-left">
    <div>
      <MenuButton
        class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white font-semibold text-brand-gray-900 shadow-sm ring-1 ring-inset ring-brand-gray-300 hover:bg-brand-gray-50"
        :class="buttonSizeClasses"
      >
        <slot>
          {{ title }}
        </slot>
        <IChevronDown
          v-if="!preventChevron"
          class="-mr-1 w-5 h-5 text-brand-gray-400"
          aria-hidden="true"
        />
      </MenuButton>
    </div>

    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <MenuItems
        class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      >
        <div class="py-1">
          <MenuItem
            v-slot="menuItemSlot"
            v-for="item in items"
            :key="item.value ?? item.label"
            @click="item.onClick?.()"
            as="button"
            class="block w-full text-left hover:bg-brand-gray-500/10 py-1"
          >
            <slot v-bind="menuItemSlot" :item="item" name="item">
              <div
                :class="[
                  menuItemSlot.active
                    ? 'bg-brand-gray-100 text-brand-gray-900'
                    : 'text-brand-gray-700',
                  'block px-4 text-sm',
                ]"
              >
                {{ item.label }}
              </div>
            </slot>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script setup lang="ts">
import { PropType, computed } from 'vue'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { IChevronDown } from './icon'

export type MenuItemType = {
  label: string
  value: string
  onClick?: () => void
}

export type Props = {
  title?: string
  items?: MenuItemType[]
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  preventChevron: boolean
}

const props = defineProps({
  title: {
    type: String as PropType<Props['title']>,
    default: 'Options',
  },
  items: {
    type: Array as PropType<Props['items']>,
    default: () => [] as Props['items'],
  },
  size: {
    type: String as PropType<Props['size']>,
    default: 'md',
  },
  preventChevron: {
    type: Boolean as PropType<Props['preventChevron']>,
    default: false,
  },
})

const buttonSizeClasses = computed(() => ({
  'px-2 py-1': ['xs', 'sm'].includes(props.size),
  'px-2.5 py-1.5': ['md'].includes(props.size),
  'px-3 py-2': ['lg'].includes(props.size),
  'px-3.5 py-2.5': ['xl'].includes(props.size),

  'text-xs': ['xs'].includes(props.size),
  'text-sm': ['sm', 'md', 'lg', 'xl'].includes(props.size),
}))
</script>
