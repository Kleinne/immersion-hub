<script lang="ts" setup name="BaseButton">
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
  type: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary'].includes(value),
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
    class="flex items-center justify-center px-3 py-2 text-sm tracking-wider text-white transition-all rounded-lg outline-none whitespace-nowrap shadow-idle hover:shadow-hover"
    :class="{
      'bg-ired-500 hover:bg-ired-500/70 focus:bg-ired-500/80':
        type === 'primary',
      'bg-primary-500 hover:bg-primary-500/70 focus:bg-primary-500/80':
        type === 'secondary',
    }"
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
