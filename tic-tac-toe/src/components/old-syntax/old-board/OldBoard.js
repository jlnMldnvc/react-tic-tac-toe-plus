import React from "react";
import { OldSquare } from "../old-square/OldSquare";

export class OldBoard extends React.Component {

    renderSquare(i) {
        //
        //return (<OldSquare key={i} value={this.props.squares[i]} onClick={() => this.props.onClick(i)} />)
        //
        const { squares, pobednickaLinija } = this.props       

        const daLiJePobednickiKvadrat = pobednickaLinija.includes(i)  

        return (<OldSquare key={i} value={squares[i]} onClick={() => this.props.onClick(i)} daLiJePobednickiKvadrat={daLiJePobednickiKvadrat} />)
    }

    render() {

        const velicinaTable = 3
        const redovi = []

        for (let indeksReda = 0; indeksReda < velicinaTable; indeksReda++) {
            const kolone = []
            for (let indeksKolone = 0; indeksKolone < velicinaTable; indeksKolone++) {
                const indeks = indeksReda * velicinaTable + indeksKolone
                kolone.push(this.renderSquare(indeks))
            }
            redovi.push(<div className="red-table" key={indeksReda}>{kolone}</div>)
        }

        return <div>{redovi}</div>
    }
}