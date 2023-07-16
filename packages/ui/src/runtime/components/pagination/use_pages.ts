import { computed, ref } from 'vue'

const usePages = (props) => {
  const maxDisplayPages = computed(() => {
    if (props.maxPageButtons) {
      return Math.min(props.maxPageButtons, 7)
    }

    return 7
  })

  const totalPages = computed(() => Math.ceil(props.total / props.pageSize))
  const pages = computed(() => {
    const pages = {
      start: [] as number[],
      middle: [] as number[],
      end: [] as number[],
    }

    if (totalPages.value === 0) {
      return pages
    }

    if (maxDisplayPages.value < 3) {
      pages.start.push(props.modelValue)
      return pages
    }

    if (totalPages.value <= maxDisplayPages.value) {
      for (let i = 1; i <= totalPages.value; i++) {
        pages.start.push(i)
      }
      return pages
    }

    const maxSectionPages = Math.floor((maxDisplayPages.value - 1) / 2)
    if (
      props.modelValue > maxSectionPages &&
      props.modelValue <= totalPages.value - maxSectionPages
    ) {
      pages.start.push(1)

      // (minus 4 because there are 4 taken slots)
      // 1 ... MIDDLE ... N
      const middleSectionPages = maxDisplayPages.value - 4
      const from = props.modelValue - Math.floor(middleSectionPages / 2)
      const to = from + middleSectionPages - 1
      for (let i = from; i <= to; i++) {
        pages.middle.push(i)
      }
      pages.end.push(totalPages.value)

      return pages
    }

    let i
    for (i = 1; i <= maxSectionPages; i++) {
      pages.start.push(i)
      pages.end.push(totalPages.value - maxSectionPages + i)
    }

    if (maxDisplayPages.value % 2 === 0) {
      pages.start.push(i)
    }

    return pages
  })

  const hasNext = computed(() => props.modelValue < totalPages.value)
  const hasPrevious = computed(() => props.modelValue > 1)

  return {
    totalPages,
    pages,
    hasNext,
    hasPrevious,
  }
}

export default usePages
