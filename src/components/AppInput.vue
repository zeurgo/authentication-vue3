<template>
  <div class="mb-4">
    <label class="block text-sm font-semibold mb-1">{{ label }} <span v-if="required">*</span></label>
    <input
      :="$attrs"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="text-sm block w-full rounded-md border border-gray-light focus:border-primary focus:outline-none py-2 px-4"
    />
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
    modelValue: {
      type: [String, Number],
      default: ''
    }
  }
}
</script>
