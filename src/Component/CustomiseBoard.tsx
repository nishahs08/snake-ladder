
import tick from "../tick.png"
const boardColor : string[]= [ '#AABFC9','#DFECFE','#eae8e8','#F3f3f3',' #6A737D','#FFFFFF'];
const player :string[]=['#3A66D1','#22863a','#44475A',' #FF79C5','#ffd866','#ff6188']
const style={
    container:{
        display:'flex',
        flexDirection:'column',
        
    },
    colorPalleteWrapper:{
        display:'flex',
        width:'600px',
        justifyContent:'space-between',
        alignItems:'center'
    },
    colorPallete:{
        display:'flex',

    },
    colorBox:{
        width:'40px',
        height:'40px',
        radius:'10px',
        border:'.5px solid #E7E7E8',
        cursor:'pointer'
    },
    icon:{
        width:'100%',
        height:'100%'
    }
}

interface CustomiseBoardProps{
    selectedBoardColor:string,
    selectedColorForPlayerA:string,
    selectedColorForPlayerB:string,
    setSelectedBoardColor:(value:string)=>void,
    setSelectedColorForPlayerA:(value:string)=>void,
    setSelectedColorForPlayerB:(value:string)=>void
}
export const CustomiseBoard :React.FC<CustomiseBoardProps>= ({selectedBoardColor,selectedColorForPlayerA,selectedColorForPlayerB,setSelectedBoardColor, setSelectedColorForPlayerA, setSelectedColorForPlayerB}) =>{
 

    const colorsAvailableForPlayerA = player.filter(color=>(color !== selectedColorForPlayerB) );
    const colorsAvailableForPlayerB = player.filter(color=>(color !== selectedColorForPlayerA) )
    return (
        <div style={{display:'flex',
        flexDirection:'column',justifyContent:'space-between',height:'150px'}}>
            <div style={style.colorPalleteWrapper}>
                <div>Choose Board Color</div>
                <div style={style.colorPallete}>
                    {boardColor.map((color)=><div style={{...style.colorBox,backgroundColor:color}} onClick={()=>setSelectedBoardColor(color)}>{color === selectedBoardColor && <img src={tick} style={style.icon} alt=''/>}</div>)}      
                </div>
            </div>
            <div style={style.colorPalleteWrapper}>
                <div>Choose Player A Color</div>
                <div style={style.colorPallete}>
                    {colorsAvailableForPlayerA.map((color)=><div style={{...style.colorBox,backgroundColor:color}} onClick={()=>setSelectedColorForPlayerA(color)}>{color === selectedColorForPlayerA && <img src={tick} style={style.icon} alt=''/>}</div>)}      
                </div>
            </div>
            <div style={style.colorPalleteWrapper}>
                <div>Choose Player B Color</div>
                <div style={style.colorPallete}>
                    {colorsAvailableForPlayerB.map((color)=><div style={{...style.colorBox,backgroundColor:color}} onClick={()=>setSelectedColorForPlayerB(color)}>{color === selectedColorForPlayerB && <img src={tick} style={style.icon} alt=''/>}</div>)}      
                </div>
            </div>
        </div>
    )
}