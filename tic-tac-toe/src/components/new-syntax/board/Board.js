import { Square } from "../square/Square";
import { calculateWinner } from "../../calculateWiner";

export function Board({ xIsNext, squares, onPlay }) {
  //
  const pobedaInfo = calculateWinner(squares)
  const pobednik = pobedaInfo.pobednik
  const pobednickaLinija = pobedaInfo.pobednickaLinija
  //
  function handleClick(i) {
    //if (squares[i] || calculateWinner(squares)) {
    //if (squares[i] || calculateWinner(squares).pobednik) {
    if (pobednik || squares[i]) {
      //
      return;
    }

    const nextSquares = squares.slice();
    //
    /* if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    } */
    nextSquares[i] = xIsNext ? "X" : "O"
    //
    const red = Math.floor(i / 3)
    const kolona = i % 3
    onPlay(nextSquares, { red, kolona })
  }
  //
  //const winner = calculateWinner(squares)
  //const { pobednik, pobednickaLinija } = calculateWinner(squares)
  //
  /* let status
  if (winner) {
    status = "Winner: " + winner
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O")
  } */
  //
  //let status = (pobednik) ? ("Winner: " + pobednik) : ("Next player: " + (xIsNext ? "X" : "O"))
  //
  let status
  if (pobednik) {
    status = `Winner: ${pobednik}`
  }
  //
  else if (squares.every(kvadrat => kvadrat)) {
    status = "It's a draw!"
  }
  //
  else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`
  }
  //
  const velicinaTable = 3
  const redovi = []

  for (let red = 0; red < velicinaTable; red++) {
    const kolone = []
    for (let kolona = 0; kolona < velicinaTable; kolona++) {
      const indeks = red * velicinaTable + kolona
      //
      //kolone.push(<Square key={indeks} value={squares[indeks]} onSquareClick={() => handleClick(indeks)} />)
      //
      const daLiJePobednickiKvadrat = pobednickaLinija.includes(indeks)

      kolone.push(<Square key={indeks} value={squares[indeks]} onSquareClick={() => handleClick(indeks)} daLiJePobednickiKvadrat={daLiJePobednickiKvadrat} />)
      //
    }
    redovi.push(<div className="red-table" key={red}>{kolone}</div>)
  }
  //
  // return <>{redovi}</> 
  //
  return (<>
    <div className="status">{status}</div>
    {redovi}
  </>)
  //
}