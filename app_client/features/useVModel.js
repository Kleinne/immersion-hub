const defaultTypes = [Number, String, Array, Object, Boolean];

export const useVModelProps = (type = defaultTypes, defaultValue = null) => ({
  modelValue: {
    type,
    default: defaultValue,
  },
});
