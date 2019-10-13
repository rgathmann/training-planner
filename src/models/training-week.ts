import {TrainingDay} from '@/models';

export class TrainingWeek {
    public weekNumber: number;
    public days: TrainingDay[];

    constructor(weekNumber: number) {
        this.weekNumber = weekNumber;
        this.days = [];

        for (let i = 0; i < 7; i++) {
            this.days.push(new TrainingDay(i));
        }
    }

    get totalTrainingHours() {
        return this.days
            .map((day) => day.totalHours)
            .reduce((a, b) => a + b, 0);
    }

    public duplicate(): TrainingWeek {
        const copy = new TrainingWeek(this.weekNumber);
        copy.days = this.days.map((day) => day.duplicate());

        return copy;
    }
}
