<template>
  <div id="app">
    <Overview/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Overview from '@/components/overview.vue';
import TrainingWeek from '@/components/training-week-summary.vue';
import TrainingDayChart from '@/components/training-day-chart.vue';
import EditTrainingWeekModal from '@/components/edit-training-week-modal.vue';

export default Vue.extend({
  name: 'app',
  components: {
    Overview,
    TrainingWeek,
    TrainingDayChart,
    EditTrainingWeekModal,
  },
});
</script>

<style>

</style>
