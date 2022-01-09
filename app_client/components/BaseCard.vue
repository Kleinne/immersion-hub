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
  <section class="flex flex-col p-5 rounded-md shadow-md">
    <div class="mb-10 space-y-2">
      <slot name="header">
        <h2 class="text-lg font-semibold" v-if="title">{{ title }}</h2>
        <h5 class="text-sm" v-if="subtitle">{{ subtitle }}</h5>
      </slot>
    </div>
    <slot />
  </section>
</template>
