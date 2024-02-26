<template>
  <Menu as="div" class="relative inline-block text-left" v-slot="{ open }">
    <div>
      <slot name="button">
        <MenuButton :class="buttonClasses" :disabled="disabled" v-bind="$attrs">
          <slot>
            {{ title }}
          </slot>
          <template v-if="!preventChevron">
            <IChevronDown
              v-if="
                (direction === 'down' && !open) || (direction === 'up' && open)
              "
              class="-mr-1 h-5 w-5 text-brand-gray-400"
              aria-hidden="true"
              variant="line"
            />
            <IChevronUp
              v-else
              class="-mr-1 h-5 w-5 text-brand-gray-400"
              aria-hidden="true"
              variant="line"
            />
          </template>
        </MenuButton>
      </slot>
    </div>

    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <slot name="items">
        <MenuItems :class="menuItemsClasses">
          <div class="py-1">
            <MenuItem
              v-slot="menuItemSlot"
              v-for="item in items"
              :key="item.value ?? item.label"
              @click="
                () => {
                  if (!item.disabled) {
                    item.onClick?.()
                  }
                }
              "
              as="button"
              :disabled="item.disabled"
              :class="{
                'block w-full text-left': true,
                'opacity-50 cursor-not-allowed': item.disabled,
              }"
            >
              <slot v-bind="menuItemSlot" :item="item" name="item">
                <div
                  :class="[
                    menuItemSlot.active
                      ? 'bg-brand-gray-100 text-brand-gray-900'
                      : 'text-brand-gray-700',
                    'block px-4 text-sm py-1 flex items-center justify-between',
                  ]"
                >
                  <div>
                    {{ item.label }}
                  </div>

                  <IRefreshCw
                    v-if="item.loading"
                    class="h-4 w-4 text-brand-gray-400 animate-spin"
                    aria-hidden="true"
                  />
                </div>
              </slot>
            </MenuItem>
          </div>
        </MenuItems>
      </slot>
    </transition>
  </Menu>
</template>

<script setup lang="ts">
import { PropType, computed } from 'vue'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { IChevronDown, IChevronUp, IRefreshCw } from './icon'

export type MenuItemType = {
  label: string
  value: string
  disabled?: boolean
  loading?: boolean
  onClick?: () => void
}

export type Props = {
  title?: string
  items?: MenuItemType[]
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  preventChevron: boolean
  disabled?: boolean
  direction: 'up' | 'down'
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
  disabled: {
    type: Boolean as PropType<Props['disabled']>,
    default: false,
  },
  direction: {
    type: String as PropType<Props['direction']>,
    default: 'down',
  },
})

const buttonClasses = computed(() => ({
  'px-2 py-1': ['xs', 'sm'].includes(props.size),
  'px-2.5 py-1.5': ['md'].includes(props.size),
  'px-3 py-2': ['lg'].includes(props.size),
  'px-3.5 py-2.5': ['xl'].includes(props.size),

  'text-xs': ['xs'].includes(props.size),
  'text-sm': ['sm', 'md', 'lg', 'xl'].includes(props.size),

  'inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white font-semibold text-brand-gray-900 shadow-sm ring-1 ring-inset ring-brand-gray-300 hover:bg-brand-gray-50':
    true,
  'opacity-50 pointer-events-none': props.disabled,
}))

const menuItemsClasses = computed(() => ({
  'absolute right-0 z-10 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none':
    true,
  'top-full mt-2': props.direction === 'down',
  'bottom-full mb-2': props.direction === 'up',
}))
</script>
