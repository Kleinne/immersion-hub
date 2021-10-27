<script setup name="NavBar">
defineProps({
  links: {
    type: Array,
    default: null,
  },
});
</script>

<template>
  <div
    class="fixed inset-x-0 top-0 flex items-center w-full h-12 space-x-10 bg-lred-500/60"
  >
    <div class="ml-80">immersion hub</div>
    <div>Home</div>
    <div>Reviews</div>
    <div>Recommendations</div>
    <div>Community</div>
    <InertiaLink :href="route('app.contribute')">Contribute</InertiaLink>
  </div>
</template>
