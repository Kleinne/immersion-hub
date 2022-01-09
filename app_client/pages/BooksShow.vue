<script setup name="BooksShow">
import { Inertia } from '@inertiajs/inertia';

import BaseButton from '../components/BaseButton.vue';
import BaseCard from '../components/BaseCard.vue';
import TextLink from '../components/TextLink.vue';

const props = defineProps({
  book: {
    type: Object,
    required: true,
  },
  bookStatus: {
    type: String,
    default: null,
  },
});

const onSubmit = (action) => {
  Inertia.post(`${props.book.id}/log`, {
    data: { action },
  });
};
</script>

<template>
  <div class="flex space-x-5">
    <InertiaHead :title="book.title" />
    <div class="w-[300px] shrink-0">
      <img
        v-if="book.cover"
        :src="book.cover"
        class="object-contain border border-black rounded"
        width="300"
        height="auto"
        alt="cover"
      />
      <BaseButton class="w-10/12 mx-auto mt-5">Add to a List</BaseButton>
    </div>

    <div class="w-full">
      <BaseCard>
        <template #header>
          <h2 class="text-2xl text-bold">{{ book.title }}</h2>
          <h3 v-if="book.title_en" class="text-lg text-gray-400">
            {{ book.title_en }}
          </h3>
        </template>

        <p
          v-if="book.description"
          class="flex-1 min-w-[300px] whitespace-pre-wrap"
        >
          {{ book.description }}
        </p>

        <p v-else>Click <TextLink>here</TextLink> to add the description.</p>
      </BaseCard>

      <BaseCard title="Data">
        <div class="flex flex-col">
          <p>Pages: {{ book.pages }}</p>
          <p v-if="book.isbn">ISBN: {{ book.isbn }}</p>
          <p v-if="book.published_at">Published at: {{ book.published_at }}</p>
        </div>
      </BaseCard>
    </div>
  </div>
</template>
