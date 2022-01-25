<script lang="ts" setup name="DefaultLayout">
import NavBar from '../components/NavBar.vue';
import Footer from '../components/Footer.vue';
</script>

<template>
  <div class="flex flex-col w-full min-h-screen">
    <NavBar :user="$page.props.auth?.user" />
    <main class="px-5 pt-24 mb-20 md:px-40">
      <div class="max-w-4xl mx-auto desktop:max-w-7xl">
        <slot />
      </div>
    </main>
    <Footer />
  </div>
</template>
