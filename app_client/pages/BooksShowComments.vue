<script setup name="BooksShowComments">
import BaseCard from '../components/BaseCard.vue';
import BookComment from '../components/BookComment.vue';
import BooksShowLayout from '../layouts/BooksShowLayout.vue';

const props = defineProps({
  book: {
    type: Object,
    required: true,
  },
  bookStatus: {
    type: String,
    default: null,
  },
  comments: {
    type: Array,
    default: null,
  },
});

provide('booksShowProps', props);

const title = computed(
  () => `Comments and impressions for ${props.book.title}`,
);
</script>

<template>
  <BooksShowLayout v-bind="props">
    <div class="w-full">
      <BaseCard :title="title">
        <template v-if="comments?.length">
          <BookComment
            class="my-2"
            v-for="comment in comments"
            :key="comment.id"
            :field="comment"
          />
        </template>
        <p v-else>No one has left a comment for this book yet.</p>
      </BaseCard>
    </div>
  </BooksShowLayout>
</template>
