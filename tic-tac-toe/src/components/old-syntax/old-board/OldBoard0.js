import React from "react";
import { OldSquare } from "./OldSquare";
import { calculateWinner } from "../../calculateWiner";

export class OldBoard extends React.Component {
    //
    constructor(props) {
        super(props)

        this.state = {
            squares: Array(9).fill(null),
            //
            xIsNext: true
            //
        }
    }
    //
    handleClick(i) {
        const squaresCopy = this.state.squares.slice()
        //squaresCopy[i] = 'X'
        //
        if (calculateWinner(squaresCopy) || squaresCopy[i]) {
            return
        }
        //
        squaresCopy[i] = this.state.xIsNext ? 'X' : 'O'
        //
        this.setState({
            squares: squaresCopy,
            //
            xIsNext: !this.state.xIsNext
            //
        })
        //
        //this.test()
    }
    //
    /* test() {
        var player = { score: 1, name: 'Jeff' };
        //player.score = 2;
        //console.log(player);
        //
        //var newPlayer = Object.assign({}, player, { score: 2 })
        //
        var newPlayer = { ...player, score: 2 };
        //
        console.log(player, newPlayer);
        //
    } */
    //
    renderSquare(i) {
        return (<>
            {/* <OldSquare value={i} /> */}
            {/* <OldSquare value={this.state.squares[i]} /> */}
            <OldSquare value={this.state.squares[i]} onClick={() => this.handleClick(i)} />
        </>)
    }
    //
    render() {
        //
        //const status = 'Next player: X'
        //
        //const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O')
        //
        const winner = calculateWinner(this.state.squares)
        let status
        if (winner) {
            status = 'Winner: ' + winner
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O')
        }
        //
        return (
            <div>
                <div className="startus">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}

                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}

                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}

                </div>
            </div>
        );
    }
    //
}