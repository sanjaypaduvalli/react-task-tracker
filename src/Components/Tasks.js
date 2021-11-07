import React, { Fragment } from 'react'
import Task from './Task'

const Tasks = (props) => {


//console.log(props)


    return (
        <div>
  {  /* Below is iteration with map. now we creat a separate componet for Task and pas the each task value        
    { props.tasks.map((task) =>( <h3 key={task.id}>{task.name}</h3> ) ) }
  */ } 
    {
    props.tasks.map(
        (taskToSend)=>(<Task task={taskToSend} key={taskToSend.id} onDelete={props.onDelete} onDoubleClick={props.onDoubleClick}/>)
        )}
   

        </div>
    )
}

export default Tasks
