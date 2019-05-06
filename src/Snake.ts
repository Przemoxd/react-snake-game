import {Point} from "./Point";
import {Direction} from "./Direction";
import * as _ from 'lodash';
import {Board} from "./Board";
import {Food} from "./Food";

export class Snake {
    body: Array<Point> = [];
    head: Point | undefined;
    tail: Point | undefined;
    direction: Direction | null;
    board: Board;
    eatedFood: Food | undefined;


    constructor(point: Point, board: Board) {
        this.board = board;
        console.log("Snake start on Point: " + JSON.stringify(point));
        this.initSnake(point);
    }

    initSnake(point: Point) {
        this.addPart(point);
    }

    addPart(part: Point) {
        this.body.push(part);
    }

    public changeDirection(direction: Direction) {
        if (this.validateDirection(direction)) {
            this.direction = direction;
        }
    }

    moveSnake() {
        let scope = this;
        if (this.direction) {
            let functionName: string = 'move' + this.direction.toString();
            let head = _.cloneDeep(_.first(scope.body));
            let newHead = (this as any)[functionName](head);
            this.validateBoard(newHead);
            this.body.unshift(newHead);
            this.body.pop();
            this.updateParts();
        }
    }

    updateParts() {
        this.head = _.first(this.body);
        this.tail = _.last(this.body);
    }

    validateBoard(point: Point) {
        if (point.x >= this.board.columns)
            point.x = 0;
        if (point.y >= this.board.rows)
            point.y = 0;
        if (point.y < 0)
            point.y = this.board.rows - 1;
        if (point.x < 0)
            point.x = this.board.columns - 1;
        return point;
    }

    validateDirection(direction: Direction) {
        return !((this.direction === Direction.Down || this.direction === Direction.Up) && (direction === Direction.Up || direction === Direction.Down) ||
            (this.direction === Direction.Left || this.direction === Direction.Right) && (direction === Direction.Left || direction === Direction.Right));
    }

    eat() {

    }

    moveRight(head: Point) {
        head.x += 1;
        return head;
    }

    moveLeft(head: Point) {
        head.x -= 1;
        return head;
    }

    moveUp(head: Point) {
        head.y -= 1;
        return head;
    }

    moveDown(head: Point) {
        head.y += 1;
        return head;
    }

}