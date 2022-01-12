<script setup name="BookCompletedModal">
import BaseModal from './BaseModal.vue';
import FormDateField from './FormDateField.vue';
import BaseButton from './BaseButton.vue';

const emit = defineEmits(['clickOutside', 'submit']);

const field = {
  name: 'completed_at',
  label: 'Select the completion date',
};

const completionDate = ref(new Date());
const maxDate = computed(() => new Date().toISOString().split('T')[0]);

const onClickOutside = () => {
  emit('clickOutside');
};

const onSubmit = () => {
  emit('submit');
};
</script>

<template>
  <BaseModal title="Set the book as completed" @clickOutside="onClickOutside">
    <div>
      <FormDateField
        focus
        v-model="completionDate"
        :max="maxDate"
        :inline="false"
        :field="field"
      />
      <BaseButton class="mt-5 ml-auto" @click="onSubmit">Submit</BaseButton>
    </div>
  </BaseModal>
</template>
