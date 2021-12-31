<script setup name="FormField">
import { useVModel, useVModelProps } from '../features/useVModel.js';

import FormTextField from './FormTextField.vue';
import FormBookDateField from './FormBookDateField.vue';

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
  FormBookDateField,
};

const component = computed(
  () => COMPONENTS[props.field.component] || FormTextField,
);

const { inputValue } = useVModel(props, emit);
</script>

<template>
  <component v-model="inputValue" :is="component" :field="field" />
</template>
