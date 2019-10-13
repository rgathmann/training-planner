import Vue from 'vue';
import Vuex from 'vuex';
import {TrainingWeek} from '@/models';

// Enable Vuex
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        showModal: false,
        trainingWeekToEdit: null,
        weeks: Array<TrainingWeek>(),
    },
    getters: {
        getWeekByIndex: (state, getters) => (id: number) => {
            return state.weeks[id];
        },
    },
    mutations: {
        createWeek(state) {
            state.weeks.push(new TrainingWeek(state.weeks.length));
        },
        saveWeek(state, week) {
            state.weeks.splice(week.weekNumber, 1, week);
        },
        openWeekEditModal(state, weekId) {
            state.showModal = true;
            state.trainingWeekToEdit = weekId;
        },
        closeEditModal(state) {
            state.showModal = false;
            state.trainingWeekToEdit = null;
        },
    },

    actions: {
        createWeek(context) {
            context.commit('createWeek');
        },
        saveWeek(context, week) {
            context.commit('saveWeek', week);
        },
        openWeekEditModal(context, weekId) {
            context.commit('openWeekEditModal', weekId);
        },
        closeEditModal(context) {
            context.commit('closeEditModal');
        },
    },
});
