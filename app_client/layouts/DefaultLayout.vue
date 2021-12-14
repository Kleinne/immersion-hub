<script setup name="DefaultLayout">
import NavBar from '../components/NavBar.vue';
</script>

<template>
  <div>
    <NavBar />
    <main class="w-full h-screen pt-24 overflow-y-auto px-80">
      <div class="max-w-4xl mx-auto">
        <slot />
      </div>
    </main>
  </div>
</template>
