<script lang="ts" setup name="BookComment">
defineProps({
  field: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <div class="flex flex-col p-2 space-y-2 rounded bg-primary-500/20">
    <p>
      <InertiaLink
        :href="`/users/${field.user.username}`"
        class="font-bold max-w-max hover:underline"
      >
        {{ field.user.username }} </InertiaLink
      >, {{ field.updated_at }}
    </p>
    <p>
      {{ field.body }}
    </p>
  </div>
</template>
