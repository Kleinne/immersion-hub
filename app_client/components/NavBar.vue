<script setup name="NavBar">
/* can't access route in script setup */
</script>

<template>
  <div
    class="fixed inset-x-0 top-0 flex items-center w-full h-12 space-x-10 bg-soft-500"
  >
    <InertiaLink :href="route('app.home')" class="ml-80">
      immersion hub
    </InertiaLink>
    <InertiaLink :href="route('app.home')">Home</InertiaLink>
    <InertiaLink :href="route('app.home')">Reviews</InertiaLink>
    <InertiaLink :href="route('app.home')">Recommendations</InertiaLink>
    <InertiaLink :href="route('app.home')">Community</InertiaLink>
    <InertiaLink :href="route('contribute.index')">Contribute</InertiaLink>
  </div>
</template>
