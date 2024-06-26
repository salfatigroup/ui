<template>
  <div class="space-y-8">
    <div class="space-y-4">
      <div class="space-x-2 flex items-center justify-between">
        <h2 class="text-lg leading-6 font-medium text-brand-gray-900">
          @salfatigroup/ui
        </h2>
        <div class="flex space-x-4 items-center text-brand-gray-500">
          <nuxt-link
            to="https://github.com/salfatigroup/ui"
            class="text-sm font-medium text-brand-500 hover:text-brand-700"
          >
            <IGithub class="text-brand-gray-500" />
          </nuxt-link>

          <code
            class="inline-block p-2 text-xs font-mono text-brand-gray-500 rounded-lg border border-brand-gray-200"
          >
            npm i @salfatigroup/ui
          </code>
        </div>
      </div>
    </div>

    <ul
      role="list"
      class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      <li
        v-for="component in components"
        :key="component.title"
        class="flex flex-col bg-brand-gray-50 col-span-1 rounded-lg shadow"
      >
        <div class="bg-white space-y-6 p-6 flex-1 flex flex-col">
          <div class="space-y-1">
            <div class="flex w-full items-center justify-between">
              <h2 class="truncate text-sm font-medium text-brand-gray-900">
                {{ component.title }}
              </h2>

              <nuxt-link
                :to="component.to"
                class="flex items-center space-x-2 text-xs text-brand-500 hover:text-brand-700"
              >
                <span>Learn more</span>
                <KIconChevronRight class="h-4 w-4" />
              </nuxt-link>
            </div>

            <p
              v-if="component.description"
              class="text-xs text-brand-gray-500"
              v-html="component.description"
            ></p>
          </div>

          <div class="flex justify-center items-center flex-1">
            <keep-alive>
              <component
                :is="component.element"
                v-bind="component.props"
                v-on="component.events ?? {}"
              >
                <template v-for="slt in component.slots" :slot="slt.name">
                  {{ slt.content }}
                </template>
              </component>
            </keep-alive>
          </div>
        </div>

        <code
          class="block w-full p-6 text-sm font-mono text-brand-gray-500 rounded-b-lg overflow-x-scroll whitespace-nowrap"
        >
          {{ component.codeExample }}
        </code>
      </li>
    </ul>
  </div>
  <k-modal
    :open="modalOpen"
    :onClose="
      () => {
        modalOpen = false
      }
    "
  />
  <k-toast :show="toastOpen" />

  <k-slide-over :open="slideOverOpen" @close="slideOverOpen = false">
    <div>This is a slide over</div>
  </k-slide-over>
</template>

<script setup lang="ts">
import { ref, shallowRef } from 'vue'

import KButton from '../../../packages/ui/src/runtime/components/button.vue'
import KDrowdown from '../../../packages/ui/src/runtime/components/dropdown.vue'
import KBadge from '../../../packages/ui/src/runtime/components/badge.vue'
import KSelect from '../../../packages/ui/src/runtime/components/select.vue'
import KInput from '../../../packages/ui/src/runtime/components/input/default-input.vue'
import KTextArea from '../../../packages/ui/src/runtime/components/text-area.vue'
import IStar from '../../../packages/ui/src/runtime/components/icon/star.vue'
import IGithub from '../../../packages/ui/src/runtime/components/icon/github.vue'
import CommentInput from '../../../packages/ui/src/runtime/components/comment-input.vue'
import TitleDescInput from '../../../packages/ui/src/runtime/components/title-desc-input.vue'
import Avatar from '../../../packages/ui/src/runtime/components/avatar.vue'
import KCombobox from '../../../packages/ui/src/runtime/components/combobox.vue'
import Checkbox from '../../../packages/ui/src/runtime/components/checkbox.vue'
import RadioGroup from '../../../packages/ui/src/runtime/components/radio-group.vue'
import Pagination from '../../../packages/ui/src/runtime/components/pagination.vue'
import Toggle from '../../../packages/ui/src/runtime/components/toggle.vue'
import KAlert from '../../../packages/ui/src/runtime/components/alert.vue'
import KModal from '../../../packages/ui/src/runtime/components/modal.vue'
import KSlideOver from '../../../packages/ui/src/runtime/components/slide-over.vue'
import KSpinner from '../../../packages/ui/src/runtime/components/spinner.vue'
import KNumberInput from '../../../packages/ui/src/runtime/components/number-input.vue'
import KTag from '../../../packages/ui/src/runtime/components/tag.vue'
import KTagsInput from '../../../packages/ui/src/runtime/components/tags-input.vue'
import KSlider from '../../../packages/ui/src/runtime/components/slider.vue'
import KFilters from '../../../packages/ui/src/runtime/components/filters.vue'

