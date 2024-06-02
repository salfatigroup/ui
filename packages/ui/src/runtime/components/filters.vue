<template>
  <div class="bg-white w-full">
    <!-- Mobile filter dialog -->
    <TransitionRoot as="template" :show="open">
      <Dialog class="relative z-40 sm:hidden" @close="open = false">
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div class="fixed inset-0 z-40 flex">
          <TransitionChild
            as="template"
            enter="transition ease-in-out duration-300 transform"
            enter-from="translate-x-full"
            enter-to="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leave-from="translate-x-0"
            leave-to="translate-x-full"
          >
            <DialogPanel
              class="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl"
            >
              <div class="flex items-center justify-between px-4">
                <h2 class="text-lg font-medium text-brand-gray-900">Filters</h2>
                <button
                  type="button"
                  class="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-brand-gray-400"
                  @click="open = false"
                >
                  <span class="sr-only">Close menu</span>
                  <ICross class="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              <!-- Filters -->
              <form class="mt-4">
                <Disclosure
                  as="div"
                  v-for="section in filters"
                  :key="section.name"
                  class="border-t border-brand-gray-200 px-4 py-6"
                  v-slot="{ open }"
                >
                  <h3 class="-mx-2 -my-3 flow-root">
                    <DisclosureButton
                      class="flex w-full items-center justify-between bg-white px-2 py-3 text-sm text-brand-gray-400"
                    >
                      <span class="font-medium text-brand-gray-900">
                        {{ section.name }}
                      </span>
                      <span class="ml-6 flex items-center">
                        <IChevronDown
                          :class="[
                            open ? '-rotate-180' : 'rotate-0',
                            'h-5 w-5 transform',
                          ]"
                          aria-hidden="true"
                        />
                      </span>
                    </DisclosureButton>
                  </h3>
                  <DisclosurePanel class="pt-6">
                    <div class="space-y-6">
                      <div
                        v-for="(option, optionIdx) in section.options"
                        :key="option.value"
                        class="flex items-center"
                      >
                        <slot
                          name="filter-option"
                          :option="option"
                          :optionIdx="optionIdx"
                          :section="section"
                        >
                          <input
                            :id="`filter-mobile-${section.id}-${optionIdx}`"
                            :name="`${section.id}[]`"
                            :value="option.value"
                            type="checkbox"
                            @input="updateActiveFilters($event)"
                            :checked="isFilterOptionChecked(option)"
                            class="h-4 w-4 rounded border-brand-gray-300 text-brand-600 focus:ring-brand-500"
                          />
                          <label
                            :for="`filter-mobile-${section.id}-${optionIdx}`"
                            class="ml-3 text-sm text-brand-gray-500"
                          >
                            {{ option.label }}
                          </label>
                        </slot>
                      </div>
                    </div>
                  </DisclosurePanel>
                </Disclosure>
              </form>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Filters -->
    <section aria-labelledby="filter-heading">
      <h2 id="filter-heading" class="sr-only">Filters</h2>

      <div class="border-b border-brand-gray-200 bg-white pb-4">
        <div
          class="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        >
          <span />

          <!-- <Menu as="div" class="relative inline-block text-left">
            <div>
              <MenuButton
                class="group inline-flex justify-center text-sm font-medium text-brand-gray-700 hover:text-brand-gray-900"
              >
                Sort
                <IChevronDown
                  class="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-brand-gray-400 group-hover:text-brand-gray-500"
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
                class="absolute left-0 z-10 mt-2 w-40 origin-top-left rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <div class="py-1">
                  <MenuItem
                    v-for="option in sortOptions"
                    :key="option.name"
                    v-slot="{ active }"
                  >
                    <a
                      :href="option.href"
                      :class="[
                        option.current
                          ? 'font-medium text-brand-gray-900'
                          : 'text-brand-gray-500',
                        active ? 'bg-brand-gray-100' : '',
                        'block px-4 py-2 text-sm',
                      ]"
                    >
                      {{ option.name }}
                    </a>
                  </MenuItem>
                </div>
              </MenuItems>
            </transition>
          </Menu>-->

          <button
            type="button"
            class="inline-block text-sm font-medium text-brand-gray-700 hover:text-brand-gray-900 sm:hidden"
            @click="open = true"
          >
            Filters
          </button>

          <div class="hidden sm:block">
            <div class="flow-root">
              <PopoverGroup
                class="-mx-4 flex items-center divide-x divide-brand-gray-200"
              >
                <Popover
                  v-for="(section, sectionIdx) in filters"
                  :key="section.name"
                  class="relative inline-block px-4 text-left"
                >
                  <PopoverButton
                    class="group inline-flex justify-center text-sm font-medium text-brand-gray-700 hover:text-brand-gray-900"
                  >
                    <span>{{ section.name }}</span>
                    <span
                      v-if="countActiveFilters(section) > 0"
                      class="ml-1.5 rounded bg-brand-gray-200 px-1.5 py-0.5 text-xs font-semibold tabular-nums text-brand-gray-700"
                    >
                      {{ countActiveFilters(section) }}
                    </span>
                    <IChevronDown
                      class="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-brand-gray-400 group-hover:text-brand-gray-500"
                      aria-hidden="true"
                    />
                  </PopoverButton>

                  <transition
                    enter-active-class="transition ease-out duration-100"
                    enter-from-class="transform opacity-0 scale-95"
                    enter-to-class="transform opacity-100 scale-100"
                    leave-active-class="transition ease-in duration-75"
                    leave-from-class="transform opacity-100 scale-100"
                    leave-to-class="transform opacity-0 scale-95"
                  >
                    <PopoverPanel
                      class="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white p-4 shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none"
                    >
                      <form class="space-y-4">
                        <div
                          v-for="(option, optionIdx) in section.options"
                          :key="option.value"
                          class="flex items-center"
                        >
                          <slot
                            name="filter-option"
                            :option="option"
                            :optionIdx="optionIdx"
                            :section="section"
                          >
                            <input
                              :id="`filter-${section.id}-${optionIdx}`"
                              :name="`${section.id}[]`"
                              :value="option.value"
                              type="checkbox"
                              @input="updateActiveFilters($event)"
                              :checked="isFilterOptionChecked(option)"
                              class="h-4 w-4 rounded border-brand-gray-300 text-brand-600 focus:ring-brand-500"
                            />
                            <label
                              :for="`filter-${section.id}-${optionIdx}`"
                              class="ml-3 whitespace-nowrap pr-6 text-sm font-medium text-brand-gray-900"
                            >
                              {{ option.label }}
                            </label>
                          </slot>
                        </div>
                      </form>
                    </PopoverPanel>
                  </transition>
                </Popover>
              </PopoverGroup>
            </div>
          </div>
        </div>
      </div>

      <!-- Active filters -->
      <div class="bg-brand-gray-100" v-if="activeFilters?.length > 0">
        <div
          class="mx-auto max-w-7xl px-4 py-3 sm:flex sm:items-center sm:px-6 lg:px-8"
        >
          <h3 class="text-sm font-medium text-brand-gray-500">
            Filters
            <span class="sr-only">, active</span>
          </h3>

          <div
            aria-hidden="true"
            class="hidden h-5 w-px bg-brand-gray-300 sm:ml-4 sm:block"
          />

          <div class="mt-2 sm:ml-4 sm:mt-0">
            <div class="-m-1 flex flex-wrap items-center">
              <span
                v-for="activeFilter in activeFilters"
                :key="activeFilter.value"
                class="m-1 inline-flex items-center rounded-full border border-brand-gray-200 bg-white py-1.5 pl-3 pr-2 text-sm font-medium text-brand-gray-900"
              >
                <slot name="active-filter" :activeFilter="activeFilter">
                  <span>{{ activeFilter.label }}</span>
                  <button
                    type="button"
                    class="ml-1 inline-flex h-4 w-4 flex-shrink-0 rounded-full p-1 text-brand-gray-400 hover:bg-brand-gray-200 hover:text-brand-gray-500"
                    @click="removeFilter(activeFilter)"
                  >
                    <span class="sr-only">
                      Remove filter for {{ activeFilter.label }}
                    </span>
                    <svg
                      class="h-2 w-2"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 8 8"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-width="1.5"
                        d="M1 1l6 6m0-6L1 7"
                      />
                    </svg>
                  </button>
                </slot>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, PropType } from 'vue'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import { ICross, IChevronDown } from './icon'

