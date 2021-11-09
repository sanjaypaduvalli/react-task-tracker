import React, { useRef } from 'react'
import { useState } from 'react'

const AddTask = ({addTask}) => {

    //Creat a useState hook with empty value
const [name,setTask] = useState('')
const [day,setDay] = useState('')
const [reminder,setReminder] = useState(false)

//Craete a useRef, Add assign this name to the input field
const taskNameInputField = useRef()

const toUpdateValueInState = (e)=>{
  //  console.log(e)
   // setTask((val)=> e.target.value)
   setTask( e.target.value)
}

function addTask1(e){
     
e.preventDefault()
    if(!name){
    alert("Task not present")
    //we can focus the input elemnet if its empty
    taskNameInputField.current.focus()
    //Note: We should not do the below one,this is just for testing
    taskNameInputField.current.value ="Test addding from useRef"
    return
    }

    //Send to call back as a object
    addTask({name,day,reminder});

    setTask('')
    setDay('')
    setReminder(false)


}
    return (
       <form className="form-control" onSubmit={addTask1}>
    <div className="form-control">
      <label >Task</label>
      {/** Below way we can refernce the input tag */}
      <input ref={taskNameInputField} type="text" placeholder="Add Task" value={name} onChange={toUpdateValueInState}/>
    </div>
<div className="form-control">
    <label>Date and Time</label>
    <input type="text" placeholder="Add Date and time" value={day} onChange={(e)=>setDay(e.target.value)}/>
</div>
<div className="form-control form-control-check">
    <label>Reminder</label>
    <input type="checkbox" checked={reminder}  value={reminder} onChange={(e)=>setReminder(e.target.checked)}/>
</div>
<input type="submit" className="btn btn-block"  value="Submit"/>
       </form>
    )
}

export default AddTask
