<script setup name="NavBar"></script>

<template>
  <nav
    class="fixed inset-x-0 top-0 z-50 flex items-center w-full space-x-10 bg-white border-b-2 h-14 border-jet-500"
  >
    <InertiaLink :href="route('app.home')" class="mr-32 ml-80">
      immersion hub
    </InertiaLink>
    <InertiaLink
      class="font-bold hover:text-ired-500"
      :class="{ 'text-ired-500': $page.url.startsWith('/home') }"
      :href="route('app.home')"
    >
      Home
    </InertiaLink>

    <template v-if="$page.props.auth">
      <InertiaLink
        class="font-bold hover:text-ired-500"
        :class="{ 'text-ired-500': $page.url.startsWith('/books/new') }"
        :href="route('app.books.new')"
      >
        Add a Book
      </InertiaLink>
    </template>

    <template v-else>
      <InertiaLink
        class="font-bold hover:text-ired-500"
        :class="{ 'text-ired-500': $page.url.startsWith('/login') }"
        :href="route('app.login')"
      >
        Login
      </InertiaLink>
      <InertiaLink
        class="font-bold hover:text-ired-500"
        :class="{ 'text-ired-500': $page.url.startsWith('/register') }"
        :href="route('app.register')"
      >
        Register
      </InertiaLink>
    </template>
  </nav>
</template>
