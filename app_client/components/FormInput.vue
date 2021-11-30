<script setup name="FormInput">
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  rules: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    default: null,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: 'text',
  },
  full: {
    type: Boolean,
    default: false,
  },
  focus: {
    type: Boolean,
    default: false,
  },
});

const inputRef = ref(null);

if (props.focus) {
  nextTick(() => {
    inputRef.value.focus();
  });
}
</script>

<template>
  <div :class="{ 'w-full': full }">
    <label class="flex flex-col space-y-1">
      <span class="ml-1 text-sm" :for="name">
        {{ label }}
      </span>
      <input
        class="w-full px-2 py-1 border border-transparent rounded outline-none shadow-input-idle hover:border-violet-500 focus:border-violet-500 hover:shadow-input-hover focus:shadow-input-focus"
        ref="inputRef"
        v-bind="$attrs"
        :id="name"
        :type="type"
        :name="name"
        :disabled="disabled"
        :placeholder="placeholder"
      />
    </label>
  </div>
</template>
