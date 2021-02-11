<template>
  <button
    :="$attrs"
    class="w-full rounded-lg text-white py-3 bg-primary focus:outline-none hover:opacity-90 transition duration-500"
  >
    <slot />
  </button>
</template>
