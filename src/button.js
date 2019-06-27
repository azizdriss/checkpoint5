import React from 'react';
import { Link } from 'react-router-dom';
import { tsPropertySignature } from '@babel/types';


const Button = (props) => {
  return (
      <button onClick = {props.onSimpleClick}
      style={{backgroundColor:'rgb(33, 59, 177)',
      color: 'white',width:'200px', height:'40px'}}>
      {props.children}
          
      </button> 
  )
}
export default Button