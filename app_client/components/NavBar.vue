<script setup name="NavBar">
const links = [
  {
    link: 'app.home',
    name: 'Home',
  },
  {
    link: 'app.home',
    name: 'Reviews',
  },
  {
    link: 'app.home',
    name: 'Recommendations',
  },
  {
    link: 'app.home',
    name: 'Community',
  },
  {
    link: 'contribute.index',
    name: 'Contribute',
  },
];
</script>

<template>
  <nav
    class="fixed inset-x-0 top-0 flex items-center w-full space-x-10 bg-white border-b-2 h-14 border-jet-500"
  >
    <InertiaLink :href="route('app.home')" class="mr-32 ml-80">
      immersion hub
    </InertiaLink>
    <InertiaLink
      v-for="{ name, link } in links"
      class="font-bold hover:text-ired-500"
      :key="name"
      :href="route(link)"
    >
      {{ name }}
    </InertiaLink>
  </nav>
</template>
