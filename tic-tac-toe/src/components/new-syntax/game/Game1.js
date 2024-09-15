import { useState } from 'react';
import { Board } from '../board/Board';

export default function Game() {
  //
  //const [history, setHistory] = useState([Array(9).fill(null)]
  const [history, setHistory] = useState([{
    squares: Array(9).fill(null)
  }])
  //
  const [currentMove, setCurrentMove] = useState(0);
  //
  const [uzlaznoSortiranje, setUzlaznoSortiranje] = useState(true)
  //
  //const currentSquares = history[currentMove]
  const currentSquares = history[currentMove].squares
  //
  const xIsNext = currentMove % 2 === 0
  //
  function promeniRedosledSortiranja() {
    setUzlaznoSortiranje(predhodnoUzlazno => !predhodnoUzlazno)
  }

  const sortiranaIstorija = uzlaznoSortiranje ? history : [...history].reverse()
  //
  //const moves = history.map((stepValue, moveIndex) => {
  const moves = sortiranaIstorija.map((stepValue, moveIndex) => {
    //
    let description
    if (moveIndex > 0) {
      //
      const trenutniPotez = stepValue.poslednjiPotez
      //
      const { red, kolona } = trenutniPotez || {}
      //
      //const opis = trenutniPotez ? ("row: " + trenutniPotez.red + ", col: " + trenutniPotez.kolona) : "Start"
      const opis = (red !== undefined && kolona !== undefined) ? `row: ${red}, col: ${kolona}` : 'Start'
      //
      //description = 'Go to move #' + moveIndex
      //description = 'Go to move #' + moveIndex + "(" + opis + ")"
      description = `Go to move #${moveIndex} (${opis})`
      //
    } else {
      //description = 'Go to game start'

      const pocetniPotez = history[0].poslednjiPotez || {}

      const pocetniOpis = (pocetniPotez.red !== undefined && pocetniPotez.kolona !== undefined) ? `row: ${pocetniPotez.red}, col: ${pocetniPotez.kolona}` : 'Start'

      description = `Go to game start (${pocetniOpis})`
    }
    //
    const imeKlase = moveIndex === currentMove ? 'selektovani-potez' : ''
    //
    return (
      <>
        {/* <li key={moveIndex}> */}
        <li key={moveIndex} className={imeKlase}>
          <button onClick={() => setCurrentMove(moveIndex)}>{description}</button>
        </li>
      </>
    );
  });

  //function handlePlay(nextSquares) {
  function handlePlay(nextSquares, poslednjiPotez) {
    //
    //const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    const nextHistory = [...history.slice(0, currentMove + 1), {
      squares: nextSquares,
      poslednjiPotez
    }]
    //
    setHistory(nextHistory)
    setCurrentMove(nextHistory.length - 1)
  }

  return (
    <>
      <h2>New Syntax</h2>
      <div className="game">
        <div className="game-board">
          <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        </div>
        <div className="game-info">
          {/*  */}
          <button onClick={promeniRedosledSortiranja}>{uzlaznoSortiranje ? 'Uzlazno sortiranje' : 'Silazno sortiranje'}</button>
          {/*  */}
          <ol>{moves}</ol>
        </div>
      </div>
    </>
  );
}