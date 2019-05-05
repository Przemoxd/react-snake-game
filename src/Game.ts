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

    constructor() {
        this.SPEED_GAME = 100;
        this.canvas = new Canvas();
        this.board = new Board(this.canvas.getCountColumns(), this.canvas.getCountRows());
        console.log("Board initialized with " + this.board.columns + " Columns and " + this.board.rows + " Rows");
        this.snake = new Snake(this.board.getCenterPoint(), this.board);
        this.food = new Food(this.canvas.getCountColumns(), this.canvas.getCountRows());
        console.log(this.food);
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
            if (this.snake.direction) {
                this.snake.moveSnake();
            }
            if (Point.equal(this.snake.head, this.food.point)) {
                this.snake.eatedFood = _.cloneDeep(this.food);
                this.food.generateFood();
            }
            if (this.snake.eatedFood) {
                console.log(this.snake.eatedFood.point);
                if (Point.equal(this.snake.eatedFood.point, this.snake.tail)) {
                    console.log("TAIL");
                    this.snake.addPart(this.snake.eatedFood.point);
                    this.snake.eatedFood = undefined;
                }
            }

            console.log(this.snake.tail);


        }, this.SPEED_GAME);
    }


    onKeyDown(event: any) {
        console.log(this);
        switch (event.key) {
            case 'ArrowRight':
                this.snake.changeDirection(Direction.Right);
                console.log("PRAWO");
                break;
            case 'ArrowLeft':
                this.snake.changeDirection(Direction.Left);
                console.log("LEWO");
                break;
            case 'ArrowUp':
                this.snake.changeDirection(Direction.Up);
                console.log("GÓRA");
                break;
            case 'ArrowDown':
                this.snake.changeDirection(Direction.Down);
                console.log("DÓŁ");
                break;
            default:
                console.log("COŚ");
                break;
        }
    }


}