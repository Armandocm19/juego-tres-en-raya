import { useEffect } from 'react'

import './App.css'
import { useMovementsGame, useValidatedWinner } from './hooks';
import { fireworks } from './utils/fireworks';
import { FinishGameMessage, HomePageGame } from './components';

function App() {

  const { movements, onChangeMovements, resetMovements } = useMovementsGame();

  const {    
    stateGamesMode,
    validatePlayerWin,
    validateCPUWin,
    validateTieGame,
    resetGame
  } = useValidatedWinner(movements);

  const { playerWin, cpuWin, tieGame } = stateGamesMode;

  useEffect(() => {
    validateTieGame();
    validateCPUWin();
    validatePlayerWin();

    if(playerWin){
      fireworks();
    }
  }, [movements, playerWin, cpuWin, tieGame]);

  const resetAllGame = () => {
    resetMovements();
    resetGame(); 
  }

  return (
    <section className="App">
      {
        playerWin && (
          <FinishGameMessage colorMessage='rgb(0, 248, 0)' reset={resetAllGame} message='¡HAS GANADO!' />
        )
      }
      {
        cpuWin && (
          <FinishGameMessage colorMessage='red' reset={resetAllGame} message='¡HAS PERDIDO!' />
        )
      }
      {
        tieGame && !playerWin && (
          <FinishGameMessage colorMessage='white' reset={resetAllGame} message='EMPATE' />
        )
      }
      <HomePageGame movements={movements} onChangeMovements={onChangeMovements} />
    </section>
  )
}

export default App
