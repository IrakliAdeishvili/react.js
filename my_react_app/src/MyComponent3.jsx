import React, {useState} from "react"
//     APDATE ARRAYS


function MyComponent3(){
  
    const [foods,setFoods] = useState([`apple`, `orange`, `banana`])
    
    function handaleAddFood(){
      const newFood = document.getElementById("foodInput").value;
      document.getElementById("foodInput").value = "";
      setFoods(f => [...f, newFood]);
    }

    function handalRemoveFood(){
        setFoods(foods.filter((_, i)=>i !== index));

    }

    return(<div>
        <h2>List of Food</h2>
        <ul>
            {foods.map((food, index) =>
                 <li key={index} onClick={() => handalRemoveFood(index)}>
                {food}</li> )}
        </ul>
        <input type="text" id="foodInput"  placeholder="Enter food name"/>
        <button onClick={handaleAddFood}>Add Food</button>
    </div>)

}   
export default MyComponent3