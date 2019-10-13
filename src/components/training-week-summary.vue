<template>
    <div class="training-week">
        <h3 class="week-header is-size-3">
            Week {{week.weekNumber}} - {{week.totalTrainingHours}} hrs
            <span class="is-size-7" @click="editWeek(week.weekNumber)"><a>Edit</a></span>
        </h3>
        <TrainingDayChart v-for="day in week.days" :day="day" :key="day.dayOfWeek"></TrainingDayChart>
    </div>
</template>

<script lang="ts">
    import Vue, {PropType} from 'vue';
    import TrainingDayChart from '@/components/training-day-chart.vue';
    import {TrainingWeek} from '@/models';

    export default Vue.extend({
        name: 'TrainingWeekSummary',
        components: {TrainingDayChart},
        props: {
            week: {
                type: Object as PropType<TrainingWeek>,
                required: true,
            },
        },
        methods: {
            editWeek(weekNumber: number) {
                this.$store.dispatch('openWeekEditModal', weekNumber);
            },
        },
    });
</script>

<style scoped>
    .training-week {
        padding-bottom: 1.5rem;
    }
    .week-header {
        margin-bottom: .5rem;
    }
</style>
