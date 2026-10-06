# Tic-Tac-Toe in React: classes vs. hooks

The classic React tutorial game, built twice and shown side by side:
with class components (`old-syntax`) and with function components and hooks (`new-syntax`).
Based on the [official React tutorial](https://react.dev/learn/tutorial-tic-tac-toe).
I implemented the improvements the tutorial suggests as exercises, in both syntaxes,
to compare how the same features look in each approach.

## Features (both versions)
- Move history with time travel ("Go to move #N")
- Location of each move as (row, col), selected move in bold
- Board rendered with two nested loops instead of hard-coded squares
- Ascending/descending toggle for the move list
- Winning line highlighted, draw detected

## Class components vs. hooks
| Concept | `old-syntax` | `new-syntax` |
|---|---|---|
| State | `this.state` object in the constructor, updated with `setState` | one `useState` per piece of state (`history`, `currentMove`, sort order) |
| Derived values | `xIsNext` stored in state and kept in sync inside `jumpTo` | `xIsNext = currentMove % 2 === 0`, no extra state |
| Lifting state up | `OldGame` owns the state, `OldBoard` is a presentational component | `Game` owns the state, `Board` receives `squares`, `xIsNext`, `onPlay` |
| Event handlers | class methods called via arrow functions | functions in component scope |
| Status / draw message | computed in `OldGame` | computed in `Board` |

## Build steps (snapshots)
The numbered files show how each version evolved. They are not used by the app.
| Step | `new-syntax` | `old-syntax` |
|---|---|---|
| 1. State inside the board | `Board0`, `Board1` | `OldBoard0` |
| 2. State lifted to the game | `Board2`, `Game0` (history + time travel) | `OldBoard1`, `OldGame0` |
| 3. Move location, sorting, loops | `Board3`, `Game1` | `OldBoard2`, `OldGame1` |
| 4. Final: winning line, draw | `Board`, `Game`, `Square` | `OldBoard`, `OldGame`, `OldSquare` |

## Run
```
npm install
npm start    # Create React App, React 18
```

## Credits
Tutorial: react.dev
Extensions and class-component port: Jelena Mladenović
License: MIT
