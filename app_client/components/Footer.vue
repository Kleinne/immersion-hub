<script setup name="Footer">
const links = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'About',
    url: '/about',
  },
  {
    title: 'Contact',
    url: '/contact',
  },
  {
    title: 'FAQ',
    url: '/faq',
  },
];
</script>

<template>
  <footer>
    <div class="flex p-5 mx-auto text-sm text-gray-500 max-w-max">
      <div class="space-x-6">
        <InertiaLink
          v-for="link in links"
          :key="link.title"
          :href="link.url"
          v-text="link.title"
        />
      </div>
    </div>
  </footer>
</template>
