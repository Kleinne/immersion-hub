<script setup name="GuestLayout">
import Footer from '../components/Footer.vue';
import NavBar from '../components/NavBar.vue';
</script>

<template>
  <div class="w-full h-screen overflow-y-auto">
    <NavBar />
    <main class="px-5 pt-24 md:px-40">
      <div class="max-w-4xl mx-auto">
        <slot />
      </div>
    </main>
    <Footer class="mt-40" />
  </div>
</template>
