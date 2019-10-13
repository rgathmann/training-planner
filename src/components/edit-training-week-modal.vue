<template>
    <div class="modal" v-if="week" :class="{ 'is-active': $store.state.showModal }">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">Edit Training Week {{ week.weekNumber }}</header>
            <section class="modal-card-body">
                <div class="columns has-text-weight-bold">
                    <div class="column"></div>
                    <div class="column has-text-centered">Cycling</div>
                    <div class="column has-text-centered">Running</div>
                    <div class="column has-text-centered">Swimming</div>
                    <div class="column has-text-centered">Other</div>
                    <div class="column has-text-centered">Total</div>
                </div>
                <div class="columns" v-for="day in week.days" :key="day.dayOfWeek">
                    <div class="column has-text-weight-bold">
                        {{ day.name }}
                    </div>
                    <div class="column has-text-centered">
                        <span @click="decrementCycling(day.dayOfWeek)">-</span> {{ day.cyclingHours }} <span @click="incrementCycling(day.dayOfWeek)">+</span>
                    </div>
                    <div class="column has-text-centered">
                        <span @click="decrementRunning(day.dayOfWeek)">-</span> {{ day.runningHours }} <span @click="incrementRunning(day.dayOfWeek)">+</span>
                    </div>
                    <div class="column has-text-centered">
                        <span @click="decrementSwimming(day.dayOfWeek)">-</span> {{ day.swimmingHours }} <span @click="incrementSwimming(day.dayOfWeek)">+</span>
                    </div>
                    <div class="column has-text-centered">
                        <span @click="decrementOther(day.dayOfWeek)">-</span> {{ day.otherHours }} <span @click="incrementOther(day.dayOfWeek)">+</span>
                    </div>
                    <div class="column has-text-centered">
                        {{ day.totalHours }}
                    </div>
                </div>
            </section>
            <footer class="modal-card-foot">
                <button class="button is-success" @click="saveAndClose()">Save</button>
                <button class="button" @click="close">Cancel</button>
            </footer>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';

    export default Vue.extend ({
        name: 'EditTrainingWeekModal',
        data() {
            return  { week: null };
            },
        methods: {
            incrementCycling(dayIndex) {
                const day = this.week.days[dayIndex];
                day.cyclingHours += 1;
                Vue.set(this.week.days, dayIndex, day);
            },
            decrementCycling(dayIndex) {
                const day = this.week.days[dayIndex];
                day.cyclingHours -= 1;
                Vue.set(this.week.days, dayIndex, day);
            },
            incrementRunning(dayIndex) {
                const day = this.week.days[dayIndex];
                day.runningHours += 1;
                Vue.set(this.week.days, dayIndex, day);
            },
            decrementRunning(dayIndex) {
                const day = this.week.days[dayIndex];
                day.runningHours -= 1;
                Vue.set(this.week.days, dayIndex, day);
            },
            incrementSwimming(dayIndex) {
                const day = this.week.days[dayIndex];
                day.swimmingHours += 1;
                Vue.set(this.week.days, dayIndex, day);
            },
            decrementSwimming(dayIndex) {
                const day = this.week.days[dayIndex];
                day.swimmingHours -= 1;
                Vue.set(this.week.days, dayIndex, day);
            },
            incrementOther(dayIndex) {
                const day = this.week.days[dayIndex];
                day.otherHours += 1;
                Vue.set(this.week.days, dayIndex, day);
            },
            decrementOther(dayIndex) {
                const day = this.week.days[dayIndex];
                day.otherHours -= 1;
                Vue.set(this.week.days, dayIndex, day);
            },
            saveAndClose() {
                this.$store.dispatch('saveWeek', this.week.duplicate());
                this.close();
            },
            close() {
                this.week = null;
                this.$store.dispatch('closeEditModal');
            },
        },
        created() {
            this.$store.watch(
                (state, getters) => state.trainingWeekToEdit,
                (newValue, oldValue) => {
                    if (newValue !== null) {
                        this.week = this.$store.getters.getWeekByIndex(newValue).duplicate();
                    }
                },
            );
        },
    });
</script>

<style scoped>

</style>