import { items } from '../mocks/radio_mocks'
import { people } from '../mocks/options_mocks'

const components = ref(
  [
    {
      title: 'Button',
      to: '/button',
      element: shallowRef(KButton),
      props: {
        class: 'w-full',
      },
      slots: [
        {
          name: 'default',
          content: 'Button',
        },
      ],
      codeExample: `<k-button>Button</k-button>`,
    },
    {
      title: 'Dropdown',
      to: '/dropdown',
      element: shallowRef(KDrowdown),
      props: {
        class: 'w-full',
        items: [
          {
            value: '1',
            label: 'Option 1',
          },
          {
            value: '2',
            label: 'Option 2',
          },
        ],
      },
      slots: [
        {
          name: 'default',
          content: 'Dropdown',
        },
      ],
      codeExample: `<k-dropdown>Dropdown</k-dropdown>`,
    },
    {
      title: 'Badge',
      to: '/badge',
      element: shallowRef(KBadge),
      props: {
        dot: true,
      },
      slots: [
        {
          name: 'default',
          content: 'Badge',
        },
      ],
      codeExample: `<k-badge>Badge</k-badge>`,
    },
    {
      title: 'Select',
      to: '/select',
      element: shallowRef(KSelect),
      props: {
        class: 'w-full',
        options: [
          {
            value: '1',
            label: 'Wade Cooper',
          },
          {
            value: '2',
            label: 'Arlene Mccoy',
            avatar:
              'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
        ],
      },
      slots: [
        {
          name: 'default',
          content: 'Select',
        },
      ],
      codeExample: `<k-select>Select</k-select>`,
    },
    {
      title: 'Input',
      to: '/input',
      element: shallowRef(KInput),
      props: {
        class: 'w-full',
      },
      slots: [
        {
          name: 'default',
          content: 'Input',
        },
      ],
      codeExample: `<k-input>Input</k-input>`,
    },
    {
      title: 'Text area',
      to: '/text-area',
      element: shallowRef(KTextArea),
      props: {
        class: 'w-full',
      },
      slots: [
        {
          name: 'default',
          content: 'Text area',
        },
      ],
      codeExample: `<k-text-area>Text area</k-text-area>`,
    },
    {
      title: 'Icon',
      description:
        'You can find the full icon list <a target="_blank" class="text-brand-500 hover:text-brand-700" href="https://www.figma.com/file/kNBOQOHOM9muhOOG3HxaYM/Anron-Icons-10?type=design&node-id=2542%3A5990&mode=design&t=6DiKPOPQ1BsiKzkG-1">here.</a>',
      to: '/icon',
      element: shallowRef(IStar),
      props: {
        class: 'w-5 h-5 text-brand-500',
        variant: 'duotone',
      },
      slots: [],
      codeExample: `<KIconStar variant="duotone" class="w-5 h-5" />`,
    },
    {
      title: 'Comment',
      to: '/comment-input',
      element: shallowRef(CommentInput),
      props: {
        class: 'w-fit h-fit',
        avatar:
          'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      slots: [],
      codeExample: `<k-comment-input class="w-fit h-fit" />`,
    },
    {
      title: 'Title Description',
      to: '/title-desc-input',
      element: shallowRef(TitleDescInput),
      props: {
        class: 'w-fit h-fit',
      },
      slots: [],
      codeExample: `<k-title-desc-input class="w-fit h-fit" />`,
    },
    {
      title: 'Avatar',
      to: '/avatar',
      element: shallowRef(Avatar),
      props: {
        src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      slots: [],
      codeExample: `<k-avatar src="https://..." />`,
    },
    {
      title: 'Combobox',
      to: '/combobox',
      element: shallowRef(KCombobox),
      props: { options: people, modelValue: people[1] },
      slots: [],
      codeExample: `<k-combobox />`,
    },
    {
      title: 'Checkbox',
      to: '/checkbox',
      element: shallowRef(Checkbox),
      props: {},
      slots: [],
      codeExample: `<k-checkbox />`,
    },
    {
      title: 'Radio Group',
      to: '/radio-group',
      element: shallowRef(RadioGroup),
      props: { items: [items[1], items[2]], modelValue: items[1].value },
      slots: [],
      codeExample: `<k-radio-group items="[...]" />`,
    },
    {
      title: 'Pagination',
      to: '/pagination',
      element: shallowRef(Pagination),
      props: { total: 452, pageSize: 50, maxPageButtons: 3, modelValue: 10 },
      slots: [],
      codeExample: `<k-pagination :total="452" :page-size="50"/>`,
    },
    {
      title: 'Toggle',
      to: '/toggle',
      element: shallowRef(Toggle),
      props: {},
      slots: [],
      codeExample: `<k-toggle />`,
    },
    {
      title: 'KAlert',
      to: '/alert',
      element: shallowRef(KAlert),
      props: {
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.',
      },
      slots: [],
      codeExample: `<k-alert />`,
    },
    {
      title: 'Modal',
      to: '/modal',
      element: shallowRef(KButton),
      slots: [{ name: 'default', content: 'Open modal' }],
      codeExample: `<k-modal />`,
      events: {
        click() {
          modalOpen.value = true
        },
      },
    },
    {
      title: 'Slide Over',
      to: '/slide-over',
      element: shallowRef(KButton),
      slots: [{ name: 'default', content: 'Open Slide Over' }],
      codeExample: `<k-slide-over />`,
      events: {
        click() {
          slideOverOpen.value = true
        },
      },
    },
    {
      title: 'Spinner',
      to: '/spinner',
      element: shallowRef(KSpinner),
      slots: [],
      codeExample: `<k-spinner />`,
    },
    {
      title: 'Number Input',
      to: '/number-input',
      element: shallowRef(KNumberInput),
      props: { modelValue: 10 },
      slots: [],
      codeExample: `<k-number-input />`,
    },
    {
      title: 'Tag',
      to: '/tag',
      element: shallowRef(KTag),
      props: { label: 'Tag' },
      slots: [{ content: 'Tag' }],
      codeExample: `<k-tag />`,
    },
    {
      title: 'Tags Input',
      to: '/tags-input',
      element: shallowRef(KTagsInput),
      props: { modelValue: ['Tag 1', 'Tag 2'] },
      slots: [],
      codeExample: `<k-tags-input />`,
    },
    {
      title: 'Toast',
      to: '/toast',
      element: shallowRef(KButton),
      slots: [{ name: 'default', content: 'Toggle toast' }],
      codeExample: `<k-toast :show="toastOpen" />`,
      events: {
        click() {
          toastOpen.value = !toastOpen.value
        },
      },
    },
    {
      title: 'Slider',
      to: '/slider',
      element: shallowRef(KSlider),
      codeExample: `<k-slider v-model="num" />`,
      props: { modelValue: 50, min: 0, max: 100 },
    },
    {
      title: 'Filters',
      to: '/filters',
      element: shallowRef(KFilters),
      codeExample: `<k-filters />`,
    },
  ].sort((a, b) => a.title.localeCompare(b.title)),
)

const modalOpen = ref(false)
const slideOverOpen = ref(false)
const toastOpen = ref(false)
</script>
