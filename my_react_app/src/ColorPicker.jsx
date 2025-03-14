import React,{useState} from "react"

function ColorPicker(){
    const [color, setColor] = useState("#FFFFFF");

    function handleColorChange(event){
        setColor(event.target.value);
    }

    return( 
    <div className="color-picker-conteiner">
        <h1>Color picker</h1>
        <div className="color-display" style={{backgroundColor: color}}>
            <p>Select Color: {color}</p>
        </div>
        <label>Select a Color</label>
        <input type="color" value={color} onChange={handleColorChange} />
    </div> )
}
export default ColorPicker