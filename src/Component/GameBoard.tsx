import { ILadder, IPlayer, ISnake } from '../types';

interface GameBoardProps {
	snakes: ISnake[];
	ladders: ILadder[];
	playerA: IPlayer;
	playerB: IPlayer;
	tileColor:string
}

const width = 800;

const style = {
	ladder: {
		backgroundColor: '#7cb342',
		color: 'white',
	},
	snake: {
		backgroundColor: '#d32f2f',
		color: 'white',
	},
	container: {
		width: width,
		height: width,
		display: 'flex',
		flexWrap: 'wrap',
	},
};
export const GameBoard: React.FC<GameBoardProps> = ({ snakes, ladders, playerA, playerB ,tileColor}) => {
	let counter = 0;
	let rowCheck = 1;
	let tiles: number[] = [];
	for (let i = 100; i > 0; i = i - 10) {
		if (rowCheck % 2 !== 0) {
			for (let j = i; j > i - 10; j--) {
				tiles[counter++] = j;
			}
		} else {
			for (let k = i - 9; k <= i; k++) {
				tiles[counter++] = k;
			}
		}
		rowCheck++;
	}
	console.log(tiles);

	return (
		<>
			<div
				style={{
					width: width,
					height: width,
					display: 'flex',
					flexWrap: 'wrap',
				}}
			>
				{tiles.map((tile) => {
					const snakeIndex = snakes.findIndex(
						(snake) => snake.tail === tile || snake.head === tile
					);
					const isSnake = snakeIndex !== -1;
					const ladderIndex = ladders.findIndex(
						(ladder) => ladder.tail === tile || ladder.head === tile
					);
					const isLadder = ladderIndex !== -1;
					return (
						<>
							<div
								style={{
									width: `${width / 10 - 2}px`,
									height: `${width / 10 - 2}px`,
									border: '.2px solid #000',
									backgroundColor:
										playerA.curr_position === tile
											? playerA.color
											: playerB.curr_position === tile
											? playerB.color
											: tileColor,
								}}
							>
								{playerA.curr_position === tile
									? 'player_A'
									: playerB.curr_position === tile
									? 'player_B'
									: tile}

								{isSnake ? (
									<div
										style={{
											width: `${width / 10 - 30}px`,
											height: `${width / 10 - 30}px`,
											position: 'relative',
											backgroundColor: '#ff5555',
											margin: 'auto',
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
										}}
									>
										{snakeIndex + 1}
									</div>
								) : isLadder ? (
									<div
										style={{
											width: `${width / 10 - 30}px`,
											height: `${width / 10 - 30}px`,
											position: 'relative',
											backgroundColor: '#a9dc76',
											margin: 'auto',
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
										}}
									>
										{ladderIndex + 1}
									</div>
								) : null}
							</div>
						</>
					);
				})}
			</div>
		</>
	);
};
