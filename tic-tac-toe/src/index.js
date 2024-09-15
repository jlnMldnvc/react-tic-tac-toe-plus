import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import Game from "./components/new-syntax/game/Game";
//import { OldBoard } from "./components/old-syntax/OldBoard";
import OldGame from "./components/old-syntax/old-game/OldGame";
//import ShoppingList from "./components/ShoppingList.js";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Game />
    <hr />
    {/* <ShoppingList name="Mark" /> */}
    {/* <OldBoard /> */}
    <OldGame />
  </StrictMode>
);