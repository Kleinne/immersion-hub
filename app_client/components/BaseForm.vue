<script setup name="BaseForm">
import BaseButton from './BaseButton.vue';

const emit = defineEmits(['submit']);
defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <form @submit.prevent="emit('submit')" class="max-w-xl">
    <slot />

    <div class="flex justify-end">
      <BaseButton class="mt-5 min-w-[100px]" :loading="loading">
        Submit
      </BaseButton>
    </div>
  </form>
</template>
