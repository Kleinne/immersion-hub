<script setup name="UsersShow">
const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div>
    <InertiaHead :title="`${user.username}'s Profile`" />
    {{ user.username }}
  </div>
</template>
