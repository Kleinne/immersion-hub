<script setup name="Home">
defineProps({
  books: {
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
      <li v-for="book in books" :key="book.id" v-text="book.title"></li>
    </ul>
    <slot />
  </div>
</template>
