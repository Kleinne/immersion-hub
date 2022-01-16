<script setup name="NavBar">
import NavBarLinkGroup from './NavBarLinkGroup.vue';

const props = defineProps({
  user: {
    type: Object,
    default: null,
  },
});

const loginLinks = [
  {
    name: 'Login',
    url: '/login',
    route: 'guest.login',
  },
  {
    name: 'Register',
    url: '/register',
    route: 'guest.register',
  },
];

const publicLinks = [
  {
    name: 'immersion hub',
    route: 'app.home',
  },
  {
    name: 'Home',
    url: '/home',
    route: 'app.home',
  },
  {
    name: 'Books',
    url: '/books',
    route: 'app.books',
  },
];

const authRoutes = computed(() => [
  {
    name: 'Add a Book',
    url: '/books/new',
    route: 'auth.books.new',
  },
  {
    name: 'Profile',
    url: `/users/${props.user?.username}`,
    href: `/users/${props.user?.username}`,
  },
  {
    name: 'Logout',
    url: '/logout',
    route: 'auth.logout',
    method: 'post',
    as: 'button',
  },
]);
</script>

<template>
  <nav
    class="fixed inset-x-0 top-0 z-30 w-full h-12 bg-white border-b-2 border-jet-500"
  >
    <div
      class="flex items-center justify-between h-full max-w-4xl mx-auto desktop:max-w-7xl"
    >
      <NavBarLinkGroup :items="publicLinks" />

      <NavBarLinkGroup v-if="!$page.props.auth" :items="loginLinks" />
      <NavBarLinkGroup v-else :items="authRoutes" />
    </div>
  </nav>
</template>
