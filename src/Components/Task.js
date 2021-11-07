import React from 'react'
import {FaTimes} from 'react-icons/fa'



const Task = ({task,onDelete,onDoubleClick}) => {
    
    return (
        //Below is how we give the default class name if any other class name presetn
        //className={`task ${task.reminder == true ? "reminder" : ''}`}
        <div className={`task ${task.reminder ? 'reminder' : ''} `} onDoubleClick={()=>onDoubleClick(task.id)}>
          <h3>{task.name} <FaTimes color="red" cursor="pointer" onClick={()=>onDelete(task.id)}/> </h3>  
          <p>{task.day}</p>
        </div>
       
    )
}

export default Task
