export class Point {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    };

    static equal(p1: Point | undefined, p2: Point | undefined) {
        return p1 && p2 && p1.x === p2.x && p2.y === p1.y;
    }
}