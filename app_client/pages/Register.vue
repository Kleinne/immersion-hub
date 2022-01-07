<script setup name="Register">
import BaseCard from '../components/BaseCard.vue';
import BaseForm from '../components/BaseForm.vue';
import FormField from '../components/FormField.vue';

import { useRegisterForm } from '../features/useRegisterForm.js';

const props = defineProps({
  errors: {
    type: Object,
    default: () => ({}),
  },
});

const { form, schema } = useRegisterForm(props);

const onSubmit = () => {
  form.post('/register');
};
</script>

<template>
  <div>
    <InertiaHead title="Register" />

    <BaseCard
      title="Register"
      class="flex items-center justify-center mx-auto mt-20"
    >
      <BaseForm class="space-y-4 w-96" @submit="onSubmit">
        <FormField
          v-model="form.username"
          :field="schema.username"
          :inline="false"
        />
        <FormField v-model="form.email" :field="schema.email" :inline="false" />
        <FormField
          v-model="form.password"
          :field="schema.password"
          :inline="false"
        />
        <FormField
          v-model="form.password_confirmation"
          :field="schema.password_confirmation"
          :inline="false"
        />
      </BaseForm>
    </BaseCard>
  </div>
</template>
