import React,{useState} from 'react'
//To use the state we need to import userState, Its a hook,


const ReactState = () => {

    //This is callled only once in the compont load. If we want to do any expencive operation we need to do th ebleow.
    // If we use functional it will load on componet load only.
  /*  const [state,setState] = useState(()=>{
        console.log("Enterd")
        return 4})
*/

//===========

//The below type will intialise every time whenwere ther is a change , Like onClick it will called every time. 
//We should not do any expecive operation here 
function stateInitial(){
    console.log("stateInitial")
return 4
}
const [state,setState] = useState(stateInitial())

//==================

const [nameState,setNameInfoState] = useState({
    name: "Sanjay",
    id:4
})


       function decrement(){
 console.log("Decremeent")
 setState((val)=>val-1)
        }  
//If we are using the object we need to provide the exsting previState info. 
//BEcuse  userState hook will replace the value when we call the setState or correspnding setter method. So we need to provide
// THe previos info so that it will merge the result.
//Bellow Update the name by keeping the id 

        function updateNameState(){
setNameInfoState(prevInfo=>{
   return { ...prevInfo,name:"Ram"}
})
        }
    
    return (
        <div>
           <button onClick={decrement}>-</button> 
           <span>{state}</span>
           <button>+</button> 
           <p>Name info :: {nameState.name}</p>
           <p>Name id :: {nameState.id}</p>
           
           <button onClick={updateNameState}>Change Name</button> 
        </div>
    )
}

export default ReactState
