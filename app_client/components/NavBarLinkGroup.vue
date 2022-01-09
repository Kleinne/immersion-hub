<script setup name="NavBarLinkGroup">
const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});
</script>
<template>
  <div class="flex items-center space-x-10">
    <InertiaLink
      class="font-bold hover:text-ired-500"
      v-for="item in items"
      :key="item.name"
      :class="{ 'text-ired-500': $page.url.startsWith(item.url) }"
      :href="route(item.route)"
    >
      {{ item.name }}
    </InertiaLink>
    <slot />
  </div>
</template>
