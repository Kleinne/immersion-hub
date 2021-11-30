<script setup name="BaseCard">
defineProps({
  title: {
    type: String,
    default: '',
  },
});
</script>

<template>
  <div class="p-10">
    <h1 class="mb-10 text-lg font-semibold">{{ title }}</h1>
    <slot />
  </div>
</template>
