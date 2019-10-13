<template>
    <section class="section">
        <EditTrainingWeekModal></EditTrainingWeekModal>
        <div class="container">
            <h1 class="is-size-2 has-text-centered">Training Planner</h1>
            <div class="level">
                <div class="level-left"></div>
                <div class="level-right">
                    <div class="level-item" @click="createWeek">
                        <div class="create-week">
                            <span class="icon"><fa-icon :icon="['fas', 'plus']"/></span> Add Week
                        </div>
                    </div>
                </div>
            </div>
            <div class="training-weeks">
                <template v-if="$store.state.weeks.length > 0">
                    <TrainingWeekSummary :week="week" :key="week.weekNumber" v-for="week in $store.state.weeks"></TrainingWeekSummary>
                </template>
                <template v-else>
                    <h2 class="is-size-5 has-text-centered">You have not added any training plans.</h2>
                </template>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
    import Vue from 'vue';
    import TrainingWeekSummary from '@/components/training-week-summary.vue';
    import EditTrainingWeekModal from '@/components/edit-training-week-modal.vue';
    import {mapActions} from 'vuex';

    export default Vue.extend({
        name: 'Overview',
        components: {TrainingWeekSummary, EditTrainingWeekModal},
        methods: {
          ...mapActions([
              'createWeek',
          ]),
        },
    });
</script>


<style scoped>
    .create-week {
        cursor: pointer;
        display: flex;
        align-items: center;
    }
</style>
