import { winConditions } from "../services/winConditions";

export const getTurnIntelligence = ( arrayState : string[] ) => {
    for (let i = 0; i < winConditions.length; i++) {
        let [a, b, c] = winConditions[i];
        if (arrayState[a] === 'X' && arrayState[b] === 'X' && arrayState[c] !== 'O' && arrayState[c] !== 'X') {
          arrayState[c] = 'O';
          break;
        }
        if (arrayState[a] === 'X' && arrayState[c] === 'X' && arrayState[b] !== 'O' && arrayState[b] !== 'X') {
          arrayState[b] = 'O';
          break;
        }
        if (arrayState[b] === 'X' && arrayState[c] === 'X' && arrayState[a] !== 'O' && arrayState[a] !== 'X') {
          arrayState[a] = 'O';
          break;
        }
      }
      return arrayState;
}