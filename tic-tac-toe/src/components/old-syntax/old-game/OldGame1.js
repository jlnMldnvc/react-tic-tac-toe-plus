import React from "react";
import { OldBoard } from "../old-board/OldBoard";
import { calculateWinner } from "../../calculateWiner"

export default class OldGame extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            xIsNext: true,
            history: [{
                squares: Array(9).fill(null),
                //
                poslednjiPotez: null
                //
            }],
            stepNumber: 0,
            //
            uzlaznoSortiranje: true
            //
        }
    }

    handleClick(i) {

        const history = this.state.history.slice(0, this.state.stepNumber + 1)
        const current = history[history.length - 1]
        const squares = current.squares.slice()
        if (calculateWinner(squares) || squares[i]) {
            return
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O'
        //
        const red = Math.floor(i / 3)
        const kolona = i % 3
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
            stepNumber: history.length,
        })
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0
        })
    }
    //
    promeniRedosledSortiranja() {
        this.setState(predhodnoStanje => ({
            uzlaznoSortiranje: !predhodnoStanje.uzlaznoSortiranje
        }))
    }
    //
    render() {

        const history = this.state.history
        const current = history[this.state.stepNumber]
        const winner = calculateWinner(current.squares)
        let status
        if (winner) {
            status = 'Winner: ' + winner
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O')
        }
        //
        const sortiranaIstorija = this.state.uzlaznoSortiranje ? history : [...history].reverse()
        //
        //const moves = history.map((stepValue, moveIndex) => {
        const moves = sortiranaIstorija.map((stepValue, moveIndex) => {
            //
            const trenutniPotez = stepValue.poslednjiPotez
            //
            //const opis = trenutniPotez ? ("row: " + trenutniPotez.red + ", col: " + trenutniPotez.kolona) : "Start"
            //
            //const description = moveIndex ? 'Go to move #' + moveIndex : 'Go to game start'
            //
            //const description = moveIndex ? 'Go to move #' + moveIndex + "(" + opis + ")" : 'Go to game start'
            //
            /* const { red, kolona } = trenutniPotez || {}
            const opis = (red !== undefined && kolona !== undefined) ? `row: ${red}, col: ${kolona}` : 'Start'
            const description = (moveIndex > 0) ? `Go to move #${moveIndex} (${opis})` : 'Go to game start' */
            //
            let description
            if (moveIndex > 0) {
                const { red, kolona } = trenutniPotez || {}

                const opis = (red !== undefined && kolona !== undefined) ? `row: ${red}, col: ${kolona}` : 'Start'

                description = `Go to move #${moveIndex} (${opis})`
            } else {
                //description = 'Go to game start';

                const pocetniPotez = history[0].poslednjiPotez || {}

                const pocetniOpis = (pocetniPotez.red !== undefined && pocetniPotez.kolona !== undefined) ? `row: ${pocetniPotez.red}, col: ${pocetniPotez.kolona}` : 'Start'

                description = `Go to game start (${pocetniOpis})`
                //
            }
            //
            const imeKlase = (moveIndex === this.state.stepNumber) ? 'selektovani-potez' : ''
            //
            return (<>
                {/* <li key={moveIndex}> */}
                <li key={moveIndex} className={imeKlase}>
                    <button onClick={() => this.jumpTo(moveIndex)}>{description}</button>
                </li>
            </>)
        })

        return (
            <>
                <h2>Old Syntax</h2>
                <div className="game">
                    <div className="game-board">
                        <OldBoard squares={current.squares} onClick={i => this.handleClick(i)} />
                    </div>

                    <div className="game-info">
                        <div>{status}</div>
                        {/*  */}
                        <button onClick={() => this.promeniRedosledSortiranja()}>{this.state.uzlaznoSortiranje ? 'Uzlazno sortiranje' : 'Silazno sortiranje'}</button>
                        {/*  */}
                        <ol>{moves}</ol>
                        {/* <ol>
                            <li key={0} className={(this.state.stepNumber === 0) ? 'selektovani-potez' : ''}>
                                <button onClick={() => this.jumpTo(0)}>Go to game start</button>
                            </li>
                            {moves.slice(1)}
                        </ol> */}
                        {/*  */}
                    </div>
                </div>
            </>
        )
    }
}