import { FilterOption, Filters } from './filters/types'

const sortOptions = [
  { name: 'Most Popular', href: '#', current: true },
  { name: 'Best Rating', href: '#', current: false },
  { name: 'Newest', href: '#', current: false },
]

const props = defineProps({
  filters: {
    type: Array as PropType<Filters>,
    required: true,
  },
  activeFilters: {
    type: Array as PropType<{ value: string; label: string }[]>,
    required: true,
  },
})

const emit = defineEmits<{
  (
    event: 'update:activeFilters',
    value: { value: string; label: string }[],
  ): void
}>()

const open = ref(false)

function isFilterOptionChecked(option: FilterOption) {
  return props.activeFilters?.some((filter) => filter.value === option.value)
}

function countActiveFilters(section: Filters[number]) {
  return section.options.filter((option: FilterOption) =>
    isFilterOptionChecked(option),
  ).length
}

function removeFilter(activeFilter: { value: string; label: string }) {
  emit(
    'update:activeFilters',
    props.activeFilters?.filter(
      (filter) => filter.value !== activeFilter.value,
    ),
  )
}

function updateActiveFilters(event: Event) {
  const target = event.target as HTMLInputElement
  const value = target.value
  const label = target.nextElementSibling?.textContent || ''
  const checked = target.checked

  if (checked) {
    emit('update:activeFilters', [...props.activeFilters, { value, label }])
  } else {
    emit(
      'update:activeFilters',
      props.activeFilters.filter((filter) => filter.value !== value),
    )
  }
}
</script>
