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

const actions = computed(() => [
  {
    name: 'Completed',
    action: 'completed',
    icon: 'book-plus-multiple',
    type: props.bookStatus === 'completed' ? 'secondary' : 'primary',
  },
  {
    name: 'Reading',
    action: 'reading',
    icon: 'book-open-page',
    type: props.bookStatus === 'reading' ? 'secondary' : 'primary',
  },
  {
    name: 'Plan To Read',
    action: 'planned',
    icon: 'bookshelf',
    type: props.bookStatus === 'planned' ? 'secondary' : 'primary',
  },
]);
</script>

<template>
  <div class="flex space-x-5">
    <InertiaHead :title="book.title" />
    <div class="w-[250px] desktop:w-[300px] shrink-0">
      <img
        v-if="book.cover"
        :src="book.cover"
        class="object-contain border border-black rounded"
        style="width: 100%; height: auto"
        alt="cover"
      />

      <div v-if="$page.props.auth" class="flex flex-col mt-5 space-y-2">
        <BaseButton
          class="w-10/12 mx-auto"
          v-for="action in actions"
          :key="action.action"
          :icon="action.icon"
          :type="action.type"
          @click="onSubmit(action.action)"
        >
          {{ action.name }}
        </BaseButton>
      </div>
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
