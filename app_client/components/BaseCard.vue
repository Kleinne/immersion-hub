<script setup name="BaseCard">
defineProps({
  title: {
    type: String,
    default: '',
  },
});
</script>

<template>
  <div class="p-10 bg-white rounded-md shadow-idle">
    <h1 class="mb-10 text-lg font-semibold">{{ title }}</h1>
    <slot />
  </div>
</template>
