import React from 'react';
import { Link } from 'react-router-dom';
const Title = (props) => {
    return (
      <div>
        <h1 style={props.style}>
          {props.label}
        </h1>
      </div>
    )
  }
  export default Title 