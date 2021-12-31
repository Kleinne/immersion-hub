<script setup name="BaseForm">
import BaseButton from './BaseButton.vue';

const emit = defineEmits(['click']);
defineProps({
  action: {
    type: String,
    default: 'POST',
    validator: (value) => ['POST', 'GET'].includes(value),
  },
  loading: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <form :action="action" class="max-w-xl">
    <slot />

    <div class="flex justify-end">
      <BaseButton
        class="mt-5 min-w-[100px]"
        :loading="loading"
        @click.prevent="emit('click')"
      >
        Submit
      </BaseButton>
    </div>
  </form>
</template>
