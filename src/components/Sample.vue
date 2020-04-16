<template>
  <button @click="increment">
    TEst
  </button>
</template>

<script>
import { reactive, computed } from '@vue/composition-api'

export default {
  setup(props, context) {
    console.log(props);
    console.log(context);

    const state = reactive({
      count: 0,
      double: computed(() => state.count * 2)
    })

    function increment() {
      state.count++
    }

    return {
      state,
      increment
    }
  }
}
</script>