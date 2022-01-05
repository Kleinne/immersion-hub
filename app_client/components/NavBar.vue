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
    <InertiaLink
      class="font-bold hover:text-ired-500"
      :class="{ 'text-ired-500': $page.url.startsWith('/books/new') }"
      :href="route('books.new')"
    >
      Add a Book
    </InertiaLink>
  </nav>
</template>
