<script setup name="HomeHighestRatedBooks">
import BaseCard from './BaseCard.vue';
import BookListItem from './BookListItem.vue';

defineProps({
  books: {
    type: Array,
    default: () => [],
  },
});
</script>

<template>
  <BaseCard title="Highest rated books">
    <div class="flex flex-wrap gap-2">
      <BookListItem v-for="book in books" :key="book.id" :data="book" />
    </div>
  </BaseCard>
</template>
