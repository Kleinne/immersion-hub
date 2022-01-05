<script setup name="Home">
import HomeLatestBooks from '../components/HomeLatestBooks.vue';
import HomeHighestRatedBooks from '../components/HomeHighestRatedBooks.vue';

defineProps({
  latestBooks: {
    type: Array,
    default: () => [],
  },
  highestRatedBooks: {
    type: Array,
    default: () => [],
  },
});
</script>

<template>
  <InertiaHead title="Home" />

  <div class="space-y-10">
    <HomeLatestBooks :books="latestBooks" />
    <HomeHighestRatedBooks :books="highestRatedBooks" />
  </div>
</template>
