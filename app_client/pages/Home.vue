<script setup name="Home">
defineProps({
  users: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<template>
  <InertiaHead title="Home" />

  <div>
    hello, {{ $page.props.auth.user.name }}

    <ul>
      <li v-for="user in users.data" :key="user.id" v-text="user.name"></li>
    </ul>
    <slot />
  </div>
</template>
