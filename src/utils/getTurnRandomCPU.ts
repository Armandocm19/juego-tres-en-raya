import { winConditions } from "../services/winConditions";

export const getTurnRandomCPU = (state : string[]) => {
    return winConditions.some((item, i) => {
        let [a, b, c] = winConditions[i];
        if (state[a] === 'X' && state[b] === 'X' && state[c] !== 'O' && state[c] !== 'X') {
          return true
        }
        if (state[a] === 'X' && state[c] === 'X' && state[b] !== 'O' && state[b] !== 'X') {
          return true
        }
        if (state[b] === 'X' && state[c] === 'X' && state[a] !== 'O' && state[a] !== 'X') {
          return true
        }
      })
}