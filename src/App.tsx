import React, { useState, useEffect } from 'react'
import { Dice } from './Component/Dice'
import { GameBoard } from './Component/GameBoard'
import { ScoreBoard } from './Component/ScoreBoard'
import { player } from './types'

const ladders = [
  { tail: 4, head: 14 },
  { tail: 9, head: 31 },
  { tail: 21, head: 42 },
  { tail: 28, head: 84 },
  { tail: 51, head: 67 },
  { tail: 72, head: 91 },
  { tail: 80, head: 99 },
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

function App() {
  const [PlayerA, setPlayerA] = useState<player>({
    name: 'A',
    curr_position: 0,
  })
  const [PlayerB, setPlayerB] = useState<player>({
    name: 'B',
    curr_position: 0,
  })
  const [dice, setDice] = useState<number>(0)
  const [currentPlayer, setCurrentPlayer] = useState<string>('')
  const [winner, setWinner] = useState('')

  const moveOnBoard = () => {
    let next_position =
      currentPlayer === 'A'
        ? PlayerA.curr_position + dice
        : PlayerB.curr_position + dice
    if (next_position > 100) {
      next_position =
        currentPlayer === 'A' ? PlayerA.curr_position : PlayerB.curr_position
    } else if (next_position === 100) {
      setWinner(currentPlayer)
      alert('winner')
      currentPlayer === 'A'
        ? setPlayerA({ ...PlayerA, curr_position: next_position })
        : setPlayerB({ ...PlayerB, curr_position: next_position })
    } else {
      const snakeIndex = snakes.findIndex(
        (snake) => snake.head === next_position,
      )
      const ladderIndex = ladders.findIndex(
        (ladder) => ladder.tail === next_position,
      )
      if (snakeIndex !== -1) {
        currentPlayer === 'A'
          ? setPlayerA({ ...PlayerA, curr_position: snakes[snakeIndex].tail })
          : setPlayerB({ ...PlayerB, curr_position: snakes[snakeIndex].tail })
      } else if (ladderIndex !== -1) {
        currentPlayer === 'A'
          ? setPlayerA({ ...PlayerA, curr_position: ladders[ladderIndex].head })
          : setPlayerB({ ...PlayerB, curr_position: ladders[ladderIndex].head })
      } else {
        currentPlayer === 'A'
          ? setPlayerA({ ...PlayerA, curr_position: next_position })
          : setPlayerB({ ...PlayerB, curr_position: next_position })
      }
    }
  }

  const restart = () => {
    setPlayerA({
      name: 'A',
      curr_position: 0,
    })
    setPlayerB({
      name: 'B',
      curr_position: 0,
    })
    setDice(0)
    setCurrentPlayer('')
    setWinner('')
  }

  useEffect(() => {
    moveOnBoard()
  }, [dice, currentPlayer])

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <GameBoard
        ladders={ladders}
        snakes={snakes}
        playerA={PlayerA.curr_position}
        playerB={PlayerB.curr_position}
      />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <ScoreBoard
          playerA={PlayerA}
          playerB={PlayerB}
          editPlayerName={(oldName, newName) =>
            oldName === 'A'
              ? setPlayerA({ ...PlayerA, name: newName })
              : setPlayerB({ ...PlayerB, name: newName })
          }
          lastChance={currentPlayer}
        />
        <Dice
          dice={dice}
          setDice={setDice}
          currentPlayer={currentPlayer}
          setCurrentPlayer={setCurrentPlayer}
        />

      
        <div style={{width:'100%',margin:'auto',textAlign:'center'}}>

          <button onClick={restart}><h3>Restart Game</h3></button>
        </div>

        {winner && (
          <div>
            <h4>{winner.toUpperCase()} IS WINNER</h4>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
