<template>
  <button
    :="$attrs"
    class="w-full rounded-lg text-white py-3 bg-primary focus:outline-none hover:opacity-90 transition duration-500"
    :class="{ 'animate-pulse': loading }"
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
    }
  }
}
</script>
