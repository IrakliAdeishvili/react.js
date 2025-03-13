import React, {useState} from "react"

function ToDoList (){

    const [tasks, setTasks] = useState([`Eat Breakfast`, `Take a shower`, `walk the dog`]);
    const [newTask, setNewtask] = useState("");

    function handleInputChange(event){
        setNewtask(event.target.value);
    }

    function addTask(){
        if(newTask.trim() !== ""){
            setTasks(t =>[...t, newTask]);
            setNewtask("");
        }

    }

    function deleteTask(index){
        const updateTasks = tasks.filter((_,i) => i !== index);
        setTasks(updateTasks);
    }

    function moveTaskUp(index){
       if(index > 0){
        const updateTasks = [...tasks];
        [updateTasks[index],updateTasks[index - 1]]=[updateTasks[index - 1],updateTasks[index]];
        setTasks(updateTasks);
       }
       
       
    }
    function moveTaskDown(index){
        if(index < tasks.length - 1){
            const updateTasks = [...tasks];
            [updateTasks[index],updateTasks[index + 1]]=[updateTasks[index + 1],updateTasks[index]];
            setTasks(updateTasks);
           }
    }



   
    return(<div className="To-Do-List">
         <h1>To-Do-List</h1>

         <div>
            <input type="text"
            placeholder="Enter a task..." 
            value={newTask}
            onChange={handleInputChange}/>
            <button className="add-btn" onClick={addTask}> add</button>
         </div>

         <ol>
            {tasks.map((task,index) => 
                <li key={index}>
                    <span className="text"> {task}</span>
                    <button className="delete-btn" onClick={() => deleteTask(index)}>Delite</button>
                    <button className="move-btn" onClick={() => moveTaskUp(index)}>⬆</button>
                    <button className="move-btn" onClick={() => moveTaskDown(index)}>⬇</button>
                </li>
            )}
         </ol>
    </div>)
}
export default ToDoList