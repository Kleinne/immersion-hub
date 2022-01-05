<script setup name="DefaultLayout">
import NavBar from '../components/NavBar.vue';
import Footer from '../components/Footer.vue';
</script>

<template>
  <div class="w-full h-screen overflow-y-auto">
    <NavBar />
    <main class="pt-24 px-80">
      <div class="max-w-4xl mx-auto">
        <slot />
      </div>
    </main>
    <Footer class="mt-40" />
  </div>
</template>
