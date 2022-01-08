<script setup name="BooksShow">
import { Inertia } from '@inertiajs/inertia';

import BaseButton from '../components/BaseButton.vue';

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

const actions = computed(() => [
  {
    label: 'Mark as Reading',
    action: 'reading',
    selected: props.bookStatus === 'reading',
  },
  {
    label: 'Mark as Completed',
    action: 'completed',
    selected: props.bookStatus === 'completed',
  },
  {
    label: 'Mark as Planned',
    action: 'planned',
    selected: props.bookStatus === 'planned',
  },
]);
</script>

<template>
  <div>
    <InertiaHead :title="book.title" />

    <h1 class="text-2xl text-bold">{{ book.title }}</h1>
    <h3 v-if="book.title_en" class="text-lg text-gray-400">
      {{ book.title_en }}
    </h3>

    <div class="flex items-start mt-10 space-x-10">
      <div>
        <img
          v-if="book.cover"
          :src="book.cover"
          class="object-contain border border-black rounded"
          width="250"
          height="auto"
          alt="cover"
        />

        <div v-if="$page.props.auth" class="mt-5 space-y-2">
          <BaseButton
            class="w-10/12 mx-auto"
            v-for="{ action, label, selected } in actions"
            :class="{ 'bg-primary-500': selected }"
            :key="action"
            @click="onSubmit(action)"
          >
            {{ label }}
          </BaseButton>
        </div>

        <hr class="max-w-sm my-5" />
        <div class="flex flex-col">
          <p>Pages: {{ book.pages }}</p>
          <p v-if="book.series">Series: {{ book.series }}</p>
          <p v-if="book.author">Author: {{ book.author }}</p>
          <p v-if="book.isbn">ISBN: {{ book.isbn }}</p>
          <p v-if="book.publisher">Publisher: {{ book.publisher }}</p>
          <p v-if="book.published_at">Published at: {{ book.published_at }}</p>
        </div>
      </div>

      <p v-if="book.description" class="max-w-md whitespace-pre-wrap">
        {{ book.description }}
      </p>
    </div>
  </div>
</template>
