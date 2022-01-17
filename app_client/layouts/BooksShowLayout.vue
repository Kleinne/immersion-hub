<script setup name="BooksShowLayout">
import { Inertia } from '@inertiajs/inertia';

import BookCompletedModal from '../components/BookCompletedModal.vue';

const props = inject('booksShowProps');

const showModal = ref(false);
const form = ref(null);

const onSubmit = (action) => {
  showModal.value = false;
  Inertia.post(
    `${props.book.id}/log`,
    { data: { action, ...form.value } },
    { preserveScroll: true },
  );
};

const onClickCompleted = () => {
  showModal.value = true;
};

const onClickOutside = () => {
  showModal.value = false;
};

const onSubmitCompleted = (data) => {
  form.value = data;
  onSubmit('completed');
};

const actions = computed(() => [
  {
    name: 'Completed',
    icon: 'book-plus-multiple',
    type: props.bookStatus === 'completed' ? 'secondary' : 'primary',
    onClick: () => onClickCompleted(),
  },
  {
    name: 'Reading',
    icon: 'book-open-page',
    type: props.bookStatus === 'reading' ? 'secondary' : 'primary',
    onClick: () => onSubmit('reading'),
  },
  {
    name: 'Plan To Read',
    icon: 'bookshelf',
    type: props.bookStatus === 'planned' ? 'secondary' : 'primary',
    onClick: () => onSubmit('planned'),
  },
]);
</script>

<template>
  <div class="flex space-x-5">
    <InertiaHead :title="props.book.title" />

    <BookCompletedModal
      v-if="showModal"
      @clickOutside="onClickOutside"
      @submit="onSubmitCompleted"
    />

    <div class="w-[250px] desktop:w-[300px] shrink-0">
      <img
        v-if="props.book.cover"
        :src="props.book.cover"
        class="object-contain border border-black rounded"
        style="width: 100%; height: auto"
        alt="volume-cover"
      />

      <div v-if="$page.props.auth" class="flex flex-col mt-5 space-y-2">
        <BaseButton
          class="w-10/12 mx-auto"
          v-for="action in actions"
          :key="action.name"
          :icon="action.icon"
          :type="action.type"
          @click="action.onClick"
        >
          {{ action.name }}
        </BaseButton>
      </div>
    </div>

    <slot />
  </div>
</template>
