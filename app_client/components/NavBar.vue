<script setup name="NavBar">
import NavBarLinkGroup from './NavBarLinkGroup.vue';

defineProps({
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
];

const authRoutes = [
  {
    name: 'Add a Book',
    url: '/books/new',
    route: 'auth.books.new',
  },
];
</script>

<template>
  <nav
    class="fixed inset-x-0 top-0 z-50 w-full h-12 bg-white border-b-2 border-jet-500"
  >
    <div
      class="flex items-center justify-between h-full max-w-4xl mx-auto desktop:max-w-7xl"
    >
      <NavBarLinkGroup :items="publicLinks" />

      <NavBarLinkGroup v-if="!$page.props.auth" :items="loginLinks" />
      <NavBarLinkGroup v-else :items="authRoutes">
        <InertiaLink
          class="font-bold hover:text-ired-500"
          :href="`/users/${user.username}`"
          :class="{
            'text-ired-500': $page.url.startsWith(`/users/${user.username}`),
          }"
        >
          Profile
        </InertiaLink>
      </NavBarLinkGroup>
    </div>
  </nav>
</template>
