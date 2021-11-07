import React from 'react'
import {BrowserRouter as AliasRouter, Link } from 'react-router-dom'
import { useContext } from 'react'
import { GlobalContext } from '../App'

export const Footer = () => {
   const contextVal =  useContext(GlobalContext)
    return (
        <footer>
           <p>Copyright  2021 </p>
           <p>Context value : {contextVal}</p>
       {//To use Link we need to import it, and we need to define a BrowserModule in main index.js file 
       }
          <Link to="about">About</Link>
        </footer>
    )
}
