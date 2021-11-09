import React, { createContext } from 'react'
import Header from './Components/Header'
import TestComp from './TestComp'
import ReactState from './TestFolder/ReactState'
import Tasks from './Components/Tasks'
import { useState } from 'react'
import AddTask from './Components/AddTask'
//Below is the example for NAmed Export
import {UseEffectTest}  from './TestFolder/UseEffectTest'
import {useEffect} from 'react'
import { BrowserRouter  as Router ,Link,Route,Switch} from 'react-router-dom'
import TestRoutes from './TestFolder/TestRoutes'
import TestRoutes1 from './TestFolder/TestRoutes1'
import {Footer} from './Components/Footer'
import {About} from './Components/About'

import { useContext } from 'react'
import { NotFoundPage } from './Components/NotFoundPage'
//import './App.css'

//Export the Context here , so that we can access in the child comtext
export const GlobalContext = createContext()
const App = () => {
//Before we ar using the constant taskList value.For checking
// const [taskState,setTask] = useState(()=>tasksList)

const [taskState,setTask] = useState([])
const [showAddTask,setAddTask] = useState(false)

//Below is to show the useContext hook functionalty, Refer Footer componet also, Where we use this useContext
const [contextCheck,setContextCheck] = useState({name:"Sanjay"});


    //This will run after the data got rendererd,Or every render it will get called
    useEffect(() => {
        console.log("useEffect")   
         data1()
        // setTask(...d1)
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    },[])

    const data1 = () =>{  fetch("http://localhost:5000/tasks")
      .then(res => res.json())
      .then(dat=>{console.log(...dat); setTask(dat)})
    }  
   
        //Add Task
    const addTask = (task)=>{
        console.log("TASK "+ task)
        //Previous implemtaion with constant data
        /*
        const id =Math.floor(Math.random()*100)
        const newTask = {...task}
        console.log(newTask)
        //setTask([...taskState,newTask])

        //Here the taskList is a array, So we are adding the exsting array with spred operater and the new task
        setTask((previ)=>{
        return [...previ,newTask]
         })
        */

    fetch("http://localhost:5000/tasks",{
        method : "post",
        headers:{'Content-Type': 'application/json'},
        body : JSON.stringify(task)
    }).then(res=>res.json())
    .then(data=>setTask([...taskState,data]))
}

    //This is to delete the task
    const   deleteTask =  (id)=>{
        console.log("delete : " + id)
 
    fetch(`http://localhost:5000/tasks/${id}`,{
        method:'DELETE'  
        }).then(data1()).catch(err=>console.log("Error : "+err))

    //The below is used when we are using the consta data.Since we are using the server . We use the featch api to delete 
    //the data
        /*     
        setTask( (previ)=> {
       return   previ.filter((task)=>task.id != id)
        }
        )*/
     console.log("taskState : " + taskState)
            }

      function handleDoubleClick(id){
        console.log("Double clicked:: " + id)
        fetch(`http://localhost:5000/tasks/${id}`).then(s=> s.json()).
        then(data=>{
       let updateTask ={...data,reminder : !data.reminder}

        console.log(updateTask)

      fetch(`http://localhost:5000/tasks/${id}`,{
              method:"PUT",
              headers:{'Content-Type': 'application/json'},
              body : JSON.stringify(updateTask) 
         })

        setTask((tasks) =>{
        return tasks.map((task)=>task.id == id ? {...task,reminder:!data.reminder} : task)
     })
   });
       
       /*
          setTask((previ)=>{
return previ.map((task)=>
    task.id == id ? {...task,reminder : !task.reminder } :task
)

          })*/
      }    
      

    return (
        
        <div className="container">
            {/* We can pass the parameter here */}
          <Header title="Task Tracker"  taskShow={()=>setAddTask(!showAddTask)} showAddTask={showAddTask} /> 

  
{//We can use swtich  from router link to swtich between the view. Or we can directly render it
//Below is is insterd of attaching the componet we are rendering the view  
}

<Route exact path="/"  render={()=>(
    <>
      {//Insted of using ternery operator we can use the below way 
         showAddTask && <AddTask addTask={addTask}/> }
         
         {taskState.length > 0 ?  
                   ( <Tasks tasks={taskState} onDelete={deleteTask} onDoubleClick={handleDoubleClick}/> )
           : ( "No Task Present") }
    </>
)} />
       

<Route path="/about" component={About}/>



{/*We wrap the context here.*/}
<GlobalContext.Provider value="Sanjay"> 
<Footer />
</GlobalContext.Provider>

<UseEffectTest/>
      {/* 
       <UseEffectTest/>
        <ReactState/>
          <TestComp/> */}

{/* 
          <div style={{border:"1px solid red"}}>
              <p>Test styles</p>
          <Router>
              <Switch>
                 {/**  This is how we access the data , Ie . id we access it, Same thing we need to use it on the Component}
                  
              <Route exact path="/test/:id" >
                <TestRoutes/>
                  </Route>
                  <Route path="/test1" component={TestRoutes1} />
                  <Route path="/about" component={About} />
              </Switch>
              {/**  Below is way how we pass data to the componet via Route}
           <p>   <Link to="/test/34">Router with param pass</Link> </p>
              <Link to="/test1">Link test 1</Link>
            <p>  <Link to="about">About </Link></p>
              </Router>
          </div>

        **/}

        </div>
    )

   
}




const tasksList = [
    {
        id:1,
        name : "Docter appoitment",
        day : "Feb 6th",
        reminder : true

    },
    {
        id:2,
        name : "School ",
        day : "June 8th",
        reminder : false

    },
    {
        id:3,
        name : "Pay Bill ",
        day : "Mar 6th",
        reminder : true

    }
]



export default App
