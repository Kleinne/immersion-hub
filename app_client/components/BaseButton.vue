<script setup name="BaseButton">
import BaseIcon from './BaseIcon.vue';

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
  icon: {
    type: String,
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
    <div v-else class="flex items-center justify-center">
      <BaseIcon v-if="icon" :icon="icon" class="w-5 h-5 mr-2" />
      <slot />
    </div>
  </component>
</template>
