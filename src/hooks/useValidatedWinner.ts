import { useState } from 'react';

import { winConditions } from "../services/winConditions";

export const useValidatedWinner = ( movements: string[] ) => {

    const [ tieGame, setTieGame ] = useState<boolean>(false);
    const [ playerWin, setPlayerWin ] = useState<boolean>(false);
    const [ cpuWin, setCpuWin ] = useState<boolean>(false);

    const resetGame = () => {
        setPlayerWin(false);
        setCpuWin(false);
        setTieGame(false);
      }

      const validateTieGame = () => {
        if(!playerWin && !cpuWin && movements.every(el => el === 'X' || el === 'O')){
          setTieGame(true);
        };
      }
  
      const validatePlayerWin = () => {
          for (let i = 0; i < winConditions.length; i++) {
            let [a, b, c] = winConditions[i];
            if (movements[a] === 'X' && movements[b] === 'X' && movements[c] === 'X') {
              setPlayerWin(true);
            }
          }
        };
      
        const validateCPUWin = () => {
          for (let i = 0; i < winConditions.length; i++) {
            let [a, b, c] = winConditions[i];
            if (movements[a] === 'O' && movements[b] === 'O' && movements[c] === 'O') {
              setCpuWin(true);
            }
          }
        };

        return {
            playerWin,
            cpuWin,
            validatePlayerWin,
            validateCPUWin,
            validateTieGame,
            tieGame,
            resetGame
        }
}