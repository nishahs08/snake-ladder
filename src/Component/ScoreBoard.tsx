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
        </div>
    )
}