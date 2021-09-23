import { player } from "../types"

interface ScoreBoardProps {
    editPlayerName: (defaultName: string, newName: string) => void,
    playerA:player,
    playerB:player,
    lastChance:string
}
export const ScoreBoard:React.FC<ScoreBoardProps> = ({editPlayerName,playerA,playerB,lastChance}) => {
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
            backgroundColor: '#c74545',
            color: '#fff',
        },
        info: {
            display: 'flex',
            justifyContent: 'space-around',
            padding: '20px',
            fontSize: '24px',
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
    }
    return (
        <div>
            <div style={style.header}>
                <div>
                    <div>
                        <h4 style={style.titleText}>PLAYERS : 2</h4>
                        <h4 style={style.titleText}>LAST CHANCE : {lastChance === '' ? 'NONE' :lastChance === 'A' ? playerA.name : playerB.name}</h4>
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
                    <input value={ playerA.name} onChange={(e)=>editPlayerName('A',e.target.value)}/>
                    <div>{playerA.curr_position}</div>
                </div>
                <div style={style.info}>
                <input value={ playerB.name} onChange={(e)=>editPlayerName('B',e.target.value)}/>
                    <div>{playerB.curr_position}</div>
                </div>
            </div> 
        </div>
    )
}
