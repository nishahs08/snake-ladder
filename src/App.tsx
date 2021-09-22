import React, { useState ,useEffect} from 'react';
import { GameBoard } from './Component/GameBoard';

const ladders = [
  { tail: 4, head: 14 },
  { tail: 9, head: 31 },
  { tail: 21, head: 42 },
  { tail: 28, head: 84 },
  { tail: 51, head: 67 },
  { tail: 72, head: 91 },
  { tail: 80, head: 99 }
]
const snakes = [
  { head: 17, tail: 7 },
  { head: 54, tail: 34 },
  { head: 62, tail: 19 },
  { head: 64, tail: 60 },
  { head: 87, tail: 36 },
  { head: 92, tail: 72 },
  { head: 95, tail: 75 },
  { head: 98, tail: 79 },
]

let rowCheck = 1;
let tiles: number[] = [];
for (let i = 100; i > 0; i = i - 10) {
    if (rowCheck % 2 !== 0) {
        for (let j = i; j > i - 10; j--) {
            tiles[rowCheck++] = j
        }
    } else {
        for (let k = i - 9; k < i; k++) {
            tiles[rowCheck++] = k
        }
    }
}


function App() {
  const [PlayerA,setPlayerA]=useState(1)
  let count=5;

  return (
  <GameBoard ladders={ladders} snakes={snakes} playerA={PlayerA}/>
  );
}

export default App;
