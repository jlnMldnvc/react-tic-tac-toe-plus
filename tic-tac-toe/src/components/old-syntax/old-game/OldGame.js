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
                poslednjiPotez: null
            }],
            stepNumber: 0,
            uzlaznoSortiranje: true
        }
    }

    handleClick(i) {

        const history = this.state.history.slice(0, this.state.stepNumber + 1)
        const current = history[history.length - 1]
        const squares = current.squares.slice()

        //if (calculateWinner(squares) || squares[i]) {
        //if (calculateWinner(squares).pobednik || squares[i]) {
        const pobednik = calculateWinner(squares).pobednik
        if (pobednik || squares[i]) {
            //
            return
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O'

        const red = Math.floor(i / 3)
        const kolona = i % 3

        this.setState({
            history: history.concat([{
                squares: squares,
                poslednjiPotez: { red, kolona }
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

    promeniRedosledSortiranja() {
        this.setState(predhodnoStanje => ({
            uzlaznoSortiranje: !predhodnoStanje.uzlaznoSortiranje
        }))
    }

    render() {
        const history = this.state.history
        const current = history[this.state.stepNumber]
        //
        //const winner = calculateWinner(current.squares)
        const { pobednik, pobednickaLinija } = calculateWinner(current.squares)
        //
        /* let status
        if (winner) {
            status = 'Winner: ' + winner
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O')
        } */
        //
        //let status = (pobednik) ? (`Winner: ${pobednik}`) : (`Next player: ${this.state.xIsNext ? 'X' : 'O'}`)
        //
        let status
        if (pobednik) {
            status = `Winner: ${pobednik}`
        }
        //
        else if (current.squares.every(kvadrat => kvadrat)) {
            status = "It's a draw!"
        }
        //
        else {
            status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`
        }
        //
        const sortiranaIstorija = this.state.uzlaznoSortiranje ? history : [...history].reverse()

        const moves = sortiranaIstorija.map((stepValue, moveIndex) => {

            let description
            if (moveIndex > 0) {
                const { red, kolona } = stepValue.poslednjiPotez || {}
                const uRedu = red !== undefined && kolona !== undefined
                const opis = uRedu ? `row: ${red}, col: ${kolona}` : 'Start'
                description = `Go to move #${moveIndex} (${opis})`
            } else {
                const pocetniPotez = history[0].poslednjiPotez || {}
                const uRedu = pocetniPotez.red !== undefined && pocetniPotez.kolona !== undefined
                const pocetniOpis = uRedu ? `row: ${pocetniPotez.red}, col: ${pocetniPotez.kolona}` : 'Start'
                description = `Go to game start (${pocetniOpis})`
            }

            const imeKlase = (moveIndex === this.state.stepNumber) ? 'selektovani-potez' : ''

            return (<li key={moveIndex} className={imeKlase}>
                <button onClick={() => this.jumpTo(moveIndex)}>{description}</button>
            </li>)
        })

        return (
            <>
                <h2>Old Syntax</h2>
                <div className="game">
                    <div className="game-board">
                        {/* <OldBoard squares={current.squares} onClick={i => this.handleClick(i)} /> */}

                        <OldBoard squares={current.squares} pobednickaLinija={pobednickaLinija} onClick={i => this.handleClick(i)} />
                    </div>

                    <div className="game-info">
                        {/* <div>{status}</div> */}
                        <div className="status">{status}</div>

                        <button onClick={() => this.promeniRedosledSortiranja()}>{this.state.uzlaznoSortiranje ? 'Uzlazno sortiranje' : 'Silazno sortiranje'}</button>

                        <ol>{moves}</ol>
                    </div>
                </div>
            </>
        )
    }
}