<script setup name="BaseModal">
const emit = defineEmits(['clickOutside']);
defineProps({
  to: {
    type: String,
    default: 'body',
  },
  title: {
    type: String,
    default: null,
  },
});

const contentRef = ref(null);

const onClickOutside = (e) => {
  if (!contentRef?.value?.contains(e.target)) {
    emit('clickOutside');
  }
};
</script>
<template>
  <Teleport :to="to">
    <div
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/30"
      @click="onClickOutside"
    >
      <div
        ref="contentRef"
        class="max-w-lg p-5 bg-white border rounded-xl space-y-10 min-w-[300px]"
      >
        <h4 class="text-lg font-semibold" v-if="title">{{ title }}</h4>
        <slot />
      </div>
    </div>
  </Teleport>
</template>
