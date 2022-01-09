<script setup name="BaseButton">
const props = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  href: {
    type: String,
    default: null,
  },
  to: {
    type: [String, Object],
    default: null,
  },
});

const tag = computed(() => {
  if (props.disabled) {
    return 'div';
  }

  if (props.href) {
    return 'a';
  }

  if (props.to) {
    return 'inertia-link';
  }

  return 'button';
});
</script>

<template>
  <component
    :is="tag"
    :disabled="disabled || loading"
    class="px-3 flex items-center justify-center outline-none transition-all py-2 text-sm tracking-wider rounded-lg shadow-idle bg-ired-500 text-white | hover:bg-ired-500/70 hover:shadow-hover | focus:bg-ired-500/80"
  >
    <BaseIcon
      v-if="loading"
      class="w-5 h-5 text-white animate-spin"
      icon="loading"
    />
    <slot v-else />
  </component>
</template>
