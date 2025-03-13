import React, {useState} from "react"

// UPDATE OBJACTS

function MyComponent2 (){

    const [car, setCar] = useState({Year: 2024,
                                    Make: `Marcedes`,
                                    Model: `C63-AMG` });


    function handleYaerChange(event){
        setCar( c => ({...c, year: event.target.value}));
    }                                
    function handleMakeChange(event){
        setCar( c => ({...c, Make: event.target.value}));
    }                                
    function handleModelChange(event){
        setCar( c => ({...c, Model: event.target.value}));
    }                                
  return(
    <div>
        <p>Your favorite car is: {car.Year} {car.Make} {car.Model} </p>

        <input type="number" value={car.Year} onChange={handleYaerChange}/><br />
        <input type="text" value={car.Make} onChange={handleMakeChange}/><br />
        <input type="text" value={car.Model} onChange={handleModelChange}/><br />
    </div>
  )
}
export default MyComponent2