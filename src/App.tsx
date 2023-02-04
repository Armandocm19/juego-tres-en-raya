import { useEffect } from 'react'

import confetti from 'canvas-confetti'

import './App.css'
import { useMovementsGame } from './hooks/useMovementsGame';
import { fireworks } from './utils/fireworks';

function App() {

  const {
    select,
    onChangeKey,
    playerWin,
    cpuWin,
    validatePlayerWin,
    validateCPUWin,
    validateTieGame,
    tieGame,
    resetGame} = useMovementsGame();

  useEffect(() => {
    validatePlayerWin();
    validateCPUWin();
    validateTieGame();

    if(playerWin){
      fireworks();
    }
  }, [select, playerWin, cpuWin]);


  return (
    <section className="App">
      {
        playerWin && (
          <div className="win" style={{ color: 'rgb(0, 248, 0)' }}>
            <h1>¡HAS GANADO!</h1>
            <button onClick={ resetGame }>Volver a jugar</button>
          </div>
        )
      }
      {
        cpuWin && (
          <div className="win" >
            <h1 style={{ color: 'red' }}>¡HAS PERDIDO!</h1>
            <button onClick={ resetGame }>Volver a jugar</button>
          </div>
        )
      }
      {
        tieGame && (
          <div className="win" >
            <h1 style={{ color: 'white' }}>¡EMPATE!</h1>
            <button onClick={ resetGame }>Volver a jugar</button>
          </div>
        )
      }
      <h1>TRES EN RAYA <strong style={{color: 'rgb(0, 248, 0)'}}>X</strong> / <strong style={{color: 'red'}}>O</strong></h1>
      <div className="container">
        {
          select.map((item, i) => (
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
