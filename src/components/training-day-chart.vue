<template>
    <div class="training-day-chart">
        <div class="columns is-mobile">
            <div class="column is-2-tablet is-2-mobile chart-label">
                <p>{{day.name}}</p>
            </div>
            <div class="column chart">
                <div class="chart-segment cycling" :style="cyclingStyle"></div>
                <div class="chart-segment swimming" :style="swimmingStyle"></div>
                <div class="chart-segment running" :style="runningStyle"></div>
                <div class="chart-segment other" :style="otherStyle"></div>
            </div>
            <div class="column is-narrow chart-label">
                <p>{{day.totalHours}}h 00m</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue, {PropType} from 'vue';
    import {TrainingDay} from '@/models';

    function widthStyleFromPercent(hoursPercent: number): object {
        return {width: `${hoursPercent}%`};
    }

    export default Vue.extend({
        name: 'TrainingDayChart',
        props: {
          day: {
              type: Object as PropType<TrainingDay>,
              required: true,
          },
        },
        computed: {
            cyclingStyle() { return widthStyleFromPercent(this.day.cyclingPercent); },
            runningStyle() { return widthStyleFromPercent(this.day.runningPercent); },
            swimmingStyle() { return widthStyleFromPercent(this.day.swimmingPercent); },
            otherStyle() { return widthStyleFromPercent(this.day.otherPercent); },
        },
    });

</script>

<style scoped>
    .training-day-chart {
        margin-bottom: .5rem;
    }

    .column {
        padding-top: .3rem;
        padding-bottom: .3rem;
    }

    .cycling {
        background: lightcoral;
    }

    .running {
        background: lightgreen;
    }

    .swimming {
        background: lightskyblue;
    }

    .other {
        background: lightgray;
    }

    .chart-label {
        display: flex;
        align-items: center;
    }

    .chart-label>p {
        line-height: 1;
        padding-top: .125rem;
        padding-bottom: .125rem;
    }

    .chart {
        display: flex;
        margin-top: .3rem;
        margin-bottom: .3rem;
    }
</style>
