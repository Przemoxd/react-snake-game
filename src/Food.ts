import {Point} from "./Point";

export class Food {
    point: Point;
    columns: number;
    rows: number;

    constructor(columns: number, rows: number) {
        this.columns = columns;
        this.rows = rows;
        this.generateFood();
    }

    generateFood() {
        this.point = new Point(this.getRandomInt(0, this.columns), this.getRandomInt(0, this.rows));
    }

    getRandomInt(min: number, max: number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
}