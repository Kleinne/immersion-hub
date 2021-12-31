<script setup name="FormBookDateField">
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
  <div class="flex space-x-2">
    <label class="flex items-center justify-start" :for="field.name">
      <span class="text-sm min-w-[150px]">
        {{ field.label }}
      </span>

      <span class="mr-2 text-sm">Year:</span>
      <input
        v-model="inputValue.year"
        class="px-2 w-20 py-0.5 text-sm border border-transparent rounded outline-none shadow-input-idle hover:border-violet-500 focus:border-violet-500 hover:shadow-input-hover focus:shadow-input-focus"
        name="year"
        :id="field.name"
        type="number"
      />
    </label>

    <label class="flex items-center justify-start" for="month">
      <span class="mr-2 text-sm">Month:</span>
      <select
        v-model="inputValue.month"
        class="w-[100px] py-0.5 text-sm border border-transparent rounded outline-none shadow-input-idle hover:border-violet-500 focus:border-violet-500 hover:shadow-input-hover focus:shadow-input-focus"
        id="month"
        name="month"
      >
        <option v-for="month in field.months" :value="month" :key="month.name">
          {{ month.name }}
        </option>
      </select>
    </label>

    <label class="flex items-center justify-start" for="day">
      <span class="mr-2 text-sm">Day:</span>
      <input
        v-model="inputValue.day"
        class="px-2 py-0.5 w-[102px] text-sm border border-transparent rounded outline-none shadow-input-idle hover:border-violet-500 focus:border-violet-500 hover:shadow-input-hover focus:shadow-input-focus"
        name="day"
        id="day"
        type="number"
      />
    </label>
  </div>
</template>
