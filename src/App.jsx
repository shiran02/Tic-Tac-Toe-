import Player from "./components/Player"
import GameBoard from "./components/GameBoard.jsx"
import { useState } from "react";
import Log from "./components/Log.jsx";
import { WINNING_COMBINATIONS } from "./winning-combinations.jsx";


function deriveActiveplayer(gameTurns){
  let currentPlyer = 'X';

  if(gameTurns.length > 0 && gameTurns[0].player === 'X'){
    currentPlyer = '0';
  }

  return currentPlyer;
}


function App() {

  const [gameTurns , setGameTurns] =  useState([]);
  
  // const [activePlayer,setActivePlayer] = useState('X');

  
  const activePlayer = deriveActiveplayer(gameTurns);

  function handleSelectSquare(rowIndex,colIndex){
    //setActivePlayer((curActivePlayer)=> curActivePlayer === 'X' ? 'O' : 'X');
    setGameTurns(prevTurns=>{

      const currentPlyer = deriveActiveplayer(prevTurns);

      const updatedTurns = [
        {square:{row : rowIndex,col : colIndex},player: currentPlyer },...prevTurns];

      return updatedTurns;
    });
  }

  return (
    <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
              <Player initialName="Player 1" symbol="X" isActive={activePlayer==="X"}/>
              <Player initialName="Player 2" symbol="O" isActive={activePlayer==="O"}/>
          </ol>
          <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns}/>
        </div>
        <Log turns={gameTurns}/>
    </main>
  );
}

export default App
