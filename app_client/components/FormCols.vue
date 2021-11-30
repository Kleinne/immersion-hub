<script setup name="FormCols">
defineProps({
  single: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div class="flex" :class="{ 'space-x-6': !single }">
    <slot />
  </div>
</template>
