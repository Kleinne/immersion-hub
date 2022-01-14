<script setup name="BookListItem">
defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <InertiaLink
    class="relative font-bold text-white word-break hover:text-ired-500"
    :href="`books/${data.id}`"
    :title="data.title"
  >
    <img
      :src="data.cover"
      class="object-cover w-[100px] h-[136px]"
      alt="cover"
    />

    <p class="absolute bottom-0 px-1 mb-2 text-xs underline">
      {{ data.title }}
    </p>
  </InertiaLink>
</template>
