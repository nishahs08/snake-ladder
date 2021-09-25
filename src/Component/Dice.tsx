interface DiceProps {
	dice: number;
}
export const Dice: React.FC<DiceProps> = ({ dice }) => {

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

	
	return (
		<>
			<div style={{...style.container,flexDirection:'column'}}>
			{dice === 6 && (		
					<h3>One more chance</h3>		
			)}
				<div>
					<div style={{ ...style.dice, flexWrap: 'wrap' }}>
						{new Array(dice).fill(0).map((num) => (
							<div style={style.diceDots}></div>
						))}
					</div>
				</div>
			</div>
		
		</>
	);
};
