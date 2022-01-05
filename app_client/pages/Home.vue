<script setup name="Home">
import HomeLatestBooks from '../components/HomeLatestBooks.vue';

defineProps({
  books: {
    type: Array,
    default: () => [],
  },
});
</script>

<template>
  <InertiaHead title="Home" />

  <div>
    <HomeLatestBooks :books="books" />
  </div>
</template>
