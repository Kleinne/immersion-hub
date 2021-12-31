<script setup name="BooksNewIndex">
import { useSubmitBookForm } from '../features/useSubmitBookForm.js';

import FormField from '../components/FormField.vue';
import BaseCard from '../components/BaseCard.vue';
import BaseForm from '../components/BaseForm.vue';

const { form, schema, title, subtitle } = useSubmitBookForm();
</script>

<template>
  <InertiaHead title="Submit a Book" />

  <BaseCard :title="title" :subtitle="subtitle">
    <BaseForm class="space-y-4">
      <FormField focus v-model="form.title" :field="schema.title" />
      <FormField v-model="form.title_en" :field="schema.title_en" />
      <FormField v-model="form.title_romaji" :field="schema.title_romaji" />
      <FormField v-model="form.aliases" :field="schema.aliases" />
      <FormField small v-model="form.volume" :field="schema.volume" />
      <FormField small v-model="form.pages" :field="schema.pages" />
      <FormField v-model="form.published" :field="schema.published" />
      <FormField v-model="form.author" :field="schema.author" />
      <FormField v-model="form.publisher" :field="schema.publisher" />
    </BaseForm>
  </BaseCard>
</template>
