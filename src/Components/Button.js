import React from 'react'
import PropTypes from 'prop-types'


const Button = ({text,color,onClick}) => {

    return  <button  onClick={onClick} style={{backgroundColor:color}} className="btn">{text}</button>
    
}

Button.defaultProps = {
    text : "Add",
    color:"blue"  
  }

Button.prototype ={
    text:PropTypes.string,
    color:PropTypes.string,
    onClick:PropTypes.func.isRequired

}


export default Button
