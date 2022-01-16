<script setup name="BooksIndex">
import BaseCard from '../components/BaseCard.vue';
import BookListItem from '../components/BookListItem.vue';

defineProps({
  books: {
    type: Array,
    required: true,
  },
});
</script>
<template>
  <BaseCard title="All books in the database">
    <div class="flex flex-wrap gap-2">
      <BookListItem v-for="book in books" :key="book.id" :data="book" />
    </div>
  </BaseCard>
</template>
