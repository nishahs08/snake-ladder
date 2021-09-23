import React, { useState, useEffect } from 'react';
import { Dice } from './Component/Dice';
import { GameBoard } from './Component/GameBoard';
import { ScoreBoard } from './Component/ScoreBoard';
import { IPlayer } from './types';

const ladders = [
	{ tail: 4, head: 14 },
	{ tail: 9, head: 31 },
	{ tail: 21, head: 42 },
	{ tail: 28, head: 84 },
	{ tail: 51, head: 67 },
	{ tail: 72, head: 91 },
	{ tail: 80, head: 99 },
];
const snakes = [
	{ head: 17, tail: 7 },
	{ head: 54, tail: 34 },
	{ head: 62, tail: 19 },
	{ head: 64, tail: 60 },
	{ head: 87, tail: 36 },
	{ head: 92, tail: 72 },
	{ head: 95, tail: 75 },
	{ head: 98, tail: 79 },
];

function App() {
	const [playerA, setPlayerA] = useState<IPlayer>({
		name: 'A',
		curr_position: 0,
	});
	const [playerB, setPlayerB] = useState<IPlayer>({
		name: 'B',
		curr_position: 0,
	});
	const [dice, setDice] = useState<number>(0);
	const [currentPlayer, setCurrentPlayer] = useState<string>('');
	const [winner, setWinner] = useState('');

	const moveOnBoard = () => {
		let next_position =
			currentPlayer === 'A' ? playerA.curr_position + dice : playerB.curr_position + dice;
		if (next_position > 100) {
			next_position = currentPlayer === 'A' ? playerA.curr_position : playerB.curr_position;
		} else if (next_position === 100) {
			setWinner(currentPlayer);
			alert('winner');
			currentPlayer === 'A'
				? setPlayerA({ ...playerA, curr_position: next_position })
				: setPlayerB({ ...playerB, curr_position: next_position });
		} else {
			const snakeIndex = snakes.findIndex((snake) => snake.head === next_position);
			const ladderIndex = ladders.findIndex((ladder) => ladder.tail === next_position);
			if (snakeIndex !== -1) {
				currentPlayer === 'A'
					? setPlayerA({ ...playerA, curr_position: snakes[snakeIndex].tail })
					: setPlayerB({ ...playerB, curr_position: snakes[snakeIndex].tail });
			} else if (ladderIndex !== -1) {
				currentPlayer === 'A'
					? setPlayerA({ ...playerA, curr_position: ladders[ladderIndex].head })
					: setPlayerB({ ...playerB, curr_position: ladders[ladderIndex].head });
			} else {
				currentPlayer === 'A'
					? setPlayerA({ ...playerA, curr_position: next_position })
					: setPlayerB({ ...playerB, curr_position: next_position });
			}
		}
	};

	const restart = () => {
		setPlayerA({
			name: 'A',
			curr_position: 0,
		});
		setPlayerB({
			name: 'B',
			curr_position: 0,
		});
		setDice(0);
		setCurrentPlayer('');
		setWinner('');
	};

	useEffect(() => {
		moveOnBoard();
	}, [dice, currentPlayer]);

	return (
		<div style={{ display: 'flex', justifyContent: 'space-around' }}>
			<GameBoard
				ladders={ladders}
				snakes={snakes}
				playerA={playerA.curr_position}
				playerB={playerB.curr_position}
			/>
			<div style={{ display: 'flex', flexDirection: 'column' }}>
				<ScoreBoard
					playerA={playerA}
					playerB={playerB}
					editPlayerName={(oldName, newName) =>
						oldName === 'A'
							? setPlayerA({ ...playerA, name: newName })
							: setPlayerB({ ...playerB, name: newName })
					}
					lastChance={currentPlayer}
				/>
				<Dice
					dice={dice}
					setDice={setDice}
					currentPlayer={currentPlayer}
					setCurrentPlayer={setCurrentPlayer}
				/>

				<div style={{ width: '100%', margin: 'auto', textAlign: 'center' }}>
					<button onClick={restart}>
						<h3>Restart Game</h3>
					</button>
				</div>

				{winner && (
					<div>
						<h4>{winner === 'A' ? playerA.name : playerB.name} IS WINNER</h4>
					</div>
				)}
			</div>
		</div>
	);
}

export default App;
