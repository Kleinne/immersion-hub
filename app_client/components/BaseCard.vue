<script setup name="BaseCard">
defineProps({
  title: {
    type: String,
    default: '',
  },
  subtitle: {
    type: String,
    default: '',
  },
});
</script>

<template>
  <div class="p-10">
    <div class="mb-10 space-y-2">
      <h1 class="text-lg font-semibold" v-if="title">{{ title }}</h1>
      <h5 class="text-sm" v-if="subtitle">{{ subtitle }}</h5>
    </div>
    <slot />
  </div>
</template>
