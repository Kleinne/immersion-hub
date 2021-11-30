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
    class="px-3 outline-none py-2 text-sm tracking-wider rounded-lg shadow-idle bg-ired-500 text-white | hover:bg-ired-500/70 hover:shadow-hover | focus:shadow-idle focus:bg-ired-500"
  >
    <div v-if="loading"></div>
    <slot v-else />
  </component>
</template>
