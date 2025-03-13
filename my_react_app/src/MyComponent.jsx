import React, {useState} from "react"

function MyComponent(){
    const [name, setName] = useState();
      
    const updateName = ()=> {
        setName(`Toby`)
    }

    return( <div>
        <p>Name: {name}</p>
        <button onClick={updateName}> Set Name</button>
    </div> )
}
export default MyComponent