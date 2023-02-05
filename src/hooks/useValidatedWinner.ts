import { useState } from 'react';

import { winConditions } from "../services/winConditions";

interface Props {
  tieGame: boolean,
  playerWin: boolean,
  cpuWin: boolean,
}

const INITIAL_STATE_GAMES_MODE = {
  tieGame: false,
  playerWin: false,
  cpuWin: false,
}

export const useValidatedWinner = ( movements: string[] ) => {

    const [stateGamesMode, setStateGamesMode] = useState<Props>(INITIAL_STATE_GAMES_MODE);

    const resetGame = () => {
      setStateGamesMode(INITIAL_STATE_GAMES_MODE);
      }

      const validateTieGame = () => {
        const { playerWin, cpuWin } = stateGamesMode;
        if(!playerWin &&!cpuWin && movements.every(el => el === 'X' || el === 'O')){
          setStateGamesMode( prev => ({
            ...prev,
            tieGame: true
          }));
        };
      }
  
      const validatePlayerWin = () => {
          for (let i = 0; i < winConditions.length; i++) {
            let [a, b, c] = winConditions[i];
            if (movements[a] === 'X' && movements[b] === 'X' && movements[c] === 'X') {
              setStateGamesMode( prev => ({
                ...prev,
                playerWin: true
              }));
            }
          }
        };
      
        const validateCPUWin = () => {
          for (let i = 0; i < winConditions.length; i++) {
            let [a, b, c] = winConditions[i];
            if (movements[a] === 'O' && movements[b] === 'O' && movements[c] === 'O') {
              setStateGamesMode( prev => ({
                ...prev,
                cpuWin: true
              }));;
            }
          }
        };

        return {
            stateGamesMode,
            validatePlayerWin,
            validateCPUWin,
            validateTieGame,
            resetGame
        }
}