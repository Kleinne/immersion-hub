<script setup name="TextLink">
defineProps({
  href: {
    type: String,
    default: null,
  },
});
</script>
<template>
  <InertiaLink
    :href="href"
    class="transition-all text-ired-500 hover:text-ired-500/50"
  >
    <slot />
  </InertiaLink>
</template>
