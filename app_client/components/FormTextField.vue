<script setup name="FormTextField">
const props = defineProps({
  field: {
    type: Object,
    required: true,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  focus: {
    type: Boolean,
    default: false,
  },
  inline: {
    type: Boolean,
    default: true,
  },
  small: {
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
  <div>
    <label
      class="flex justify-start"
      :class="{ 'items-center': inline, 'flex-col space-y-1': !inline }"
    >
      <span class="text-sm min-w-[150px]" :for="field.name">
        {{ field.label }}
      </span>
      <input
        class="w-full px-2 py-0.5 text-sm border border-transparent rounded outline-none shadow-input-idle hover:border-violet-500 focus:border-violet-500 hover:shadow-input-hover focus:shadow-input-focus"
        :class="{ 'max-w-[100px]': small }"
        ref="inputRef"
        v-bind="$attrs"
        :id="field.name"
        :type="field.type"
        :name="field.name"
        :placeholder="field.placeholder"
        :disabled="disabled"
      />
    </label>
  </div>
</template>
