<template>
  <div class="w-full flex flex-col space-y-10 mt-10">
    <ComponentCodeWrapper :code="example1">
      <k-pagination :total="452" v-model="currentPage" :pageSize="50" />
    </ComponentCodeWrapper>

    <ComponentCodeWrapper :code="example7">
      <k-pagination
        :total="452"
        v-model="currentPage"
        :pageSize="50"
        :maxPageButtons="5"
        variant="footer"
      />
    </ComponentCodeWrapper>

    <ComponentCodeWrapper :code="example2">
      <k-pagination
        :total="452"
        v-model="currentPage"
        :pageSize="50"
        variant="footer"
      />
    </ComponentCodeWrapper>

    <ComponentCodeWrapper :code="example3">
      <k-pagination
        :total="452"
        v-model="currentPage"
        :pageSize="50"
        variant="simple-footer"
      />
    </ComponentCodeWrapper>

    <ComponentCodeWrapper :code="example4">
      <k-pagination :total="20" v-model="currentPage" :pageSize="50" />
    </ComponentCodeWrapper>

    <ComponentCodeWrapper :code="example5">
      <k-pagination
        :total="70"
        v-model="currentPage"
        :pageSize="50"
        variant="footer"
      />
    </ComponentCodeWrapper>

    <ComponentCodeWrapper :code="example6">
      <k-pagination
        :total="20"
        v-model="currentPage"
        :pageSize="50"
        variant="simple-footer"
      />
    </ComponentCodeWrapper>

    <ComponentCodeWrapper :code="script" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const currentPage = ref(2)

const script = `<script setup lang="ts">
  import { ref } from 'vue'
  const currentPage = ref(2)
\<\/script\>`

const example1 = `<k-pagination :total="452" v-model="currentPage" :pageSize="50" />`
const example2 = `<k-pagination
  :total="452"
  v-model="currentPage"
  :pageSize="50"
  variant="footer"
/>`
const example3 = `<k-pagination
  :total="452"
  v-model="currentPage"
  :pageSize="50"
  variant="simple-footer"
/>`
const example4 = `<k-pagination :total="20" v-model="currentPage" :pageSize="50" />`
const example5 = `<k-pagination
  :total="70"
  v-model="currentPage"
  :pageSize="50"
  variant="footer"
/>`
const example6 = `<k-pagination
  :total="20"
  v-model="currentPage"
  :pageSize="50"
  variant="simple-footer"
/>`
const example7 = `<k-pagination
  :total="452"
  v-model="currentPage"
  :pageSize="50"
  :maxPageButtons="5"
  variant="footer"
/>`
</script>
