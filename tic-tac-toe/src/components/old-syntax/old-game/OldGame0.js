import React from "react";
import { OldBoard } from "./OldBoard";
import { calculateWinner } from "../../calculateWiner"

export default class OldGame extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            xIsNext: true,
            history: [{
                squares: Array(9).fill(null),
            }],
            //
            stepNumber: 0
            //
        }
    }
    //
    handleClick(i) {
        //
        //const history = this.state.history
        //
        const history = this.state.history.slice(0, this.state.stepNumber + 1)
        //
        const current = history[history.length - 1]
        //
        const squares = current.squares.slice()
        if (calculateWinner(squares) || squares[i]) {
            return
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O'
        //
        const red = Math.floor(i / 3)
        const kolona = i % 3
        //console.log(red, kolona);
        //
        this.setState({
            history: history.concat([{
                squares: squares,
                //
                poslednjiPotez: {
                    red,
                    kolona
                }
                //
            }]),
            xIsNext: !this.state.xIsNext,
            //
            stepNumber: history.length,
        })
    }
    //
    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0
        })
    }
    //
    render() {
        //
        const history = this.state.history
        //const current = history[history.length - 1]
        //
        const current = history[this.state.stepNumber]
        //
        const winner = calculateWinner(current.squares)
        let status
        if (winner) {
            status = 'Winner: ' + winner
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O')
        }
        //
        const moves = history.map((stepValue, moveIndex) => {
            //
            const trenutniPotez = stepValue.poslednjiPotez
            const opis = trenutniPotez ? ("row: " + trenutniPotez.red + ", col: " + trenutniPotez.kolona) : "Start"
            //
            //const description = moveIndex ? 'Go to move #' + moveIndex : 'Go to game start'
            //
            const description = moveIndex ? 'Go to move #' + moveIndex + "(" + opis + ")" : 'Go to game start'
            //
            return (<li key={moveIndex}>
                <button onClick={() => this.jumpTo(moveIndex)}>{description}</button>
            </li>)
        })
        //
        return (
            <>
                <h2>Old Syntax</h2>
                <div className="game">
                    <div className="game-board">
                        {/* <OldBoard /> */}
                        <OldBoard squares={current.squares} onClick={i => this.handleClick(i)} />
                    </div>

                    <div className="game-info">
                        <div>{status}</div>
                        <ol>{moves}</ol>
                    </div>
                </div>
            </>
        )
    }
}