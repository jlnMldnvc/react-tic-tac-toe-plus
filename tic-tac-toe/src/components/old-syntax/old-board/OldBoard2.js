import React from "react";
import { OldSquare } from "./OldSquare";

export class OldBoard extends React.Component {

    renderSquare(i) {
        return (<>
            {/* <OldSquare value={this.props.squares[i]} onClick={() => this.props.onClick(i)} /> */}
            <OldSquare key={i} value={this.props.squares[i]} onClick={() => this.props.onClick(i)} />
        </>)
    }

    render() {
        //
        const velicinaTable = 3
        const redovi = []

        for (let red = 0; red < velicinaTable; red++) {
            const kolone = []

            for (let kolona = 0; kolona < velicinaTable; kolona++) {
                const indeks = red * velicinaTable + kolona
                kolone.push(this.renderSquare(indeks))
            }

            redovi.push(<div className="board-row" key={red}>{kolone}</div>)
        }

        return <div>{redovi}</div>
        //
        /* return (
            <div>
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
        ) */
    }
}