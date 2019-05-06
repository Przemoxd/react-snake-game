import {Board} from "./Board";
import {Canvas} from "./Canvas";
import {Snake} from "./Snake";
import {Direction} from "./Direction";
import {Point} from "./Point";
import {Food} from "./Food";
import _ from 'lodash';

export class Game {
    private board: Board;
    private canvas: Canvas;
    private snake: Snake;
    private SPEED_GAME: number;
    private food: Food;
    private pause: boolean;

    constructor() {
        this.SPEED_GAME = 100;
        this.canvas = new Canvas();
        this.board = new Board(this.canvas.getCountColumns(), this.canvas.getCountRows());
        console.log("Board initialized with " + this.board.columns + " Columns and " + this.board.rows + " Rows");
        this.snake = new Snake(this.board.getCenterPoint(), this.board);
        this.food = new Food(this.canvas.getCountColumns(), this.canvas.getCountRows());
        this.pause = false;
        this.gameLoop();
    }

    gameLoop() {
        console.log(this);
        let scope = this;
        document.addEventListener('keydown', function (e) {
                scope.onKeyDown(e);
            }
        );
        setInterval(() => {
            this.canvas.drawScene(this.snake, this.food);
            if (this.snake.direction && !this.pause) {
                this.snake.moveSnake();
            }
            if (Point.equal(this.snake.head, this.food.point)) {
                this.snake.eatedFood = _.cloneDeep(this.food);
                this.food.generateFood();
            }
            if (this.snake.eatedFood) {
                if (Point.equal(this.snake.eatedFood.point, this.snake.tail)) {
                    this.snake.addPart(this.snake.eatedFood.point);
                    this.snake.eatedFood = undefined;
                }
            }
        }, this.SPEED_GAME);
    }


    onKeyDown(event: any) {
        switch (event.code) {
            case 'ArrowRight':
                this.snake.changeDirection(Direction.Right);
                break;
            case 'ArrowLeft':
                this.snake.changeDirection(Direction.Left);
                break;
            case 'ArrowUp':
                this.snake.changeDirection(Direction.Up);
                break;
            case 'ArrowDown':
                this.snake.changeDirection(Direction.Down);
                break;
            case 'Space':
                this.pause = !this.pause;
                break;
            default:
                break;
        }
    }


}