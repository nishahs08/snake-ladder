interface DiceProps {
	dice: number;
	setDice: (value: number) => void;
	currentPlayer: string;
	setCurrentPlayer: (value: string) => void;
}
export const Dice: React.FC<DiceProps> = ({ dice, setDice, currentPlayer, setCurrentPlayer }) => {
	const numberOnDice = 5;
	const style = {
		container: {
			backgroundColor: '#c74545',
			color: '#fff',
			width: '600px',
			padding: '10px',
			display: 'flex',
			justifyContent: 'space-around',
			alignItems: 'center',
		},
		diceContainer: {},
		dice: {
			width: '100px',
			height: '100px',
			backgroundColor: '#fff',
			display: 'flex',
			justifyContent: 'space-around',
			alignItems: 'center',
		},
		diceDots: {
			width: '15px',
			height: '15px',
			backgroundColor: 'blue',
			margin: '10px',
		},
	};

	const handleRoll = () => {
		let x = Math.floor(Math.random() * 6 + 1);
		setDice(x);
		if (dice !== 6) {
			currentPlayer === 'A' ? setCurrentPlayer('B') : setCurrentPlayer('A');
		} else {
			currentPlayer === 'A' ? setCurrentPlayer('A') : setCurrentPlayer('B');
		}
	};
	return (
		<>
			<div style={style.container}>
				<div>
					<div style={{ ...style.dice, flexWrap: 'wrap' }}>
						{new Array(dice).fill(0).map((num) => (
							<div style={style.diceDots}></div>
						))}
					</div>
				</div>
				<div>
					<button onClick={handleRoll}>Roll</button>
				</div>
			</div>
			{dice === 6 && (
				<div>
					<h3>One more chance</h3>
				</div>
			)}
		</>
	);
};
