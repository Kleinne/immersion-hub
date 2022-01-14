<script setup name="UsersShow">
import { useBooksLineChart } from '../features/useBooksLineChart.js';

import BaseCard from '../components/BaseCard.vue';

const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
  books: {
    type: Object,
    default: null,
  },
  charts: {
    type: Object,
    default: null,
  },
});

const stats = computed(() => [
  {
    label: 'Reading',
    value: props.books?.reading?.length,
  },
  {
    label: 'Completed',
    value: props.books?.completed?.length,
  },
  {
    label: 'Planned',
    value: props.books?.planned?.length,
  },
  {
    label: 'Pages read',
    value: props.books?.pages,
  },
]);

const { chartOptions } = useBooksLineChart(props.charts.line);
</script>

<template>
  <div>
    <InertiaHead :title="`${user.username}'s Profile`" />

    <div class="flex w-full space-x-3">
      <BaseCard class="w-1/3" :title="`${user.username}`">
        <div class="divide-y">
          <h5 class="mb-2 font-bold">User's data</h5>
          <div
            class="flex items-center justify-between py-2"
            v-for="{ label, value } in stats"
            :key="label"
          >
            <p>{{ label }}</p>
            <p>{{ value }}</p>
          </div>
        </div>
      </BaseCard>

      <BaseCard title="Books completed in the last 30 days" class="flex-1">
        <EChart :option="chartOptions" />
      </BaseCard>
    </div>
  </div>
</template>
