//export function Square({ value, onSquareClick }) {
export function Square({ value, onSquareClick, daLiJePobednickiKvadrat }) {
    //
    //return (<button className="square" onClick={onSquareClick}>{value}</button>)

    const imeKlase = `square ${daLiJePobednickiKvadrat ? 'osvetli' : ''}`

    return (<button className={imeKlase} onClick={onSquareClick}>{value}</button>)
    //
}