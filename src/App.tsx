import { useEffect } from 'react'

import './App.css'
import { useMovementsGame, useValidatedWinner } from './hooks';
import { fireworks } from './utils/fireworks';

function App() {

  const {
    movements,
    onChangeKey,
    resetMovements
  } = useMovementsGame();

  const {    
    playerWin,
    cpuWin,
    validatePlayerWin,
    validateCPUWin,
    validateTieGame,
    tieGame,
    resetGame
  } = useValidatedWinner(movements);


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
          <div className="win" style={{ color: 'rgb(0, 248, 0)' }}>
            <h1>¡HAS GANADO!</h1>
            <button onClick={ resetAllGame }>Volver a jugar</button>
          </div>
        )
      }
      {
        cpuWin && (
          <div className="win" >
            <h1 style={{ color: 'red' }}>¡HAS PERDIDO!</h1>
            <button onClick={ resetAllGame }>Volver a jugar</button>
          </div>
        )
      }
      {
        tieGame && !playerWin && (
          <div className="win" >
            <h1 style={{ color: 'white' }}>¡EMPATE!</h1>
            <button onClick={ resetAllGame }>Volver a jugar</button>
          </div>
        )
      }
      <h1>TRES EN RAYA <strong style={{color: 'rgb(0, 248, 0)'}}>X</strong> / <strong style={{color: 'red'}}>O</strong></h1>
      <div className="container">
        {
          movements.map((item, i) => (
            <div 
              className={item === 'X' ? 'select-player' : 'select-cpu'} 
              key={i} 
              onClick={() => 
              item === '' && onChangeKey(i)
            }
            >
              <span>{item}</span>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default App
