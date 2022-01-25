<script lang="ts" setup name="BookCompletedModal">
import BaseModal from './BaseModal.vue';
import FormDateField from './FormDateField.vue';
import FormTextareaField from './FormTextareaField.vue';

const emit = defineEmits(['clickOutside', 'submit']);

const form = reactive({
  completed_at: '',
  comment: '',
});

const schema = computed(() => ({
  completed_at: {
    name: 'completed_at',
    label: 'Select the completion date',
    value: form.completed_at,
    max: new Date().toISOString().split('T')[0],
  },
  comment: {
    name: 'comment',
    label: 'Leave a comment...',
    value: form.comment,
    maxlength: 512,
    rows: 4,
  },
}));

const onClickOutside = () => {
  emit('clickOutside');
};

const onSubmit = () => {
  emit('submit', form);
};
</script>

<template>
  <BaseModal title="Set the book as completed" @clickOutside="onClickOutside">
    <div class="space-y-4 w-96">
      <FormDateField
        focus
        v-model="form.completed_at"
        :inline="false"
        :field="schema.completed_at"
      />
      <FormTextareaField
        v-model="form.comment"
        :field="schema.comment"
        :inline="false"
      />
      <BaseButton class="mt-5 ml-auto" @click="onSubmit">Submit</BaseButton>
    </div>
  </BaseModal>
</template>
