<template>
  <div class="mb-4">
    <label class="block text-sm font-semibold mb-1">{{ label }} <span v-if="required">*</span></label>
    <input
      :="$attrs"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="transition ease-in-out text-sm block w-full rounded-md border border-gray-light focus:outline-none py-2 px-4"
      :class="{'border-danger': !!error, 'focus:border-primary hover:border-primary': !error }"
    />
    <transition name="fade">
      <div
        v-show="!!error"
        class="transition ease-in-out h-5 flex items-center text-danger text-xs font-medium pl-4"
      >
        {{ error }}
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean,
      default: false
    },
    error: {
      type: String,
      default: ''
    },
    modelValue: {
      type: [String, Number],
      default: ''
    }
  }
}
</script>

<style lang="postcss">

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
