<script setup name="BaseForm">
import BaseButton from './BaseButton.vue';

defineProps({
  action: {
    type: String,
    default: 'POST',
    validator: (value) => ['POST', 'GET'].includes(value),
  },
});
</script>

<template>
  <form :action="action" class="max-w-lg">
    <slot />

    <div class="flex justify-end">
      <BaseButton class="mt-5 min-w-[100px]">Submit</BaseButton>
    </div>
  </form>
</template>
