import { winConditions } from "../services/winConditions";

//La siguiente funciónd detecta si el usuario tiene una posibilidad de ganar
//Ya que según las 'winConditions' él detecta si el usuario tiene más de dos equiz a su favor
//De ser así devuelve true, para que de esta manera el próximo movimiento de la máquina no sea random
//sino que será inteligente y pondrá una ficha en el lugar que puede evitar el gane del usuario.

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