<script setup name="Footer">
const links = [
  {
    title: 'Home',
    url: '/',
  },
  //   {
  //     title: 'About',
  //     url: '/about',
  //   },
  //   {
  //     title: 'Contact',
  //     url: '/contact',
  //   },
  //   {
  //     title: 'FAQ',
  //     url: '/faq',
  //   },
];
</script>

<template>
  <footer class="flex items-center justify-center w-full mt-auto">
    <div class="flex p-5 text-sm text-gray-500 max-w-max">
      <InertiaLink
        class="px-3"
        v-for="link in links"
        :key="link.title"
        :href="link.url"
        v-text="link.title"
      />
    </div>
  </footer>
</template>
