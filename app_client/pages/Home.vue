<script setup name="Home">
defineProps({
  users: {
    type: Array,
    default: () => [],
  },
});
</script>

<template>
  <InertiaHead title="Home" />

  <div>
    hello, {{ $page.props.auth.user.name }}

    <ul>
      <li v-for="user in users" :key="user.id" v-text="user.name"></li>
    </ul>
    <slot />
  </div>
</template>
