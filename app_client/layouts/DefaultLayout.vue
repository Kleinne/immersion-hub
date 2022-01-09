<script setup name="DefaultLayout">
import NavBar from '../components/NavBar.vue';
import Footer from '../components/Footer.vue';
</script>

<template>
  <div class="w-full h-screen overflow-y-auto">
    <NavBar :user="$page.props.auth?.user" />
    <main class="px-5 pt-24 md:px-40">
      <div class="max-w-4xl mx-auto desktop:max-w-7xl">
        <slot />
      </div>
    </main>
  </div>
  <Footer />
</template>
