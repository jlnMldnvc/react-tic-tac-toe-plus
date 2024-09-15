import React from "react";
import { OldSquare } from "./OldSquare";
//import { calculateWinner } from "../calculateWiner";

export class OldBoard extends React.Component {

    /* constructor(props) {
        super(props)

        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true
        }
    } */

    /* handleClick(i) {
        const squaresCopy = this.state.squares.slice()

        if (calculateWinner(squaresCopy) || squaresCopy[i]) {
            return
        }

        squaresCopy[i] = this.state.xIsNext ? 'X' : 'O'

        this.setState({
            squares: squaresCopy,
            xIsNext: !this.state.xIsNext
        })
    } */


    renderSquare(i) {
        return (<>
            {/* <OldSquare value={this.state.squares[i]} onClick={() => this.handleClick(i)} /> */}
            <OldSquare value={this.props.squares[i]} onClick={() => this.props.onClick(i)} />
        </>)
    }

    render() {

        /* const winner = calculateWinner(this.state.squares)
        let status
        if (winner) {
            status = 'Winner: ' + winner
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O')
        } */

        return (
            <div>
                {/* <div className="status">{status}</div> */}
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
}