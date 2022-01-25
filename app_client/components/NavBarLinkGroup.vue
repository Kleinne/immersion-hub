<script lang="ts" setup name="NavBarLinkGroup">
defineProps({
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
      :href="item.href || route(item.route)"
      :method="item.method || 'get'"
      :as="item.as || 'a'"
    >
      {{ item.name }}
    </InertiaLink>
  </div>
</template>
