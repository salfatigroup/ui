<template>
  <div class="w-full flex flex-col space-y-2 mt-10">
    <k-title-desc-input avatar="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
      <template #actions>
        <Listbox as="div" v-model="assigned" class="flex-shrink-0">
          <ListboxLabel class="sr-only">Assign</ListboxLabel>
          <div class="relative">
            <ListboxButton class="relative inline-flex items-center whitespace-nowrap rounded-full bg-gray-50 px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 sm:px-3">
              <IUserCircle v-if="assigned.value === null" class="h-5 w-5 flex-shrink-0 text-gray-300 sm:-ml-1" aria-hidden="true" variant="filled" />

              <img v-else :src="assigned.avatar" alt="" class="h-5 w-5 flex-shrink-0 rounded-full" />

              <span :class="[assigned.value === null ? '' : 'text-gray-900', 'hidden truncate sm:ml-2 sm:block']">{{ assigned.value === null ? 'Assign' : assigned.name }}</span>
            </ListboxButton>

            <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
              <ListboxOptions class="absolute right-0 z-10 mt-1 max-h-56 w-52 overflow-auto rounded-lg bg-white py-3 text-base shadow ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                <ListboxOption as="template" v-for="assignee in assignees" :key="assignee.value" :value="assignee" v-slot="{ active }">
                  <li :class="[active ? 'bg-gray-100' : 'bg-white', 'relative cursor-default select-none px-3 py-2']">
                    <div class="flex items-center">
                      <img v-if="assignee.avatar" :src="assignee.avatar" alt="" class="h-5 w-5 flex-shrink-0 rounded-full" />
                      <IUserCircle v-else class="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" variant="filled"/>
                      <span class="ml-3 block truncate font-medium">{{ assignee.name }}</span>
                    </div>
                  </li>
                </ListboxOption>
              </ListboxOptions>
            </transition>
          </div>
        </Listbox>

        <Listbox as="div" v-model="labelled" class="flex-shrink-0">
          <ListboxLabel class="sr-only">Add a label</ListboxLabel>
          <div class="relative">
            <ListboxButton class="relative inline-flex items-center whitespace-nowrap rounded-full bg-gray-50 px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 sm:px-3">
              <ITag :class="[labelled.value === null ? 'text-gray-300' : 'text-gray-500', 'h-5 w-5 flex-shrink-0 sm:-ml-1']" aria-hidden="true" variant="filled"/>
              <span :class="[labelled.value === null ? '' : 'text-gray-900', 'hidden truncate sm:ml-2 sm:block']">{{ labelled.value === null ? 'Label' : labelled.name }}</span>
            </ListboxButton>

            <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
              <ListboxOptions class="absolute right-0 z-10 mt-1 max-h-56 w-52 overflow-auto rounded-lg bg-white py-3 text-base shadow ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                <ListboxOption as="template" v-for="label in labels" :key="label.value" :value="label" v-slot="{ active }">
                  <li :class="[active ? 'bg-gray-100' : 'bg-white', 'relative cursor-default select-none px-3 py-2']">
                    <div class="flex items-center">
                      <span class="block truncate font-medium">{{ label.name }}</span>
                    </div>
                  </li>
                </ListboxOption>
              </ListboxOptions>
            </transition>
          </div>
        </Listbox>

        <Listbox as="div" v-model="dated" class="flex-shrink-0">
          <ListboxLabel class="sr-only">Add a due date</ListboxLabel>
          <div class="relative">
            <ListboxButton class="relative inline-flex items-center whitespace-nowrap rounded-full bg-gray-50 px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 sm:px-3">
              <ICalendar :class="[dated.value === null ? 'text-gray-300' : 'text-gray-500', 'h-5 w-5 flex-shrink-0 sm:-ml-1']" aria-hidden="true" variant="filled" />
              <span :class="[dated.value === null ? '' : 'text-gray-900', 'hidden truncate sm:ml-2 sm:block']">{{ dated.value === null ? 'Due date' : dated.name }}</span>
            </ListboxButton>

            <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
              <ListboxOptions class="absolute right-0 z-10 mt-1 max-h-56 w-52 overflow-auto rounded-lg bg-white py-3 text-base shadow ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                <ListboxOption as="template" v-for="dueDate in dueDates" :key="dueDate.value" :value="dueDate" v-slot="{ active }">
                  <li :class="[active ? 'bg-gray-100' : 'bg-white', 'relative cursor-default select-none px-3 py-2']">
                    <div class="flex items-center">
                      <span class="block truncate font-medium">{{ dueDate.name }}</span>
                    </div>
                  </li>
                </ListboxOption>
              </ListboxOptions>
            </transition>
          </div>
        </Listbox>
        </template>
        <template #toolbar><button type="button" class="group -my-2 -ml-2 inline-flex items-center rounded-full px-3 py-2 text-left text-gray-400">
            <IPaperclip class="-ml-1 mr-2 h-5 w-5 group-hover:text-gray-500" aria-hidden="true" variant="filled" />
            <span class="text-sm italic text-gray-500 group-hover:text-gray-600">Attach a file</span>
          </button></template>
    </k-title-desc-input>
  </div>
</template>

<script setup lang="ts">

import { ref } from 'vue'
import {
  ICalendar, IPaperclip, ITag, IUserCircle,
} from '../../../../packages/ui/src/runtime/components/icon'
import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions } from '@headlessui/vue'

const assignees = [
  { name: 'Unassigned', value: null },
  {
    name: 'Wade Cooper',
    value: 'wade-cooper',
    avatar:
      'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  // More items...
]
const labels = [
  { name: 'Unlabelled', value: null },
  { name: 'Engineering', value: 'engineering' },
  // More items...
]
const dueDates = [
  { name: 'No due date', value: null },
  { name: 'Today', value: 'today' },
  // More items...
]

const assigned = ref(assignees[0])
const labelled = ref(labels[0])
const dated = ref(dueDates[0])
</script>


