import { computed } from 'vue'

const useFromTo = (props) => {
  const from = computed(() => {
    if (props.total === 0) {
      return 0
    }

    return (props.modelValue - 1) * props.pageSize + 1
  })

  const to = computed(() => {
    if (props.total === 0) {
      return 0
    }

    const to = props.modelValue * props.pageSize

    return to > props.total ? props.total : to
  })

  return {
    from,
    to,
  }
}

export default useFromTo
