import React, { useState ,useEffect} from 'react'



export const UseEffectTest = () => {
console.log("Render everytime")
    const test1 = () =>{
       // alert("test");
        return 0;
    }
    function testM(){
        return 4  
    }
    const [count,setCount] = useState(testM());
var test;
 useEffect(()=>{
     // Update the document title using the browser API
  //  alert("g")
  console.log("useEffect will gets called only")
    document.title = `You clicked ${count} times`;

    //The below if we want to clean up somthing when componet is dismounted. We will specify in the below method . With return
    return () =>{console.log("Clean up called at the end")}

    //If we specify "[]" only the useEffect will gets called. During the mount time. 
    //If we specify only on some field update if we trigger useEffect . We can use it like giving the variable name
    //Ex : "},[count]"   ---->  Whenver the count state gets changed the useEffet will get called.
 },[count])

 


    return (
        <div>
            <p> use effect {test}</p>
            <p> Cliked {count} times</p>
            <button onClick={()=>setCount((priv)=>priv + 1)}>Click</button>
        </div>

      
    )
}

