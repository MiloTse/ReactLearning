
import {Component} from "react";
import Board from "./Board";
import History from "./History";


class Game extends Component  {

    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board/>
                </div>
                <div className="game-history">
                    <History/>
                </div>
            </div>
        )

    }

}

export default Game;