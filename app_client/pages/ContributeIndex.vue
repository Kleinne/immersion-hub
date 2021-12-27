<script setup name="ContributeIndex">
import { useContributeForm } from '../features/useContributeForm.js';

import FormInput from '../components/FormInput.vue';
import BaseCard from '../components/BaseCard.vue';
import BaseForm from '../components/BaseForm.vue';
import FormCols from '../components/FormCols.vue';

// const props = defineProps({});
const { form, schema } = useContributeForm();
</script>

<template>
  <InertiaHead title="Submit a Book" />

  <BaseCard
    title="Add a New Book To the Database"
    subtitle="Please make sure to check if the book doesn't already exist - we don't want duplicates!"
  >
    <BaseForm class="space-y-5">
      <FormInput focus v-model="form.titleJp" v-bind="schema.titleJp" />
      <FormInput v-model="form.volumeTitleJp" v-bind="schema.volumeTitleJp" />
      <FormInput v-model="form.titleEn" v-bind="schema.titleEn" />
      <FormInput v-model="form.volumeTitleEn" v-bind="schema.volumeTitleEn" />
      <FormInput v-model="form.titleRo" v-bind="schema.titleRo" />
      <FormInput v-model="form.volumeTitleRo" v-bind="schema.volumeTitleRo" />
      <FormCols>
        <FormInput
          class="max-w-[150px]"
          v-model="form.volume"
          v-bind="schema.volume"
        />
        <FormInput
          class="max-w-[150px]"
          v-model="form.pages"
          v-bind="schema.pages"
        />
        <FormInput class="flex-1" v-model="form.date" v-bind="schema.date" />
      </FormCols>
      <FormInput v-model="form.author" v-bind="schema.author" />
      <FormInput v-model="form.authorEn" v-bind="schema.authorEn" />
      <FormInput v-model="form.illustrator" v-bind="schema.illustrator" />
      <FormInput v-model="form.illustratorEn" v-bind="schema.illustratorEn" />
      <FormInput v-model="form.publisher" v-bind="schema.publisher" />
    </BaseForm>
  </BaseCard>
</template>
