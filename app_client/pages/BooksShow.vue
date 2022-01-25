<script lang="ts" setup name="BooksShow">
import BaseCard from '../components/BaseCard.vue';
import TextLink from '../components/TextLink.vue';
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
</script>

<template>
  <BooksShowLayout>
    <div class="w-full">
      <BaseCard>
        <template #header>
          <h2 class="text-2xl text-bold">{{ book.title }}</h2>
          <!-- <h3 v-if="book.title_en" class="text-lg text-gray-400">
            {{ book.title_en }}
          </h3> -->
        </template>

        <p
          v-if="book.description"
          class="flex-1 min-w-[300px] whitespace-pre-wrap"
        >
          {{ book.description }}
        </p>

        <!-- <p v-else>Click <TextLink>here</TextLink> to add the description.</p> -->
        <p v-else>No description added.</p>
      </BaseCard>

      <BaseCard title="Data">
        <div class="flex flex-col">
          <p>Pages: {{ book.pages }}</p>
          <p v-if="book.isbn">ISBN: {{ book.isbn }}</p>
          <p v-if="book.author">Author: {{ book.author }}</p>
          <p v-if="book.published_at">Published at: {{ book.published_at }}</p>
        </div>
      </BaseCard>

      <BaseCard v-if="comments?.length" title="Latest comments and impressions">
        <BookComment
          class="my-2"
          v-for="comment in comments"
          :key="comment.id"
          :field="comment"
        />
        <TextLink :href="`/books/${book.id}/comments`">
          See all comments.
        </TextLink>
      </BaseCard>
    </div>
  </BooksShowLayout>
</template>
