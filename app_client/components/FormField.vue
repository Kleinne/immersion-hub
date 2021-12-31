<script setup name="FormField">
import { useVModelProps } from '../features/useVModel.js';

import FormTextField from './FormTextField.vue';

const emit = defineEmits(['update:modelValue']);

const props = defineProps({
  ...useVModelProps(),
  field: {
    type: Object,
    required: true,
  },
});

const COMPONENTS = {
  FormTextField,
};

const component = computed(
  () => COMPONENTS[props.field.component] || FormTextField,
);

const inputValue = ref(props.modelValue);

watch(
  () => inputValue.value,
  (value) => {
    emit.updateModelValue(value);
  },
  { deep: true },
);

watch(
  () => props.modelValue,
  (value) => {
    inputValue.value = value;
  },
  { deep: true },
);
</script>

<template>
  <component v-model="inputValue" :is="component" :field="field" />
</template>
