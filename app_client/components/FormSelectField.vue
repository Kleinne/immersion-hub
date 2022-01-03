<script setup name="FormSelectField">
import { useVModel, useVModelProps } from '../features/useVModel.js';

const emit = defineEmits(['update:modelValue']);
const props = defineProps({
  ...useVModelProps(),
  field: {
    type: Object,
    required: true,
  },
  errors: {
    type: String,
    default: null,
  },
});

const { inputValue } = useVModel(props, emit);
</script>
<template>
  <label class="flex" :for="field.name">
    <span class="text-sm min-w-[150px] pt-0.5">
      {{ field.label }}
      <span v-if="field.required" class="text-red-500">*</span>
    </span>

    <div class="w-full">
      <select
        v-model="inputValue"
        class="py-0.5 pr-10 text-sm border border-transparent rounded outline-none shadow-input-idle"
        :class="{
          'shadow-red-500': errors,
          'hover:border-violet-500 focus:border-violet-500 hover:shadow-input-hover focus:shadow-input-focus': !errors,
        }"
        :id="field.name"
        :name="field.name"
      >
        <option
          v-for="option in field.options"
          :value="option.value"
          :key="option.name"
        >
          {{ option.name }}
        </option>
      </select>
      <p v-if="errors" class="mt-1 text-xs text-red-500">{{ errors }}</p>
    </div>
  </label>
</template>
