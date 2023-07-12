<template>
  <div class="w-full flex flex-col space-y-2 mt-10">
    <k-comment-input avatar="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
      <template #customAddons>
        <div class="flex items-center">
            <button type="button" class="-m-2.5 flex h-10 w-10 items-center justify-center rounded-full text-brand-gray-400 hover:text-brand-gray-500">
              <IPaperclip class="h-5 w-5" aria-hidden="true" />
              <span class="sr-only">Attach a file</span>
            </button>
          </div>
          <div class="flex items-center">
            <Listbox as="div" v-model="selected">
              <ListboxLabel class="sr-only">Your mood</ListboxLabel>
              <div class="relative">
                <ListboxButton class="relative -m-2.5 flex h-10 w-10 items-center justify-center rounded-full text-brand-gray-400 hover:text-brand-gray-500">
                  <span class="flex items-center justify-center">
                    <span v-if="selected.value === null">
                      <IEmotionSmile variant="filled" class="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                      <span class="sr-only">Add your mood</span>
                    </span>
                    <span v-if="!(selected.value === null)">
                      <span :class="[selected.bgColor, 'flex h-8 w-8 items-center justify-center rounded-full']">
                        <component  :is="selected.icon" class="h-5 w-5 flex-shrink-0 text-white" aria-hidden="true" variant="filled" />
                      </span>
                      <span class="sr-only">{{ selected.name }}</span>
                    </span>
                  </span>
                </ListboxButton>

                <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
                  <ListboxOptions class="absolute z-10 -ml-6 mt-1 w-60 rounded-lg bg-white py-3 text-base shadow ring-1 ring-black ring-opacity-5 focus:outline-none sm:ml-auto sm:w-64 sm:text-sm">
                    <ListboxOption as="template" v-for="mood in moods" :key="mood.value" :value="mood" v-slot="{ active }">
                      <li :class="[active ? 'bg-gray-100' : 'bg-white', 'relative cursor-default select-none px-3 py-2']">
                        <div class="flex items-center">
                          <div :class="[mood.bgColor, 'flex h-8 w-8 items-center justify-center rounded-full']">
                            <component :is="mood.icon" variant="filled" :class="[mood.iconColor, 'h-5 w-5 flex-shrink-0']" aria-hidden="true" />
                          </div>
                          <span class="ml-3 block truncate font-medium">{{ mood.name }}</span>
                        </div>
                      </li>
                    </ListboxOption>
                  </ListboxOptions>
                </transition>
              </div>
            </Listbox>
          </div>
        </template>
      </k-comment-input>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  IFire,
  IEmotionSad,
  IEmotionHappy,
  IHeart,
  IEmotionSmile,
  ICrossRec,
  IPaperclip,
  IThumbsUp
} from '../../../../packages/ui/src/runtime/components/icon'
import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions } from '@headlessui/vue'

const moods = [
  { name: 'Excited', value: 'excited', icon: IFire, iconColor: 'text-white', bgColor: 'bg-red-500' },
  { name: 'Loved', value: 'loved', icon: IHeart, iconColor: 'text-white', bgColor: 'bg-pink-400' },
  { name: 'Happy', value: 'happy', icon: IEmotionHappy, iconColor: 'text-white', bgColor: 'bg-green-400' },
  { name: 'Sad', value: 'sad', icon: IEmotionSad, iconColor: 'text-white', bgColor: 'bg-yellow-400' },
  { name: 'Thumbsy', value: 'thumbsy', icon: IThumbsUp, iconColor: 'text-white', bgColor: 'bg-blue-500' },
  { name: 'I feel nothing', value: null, icon: ICrossRec, iconColor: 'text-gray-400', bgColor: 'bg-transparent' },
]
const selected = ref(moods[5])
</script>

