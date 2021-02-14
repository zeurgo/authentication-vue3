<template>
  <button
    :="$attrs"
    class="rounded-lg text-white py-3 px-8 bg-primary focus:outline-none hover:opacity-90 transition duration-500"
    :class="{ 'animate-pulse': loading, 'w-full': full }"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    full: {
      type: Boolean,
      default: false
    }
  }
}
</script>
