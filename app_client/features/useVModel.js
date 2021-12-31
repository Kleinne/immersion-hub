const defaultTypes = [Number, String, Array, Object, Boolean];

export const useVModelProps = (type = defaultTypes, defaultValue = null) => ({
  modelValue: {
    type,
    default: defaultValue,
  },
});

export const useVModel = (props, emit) => {
  const inputValue = ref(props.modelValue);

  watch(
    () => inputValue.value,
    (value) => {
      emit('update:modelValue', value);
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

  return { inputValue };
};
