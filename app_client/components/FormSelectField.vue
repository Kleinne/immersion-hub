<script setup name="FormSelectField">
import { useVModel, useVModelProps } from '../features/useVModel.js';

const emit = defineEmits(['update:modelValue']);
const props = defineProps({
  ...useVModelProps(),
  field: {
    type: Object,
    required: true,
  },
});

const { inputValue } = useVModel(props, emit);
</script>
<template>
  <label class="flex items-center justify-start" :for="field.name">
    <span class="text-sm min-w-[150px]">
      {{ field.label }}
    </span>

    <select
      v-model="inputValue"
      class="w-1/4 py-0.5 text-sm border border-transparent rounded outline-none shadow-input-idle hover:border-violet-500 focus:border-violet-500 hover:shadow-input-hover focus:shadow-input-focus"
      id="month"
      name="month"
    >
      <option
        v-for="option in field.options"
        :value="option"
        :key="option.name"
      >
        {{ option.name }}
      </option>
    </select>
  </label>
</template>
