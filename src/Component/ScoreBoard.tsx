export const ScoreBoard =()=>{
    const style={
        header:{
            display:'flex',
            backgroundColor: '#c74545',
            color:'#fff',
            width:'600px',
            padding:'10px',
            justifyContent:'space-around',
            alignItems:'center'

        },
        titleText:{
            letterSpacing: '2px',
            fontWeight: 400, 
        },
        content:{
            backgroundColor: '#e8e7e7',
            color:'#000',
            display:'flex',
           
        },
        footer:{
            backgroundColor: '#c74545',
            color:'#fff',
        },
        info:{
            display:'flex',
            justifyContent:'space-around',
            padding:'20px',
            fontSize:'24px'
        },
        textInput : {
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
          }

    }
    return(
        <div>
            <div style={style.header}>
                <div><div><h4 style={style.titleText}>PLAYERS : 2</h4><h4 style={style.titleText}>TOTAL POINTS : 2</h4></div></div>
                <div><div><h1 style={style.titleText}>SCORE BOARD</h1></div></div>
                <div><div><h6 style={style.titleText}>TIMER</h6><h2 style={style.titleText}>876</h2></div></div>
            </div>
            <div style={{...style.content, flexDirection:"column"}}>
            <div style={style.info}> 
                    <div>POSITION</div>
                </div>
                <div style={style.info}> 
                    <div>Player A</div><div>67</div>
                </div>
                <div style={style.info}> 
                    <div>Player B</div><div>67</div>
                </div>
            </div>
            <div style={style.footer}>Winner</div>
            <div style={style.footer}>   <form >
                <input 
                    type="text"
                    placeholder="Enter a player name"
                    style={{ flexGrow: 1,
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
                        outline: 'none',}}
                />
                <input 
                    type="submit"
                    value="Add Player"
                    style={{display: 'block',
                        fontSize: '.6em',
                        margin: '15px 15px 15px 0', 
                        padding: '10px',
                        backgroundColor: '#ac4444',
                        borderRadius: '5px',
                        border: 'none',
                        color: '#fff'}}
                />
            </form></div>
        </div>
    )
}