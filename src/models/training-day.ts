export class TrainingDay {
    public dayOfWeek: number;
    public cyclingHours: number = 0;
    public swimmingHours: number = 0;
    public runningHours: number = 0;
    public otherHours: number = 0;
    public maxTrainingHours: number = 6;

    constructor(dayOfWeek: number) {
        this.dayOfWeek = dayOfWeek;

        this.cyclingHours = Math.floor(Math.random() * 3);
        this.runningHours = Math.floor(Math.random() * 3);
        this.swimmingHours = Math.floor(Math.random() * 3);
        this.otherHours = Math.floor(Math.random() * 2);
    }

    public get cyclingPercent(): number { return this.cyclingHours / this.maxTrainingHours * 100; }
    get swimmingPercent(): number { return this.swimmingHours / this.maxTrainingHours * 100; }
    get runningPercent(): number { return this.runningHours / this.maxTrainingHours * 100; }
    get otherPercent(): number { return this.otherHours / this.maxTrainingHours * 100; }

    get totalHours(): number {
        return this.cyclingHours + this.swimmingHours + this.runningHours + this.otherHours;
    }

    get name(): string {
        return [
            'Mon',
            'Tues',
            'Wed',
            'Thurs',
            'Fri',
            'Sat',
            'Sun',
        ][this.dayOfWeek];
    }
}
