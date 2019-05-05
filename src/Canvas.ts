import {Snake} from "./Snake";
import * as _ from "lodash";
import {Point} from "./Point";
import {Food} from "./Food";

const ZOOM: number = 0.75;
const RECT_SIZE = 10;
const WIDTH: number = Math.round(window.innerWidth * ZOOM / RECT_SIZE) * RECT_SIZE;
const HEIGHT: number = Math.round(window.innerHeight * ZOOM / RECT_SIZE) * RECT_SIZE;
const SNAKE_COLOR: string = "blue";
const BOARD_COLOR: string = "white";
const FOOD_COLOR = "green";

export class Canvas {
    private canvas: any;
    private context: CanvasRenderingContext2D;


    constructor() {
        this.canvas = document.getElementById('board');
        this.canvas.width = WIDTH;
        this.canvas.height = HEIGHT;
        this.context = this.canvas.getContext("2d");
        console.log("BOARD is initialized with " + WIDTH + " x " + HEIGHT);
        this.fillBoard(BOARD_COLOR);
    }


    getCountRows() {
        return HEIGHT / 10;
    }

    getCountColumns() {
        return WIDTH / 10;
    }

    fillBoard(color: string) {
        this.context.fillStyle = color;
        this.context.fillRect(0, 0, WIDTH, HEIGHT);
    }

    drawRect(point: Point, color: string) {
        this.context.fillStyle = color;
        this.context.fillRect(point.x * RECT_SIZE, point.y * RECT_SIZE, RECT_SIZE, RECT_SIZE);
    }

    drawScene(snake: Snake, food: Food) {
        this.fillBoard(BOARD_COLOR);
        this.drawSnake(snake);
        this.drawFood(food);
    }

    drawFood(food: Food) {
        this.drawRect(food.point, FOOD_COLOR);
    }

    drawSnake(snake: Snake) {
        let scope = this;
        _.forEach(snake.body, function (point: Point) {
            scope.drawRect(point, SNAKE_COLOR);
        })
    }


}