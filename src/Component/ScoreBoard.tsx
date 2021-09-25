import { IPlayer } from '../types';

interface ScoreBoardProps {
	editPlayerName: (defaultName: string, newName: string) => void;
	playerA: IPlayer;
	playerB: IPlayer;
	lastChance: string;
    dice: number;
	setDice: (value: number) => void;
	setCurrentPlayer: (value: string) => void;
}
export const ScoreBoard: React.FC<ScoreBoardProps> = ({
	editPlayerName,
	playerA,
	playerB,
	lastChance,
    dice,
    setDice,
    setCurrentPlayer
}) => {
	const style = {
		header: {
			display: 'flex',
			backgroundColor: '#c74545',
			color: '#fff',
			width: '600px',
			padding: '10px',
			justifyContent: 'space-around',
			alignItems: 'center',
		},
		titleText: {
			letterSpacing: '2px',
			fontWeight: 400,
		},
		content: {
			backgroundColor: '#e8e7e7',
			color: '#000',
			display: 'flex',
		},
		footer: {
			backgroundColor: ' #c74545',
			color: '#fff',
		},
		info: {
			display: 'flex',
			justifyContent: 'space-around',
			alignItems:'center',
			padding: '20px',
			fontSize: '24px',
			height:'50px',
		},
		textInput: {
			flexGrow: 1,
			borderWidth: '0 0 1px 0',
			margin: '15px 10px 15px 15px',
			padding: '10px',
			borderRadius: '5px',
			backgroundColor: '#ac4444',
			borderStyle: 'none',
			textShadow: 'none',
			textTransform: 'uppercase',
			color: '#f5eded',
			letterSpacing: '2px',
			outline: 'none',
			
		},
		playerColor:{
			width:'30px',
			height:'30px',

		},
		btn:{
			width:'100px',
			height:'50px',
			background:' #c74545',
			color:'#fff',
			border:'2px solid #fff',
			cursor:'pointer'
		}
	};
    const handleRoll = () => {
		let x = Math.floor(Math.random() * 6 + 1);
		setDice(x);
		if (dice !== 6) {
			lastChance=== 'A' ? setCurrentPlayer('B') : setCurrentPlayer('A');
		} else {
			lastChance=== 'A' ? setCurrentPlayer('A') : setCurrentPlayer('B');
		}
	};
	return (
		<div>
			<div style={style.header}>
				<div>
					<div>
						<h4 style={style.titleText}>PLAYERS : 2</h4>
						<h4 style={style.titleText}>
							LAST CHANCE :{' '}
							{lastChance === ''
								? 'NONE'
								: lastChance === 'A'
								? playerA.name
								: playerB.name}
						</h4>
					</div>
				</div>
				<div>
					<div>
						<h1 style={style.titleText}>SCORE BOARD</h1>
					</div>
				</div>
				<div>
					<div>
						<h6 style={style.titleText}>TIMER</h6>
						<h2 style={style.titleText}>876</h2>
					</div>
				</div>
			</div>
			<div style={{ ...style.content, flexDirection: 'column' }}>
				<div style={style.info}>
					<div>POSITION</div>
				</div>
				<div style={style.info}>
					<input
						value={playerA.name}
						onChange={(e) => editPlayerName('A', e.target.value)}
					/>
						<div style={{...style.playerColor,background:playerA.color}}></div>
					<div>{playerA.curr_position}</div>
                    <div style={{width:'100px'}}> { lastChance==='B'  && <button style={style.btn} onClick={handleRoll} >ROLL</button>}</div>
				</div>
				<div style={style.info}>
					<input
						value={playerB.name}
						onChange={(e) => editPlayerName('B', e.target.value)}
					/>
					<div style={{...style.playerColor,background:playerB.color}}></div>
					<div>{playerB.curr_position}</div>
                    <div style={{width:'100px'}}> { lastChance==='A' && <button style={style.btn} onClick={handleRoll}>ROLL</button>}</div>
				</div>
			</div>
		</div>
	);
};
