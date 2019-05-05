import React, {Component} from 'react';
import {Game} from "./Game";
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <canvas id="board" className="canvas"></canvas>
                </header>
            </div>
        );
    }

    componentDidMount() {
        this.init()
    }

    init() {
        new Game();
    }

}

export default App;