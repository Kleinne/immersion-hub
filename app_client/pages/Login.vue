<script lang="ts" setup name="Login">
import BaseCard from '../components/BaseCard.vue';
import BaseForm from '../components/BaseForm.vue';
import FormField from '../components/FormField.vue';

import { useLoginForm } from '../features/useLoginForm.js';

const props = defineProps({
  errors: {
    type: Object,
    default: () => ({}),
  },
});

const { form, schema } = useLoginForm(props);

const onSubmit = () => {
  form.post('/login');
};
</script>

<template>
  <div>
    <InertiaHead title="Login" />

    <BaseCard
      title="Login"
      class="flex items-center justify-center max-w-3xl mx-auto mt-20"
    >
      <BaseForm class="space-y-4 w-96" @submit="onSubmit">
        <FormField v-model="form.email" :field="schema.email" :inline="false" />
        <FormField
          v-model="form.password"
          :field="schema.password"
          :inline="false"
        />
      </BaseForm>
    </BaseCard>
  </div>
</template>
