<script setup name="BooksNewIndex">
import { useSubmitBookForm } from '../features/useSubmitBookForm.js';
import { removeTimezoneOffset } from '../features/useDateUtils.js';

import FormField from '../components/FormField.vue';
import BaseCard from '../components/BaseCard.vue';
import BaseForm from '../components/BaseForm.vue';

const props = defineProps({
  errors: {
    type: Object,
    default: () => ({}),
  },
  formatOptions: {
    type: Array,
    default: () => [],
  },
});

const { form, schema, title, subtitle } = useSubmitBookForm(props);

const onSubmit = () => {
  form
    .transform((data) => ({
      ...data,
      published: removeTimezoneOffset(
        new Date(
          form.published.year,
          form.published.month?.value - 1,
          form.published.day,
        ),
      ),
    }))
    .post('new', {
      remember: true,
    });
};
</script>

<template>
  <InertiaHead title="Submit a Book" />

  <BaseCard :title="title" :subtitle="subtitle">
    <BaseForm class="max-w-xl mx-auto space-y-4" @submit="onSubmit">
      <FormField focus v-model="form.title" :field="schema.title" />
      <FormField v-model="form.title_en" :field="schema.title_en" />
      <FormField v-model="form.title_romaji" :field="schema.title_romaji" />
      <FormField v-model="form.aliases" :field="schema.aliases" />
      <FormField v-model="form.author" :field="schema.author" />
      <FormField small v-model="form.volume" :field="schema.volume" />
      <FormField small v-model="form.pages" :field="schema.pages" />
      <FormField v-model="form.format" :field="schema.format" />
      <FormField v-model="form.isbn" :field="schema.isbn" />
      <FormField v-model="form.published" :field="schema.published" />
      <FormField v-model="form.publisher" :field="schema.publisher" />
      <FormField v-model="form.description" :field="schema.description" />
    </BaseForm>
  </BaseCard>
</template>
