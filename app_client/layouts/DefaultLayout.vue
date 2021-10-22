<script setup name="DefaultLayout">
import NavBar from '../components/NavBar.vue';
</script>

<template>
  <div>
    <NavBar />
    <div class="mt-12">
      default layout
      <slot />
    </div>
  </div>
</template>
