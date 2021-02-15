<template>
  <button
    :="$attrs"
    class="rounded-lg py-3 focus:outline-none hover:opacity-90 transition duration-500"
    :class="{
      'animate-pulse': loading,
      'w-full': full,
      'bg-primary text-white px-8': !text,
      'text-gray px-6': text
    }"
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
    },
    text: {
      type: Boolean,
      default: false
    }
  }
}
</script>
