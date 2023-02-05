import { useState } from "react";

import { getTurnRandomCPU, getTurnIntelligence } from "../utils";

export const INITIAL_VALUE_GAME = ['','','','','','','','','']

export const useMovementsGame = () => {

    const [movements, setMovements] = useState<string[]>(INITIAL_VALUE_GAME);

    const resetMovements = () => {
      setMovements(INITIAL_VALUE_GAME);
    }
    
    const turnCPU = () => {
      setMovements(prev => {
        let newState = getTurnIntelligence([...prev]);
        return newState;
      });
    };

    const onChangeMovements = (position: number) => {
      setMovements(prev => {
        let newState = [...prev];
        newState[position] = 'X';
  
        let movementState;
        let positionRandom = Math.floor( Math.random() * (8 - 0) + 0);;
        let stopBucle = 0;
        let validate;
  
        while (stopBucle === 0) {
          if (newState.every(el => el === "X" || el === "O")) {
            stopBucle = 1;
            break;
        }
  
        movementState = newState[positionRandom];

        if (movementState === '') {

          validate = getTurnRandomCPU(newState) //Valida si el movimiento del cpu debe ser random o no
          if( validate ){
              turnCPU();
              break;
          }else{
              newState[positionRandom] = 'O';
          }
          stopBucle = 1;

        } else {
            positionRandom = Math.floor(Math.random() * (8 - 0) + 0);
        }
      }
        return newState;
      })
  }

    return {
        movements,
        onChangeMovements,
        resetMovements
    }

}