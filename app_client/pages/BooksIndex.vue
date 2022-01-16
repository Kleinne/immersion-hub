<script setup name="BooksIndex">
import BaseCard from '../components/BaseCard.vue';
import BookListItem from '../components/BookListItem.vue';
import TextLink from '../components/TextLink.vue';

defineProps({
  books: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <BaseCard title="All books in the database">
    <div class="flex flex-wrap gap-2">
      <BookListItem v-for="book in books.data" :key="book.id" :data="book" />
    </div>

    <div class="mt-5">
      <component
        class="p-2"
        :class="{ 'text-gray-400': !link.url }"
        v-for="link in books.links"
        :key="link.id"
        :is="link.url ? TextLink : 'span'"
        :href="link.url"
        v-html="link.label"
      >
      </component>
    </div>
  </BaseCard>
</template>
