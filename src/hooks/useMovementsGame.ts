import { useState } from "react";

import { winConditions } from "../services/winConditions";
import { getTurnRandomCPU, getTurnIntelligence } from "../utils";

const INITIAL_VALUE_GAME = ['','','','','','','','','']

export const useMovementsGame = () => {

    const [tieGame, setTieGame] = useState<boolean>(false);
    const [playerWin, setPlayerWin] = useState<boolean>(false);
    const [cpuWin, setCpuWin] = useState<boolean>(false);
    const [select, setSelect] = useState<string[]>(INITIAL_VALUE_GAME);

    const resetGame = () => {
      setPlayerWin(false);
      setCpuWin(false);
      setTieGame(false);
      setSelect(INITIAL_VALUE_GAME)
    }

    const validateTieGame = () => {
      if(select.every(el => el === 'X' || el === 'O') && !playerWin && !cpuWin){
        setTieGame(true);
      };
    }

    const validatePlayerWin = () => {
        for (let i = 0; i < winConditions.length; i++) {
          let [a, b, c] = winConditions[i];
          if (select[a] === 'X' && select[b] === 'X' && select[c] === 'X') {
            setPlayerWin(true);
          }
        }
      };
    
      const validateCPUWin = () => {
        for (let i = 0; i < winConditions.length; i++) {
          let [a, b, c] = winConditions[i];
          if (select[a] === 'O' && select[b] === 'O' && select[c] === 'O') {
            setCpuWin(true);
          }
        }
      };
    
      const turnCPU = () => {
        
        setSelect(prev => {
          let newState = getTurnIntelligence([...prev]);
          return newState;
        });
    
      };

      const onChangeKey = (position: number) => {
        setSelect(prev => {
          let newState = [...prev];
          newState[position] = 'X';
    
          let keyState;
          let positionRandom = Math.floor( Math.random() * (8 - 0) + 0);;
          let stopBucle = 0;
          let validate;
    
          while (stopBucle === 0) {
            if (newState.every(el => el === "X" || el === "O")) {
              stopBucle = 1;
              break;
          }
    
          keyState = newState[positionRandom];
          if (keyState === '') {
            validate = getTurnRandomCPU(newState)
            if( validate ){
                turnCPU();
                break;
            }else{
                newState[positionRandom] = 'O';
            }
            stopBucle = 1;
          } else {
    
            validate = getTurnRandomCPU(newState)
            if( validate ){
                turnCPU();
                break;
            }else{
              positionRandom = Math.floor(Math.random() * (8 - 0) + 0);
            }
          }
        }
              return newState;
        })
    }

    return {
        select,
        resetGame,
        onChangeKey,
        playerWin,
        validateTieGame,
        tieGame,
        cpuWin,
        validatePlayerWin,
        validateCPUWin
    }

}