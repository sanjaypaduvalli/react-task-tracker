import React from 'react'
import PropType from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router'

const Header = (props) => {

//THis is to know the location of the route 
  const fromPath = useLocation()
    return (
        <header className="header">
           <h1>{props.title}</h1> 
           {/* Created the separate component for Button , Anad passing the text ,color and a onlcick even with the function which needs to call */}
         { fromPath.pathname == "/" &&
           <Button text={props.showAddTask ? "Close" : "Add"} color={props.showAddTask ? "red" : "green"} onClick={props.taskShow}/>
         }
        </header>
    )
  
}

//This is the deafault property we are adding in case if its not present 
Header.defaultProps = {
    title : "Default Header"  
  }

   
 //This is kind of type script , Reistricing only String, and making required. Otherwise throw wrror
 //this is property validation
 Header.prototype ={
    title:PropType.string.isRequired
 } 
export default Header
