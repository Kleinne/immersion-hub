<script setup name="NavBar">
defineProps({
  links: {
    type: Array,
    default: null,
  },
});
</script>

<template>
  <div class="fixed inset-x-0 top-0 flex w-full h-12 bg-gray-100"></div>
</template>
