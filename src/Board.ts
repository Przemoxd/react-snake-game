import {Point} from "./Point";

export class Board {
    private _columns: number;
    private _rows: number;

    constructor(columns: number, rows: number) {
        this._columns = columns;
        this._rows = rows;
    }

    get columns() {
        return this._columns;
    }

    set columns(value) {
        this._columns = value;
    }

    get rows() {
        return this._rows;
    }

    set rows(value) {
        this._rows = value;
    }

    getCenterPoint(): Point {
        return new Point(Math.round(this._columns / 2), Math.round(this._rows / 2));
    }

}