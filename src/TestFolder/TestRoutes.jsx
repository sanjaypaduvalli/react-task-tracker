import React, { useEffect } from 'react'
import { useHistory, useParams } from 'react-router'

 const TestRoutes = () => {
     // Below is hook is to get the data , and destructres it
     const {id} = useParams()
   
     //Below useHistroy hook from reactor routing module will be used to navigate betwn diffrent routes
   const history =   useHistory()


     useEffect(()=>{

        console.log("Currenty in TestRoutes, Now reditrecting to different page programatically")
//Currenty in TestRoutes, Now reditrecting to different page programatically
        setTimeout(()=>{
       console.log("Redirtecting :: ")
       //The below will go back one step back, if specifiy as "-2" it goes bacl 2 step back , if we use "1" it will go forward.
        //history.go(-1)

        //Below is to go to specific route
        history.push("/test1")

    },1000)

     },[])
    return (
        <div>
            <h2>This is the TestRoute First : {id}</h2>
            <h4>Redirecting to diffrent pager programatically, after 1 sec</h4>
        </div>
    )
}

export default TestRoutes
