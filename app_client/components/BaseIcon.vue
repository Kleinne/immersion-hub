<script lang="ts" setup name="BaseIcon">
const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
});

const iconPath = computed(
  // cache query is used for busting cache ?cache=1.2.2
  () => `/dashboard.svg#${props.icon}`,
);
</script>

<template>
  <svg class="flex-shrink-0 block fill-current">
    <use :href="iconPath" :xlink:href="iconPath" />
  </svg>
</template>
