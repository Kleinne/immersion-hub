<script setup name="NavBar">
/* can't access route() in script setup */
const links = [
  {
    route: 'app.home',
    name: 'Home',
  },
  {
    route: 'app.home',
    name: 'Reviews',
  },
  {
    route: 'app.home',
    name: 'Recommendations',
  },
  {
    route: 'app.home',
    name: 'Community',
  },
  {
    route: 'contribute.index',
    name: 'Contribute',
  },
];
</script>

<template>
  <nav
    class="fixed inset-x-0 top-0 flex items-center w-full h-12 space-x-10 bg-soft-500"
  >
    <InertiaLink :href="route('app.home')" class="ml-80">
      immersion hub
    </InertiaLink>
    <InertiaLink
      v-for="link in links"
      :key="link.name"
      :href="route(link.route)"
    >
      {{ link.name }}
    </InertiaLink>
  </nav>
</template>
