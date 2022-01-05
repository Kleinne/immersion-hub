<script setup name="BooksShow">
const props = defineProps({
  book: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <InertiaHead :title="book.title" />
  <div>
    <h1 class="text-2xl text-bold">{{ book.title }}</h1>
    <h3 v-if="book.title_en" class="text-lg text-gray-400">
      {{ book.title_en }}
    </h3>
    <div class="flex items-start mt-10">
      <img
        :src="book.cover"
        class="object-contain"
        width="300"
        height="auto"
        alt="cover"
      />

      <p v-if="book.description" class="max-w-sm ml-5 whitespace-pre-wrap">
        {{ book.description }}
      </p>
    </div>
    <hr class="max-w-lg my-5" />

    <div class="flex flex-col">
      <p>Pages: {{ book.pages }}</p>
      <p v-if="book.series">Series: {{ book.series }}</p>
      <p v-if="book.author">Author: {{ book.author }}</p>
      <p v-if="book.isbn">ISBN: {{ book.isbn }}</p>
      <p v-if="book.publisher">Publisher: {{ book.publisher }}</p>
      <p v-if="book.published_at">Published at: {{ book.published_at }}</p>
    </div>
  </div>
</template>
