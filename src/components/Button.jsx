import React from 'react';
import '../assets/css/btn.css'
const Button = (props) => {

  return (
    <button   className='btn'>
      {props.text}
    </button>
  );
};

export default Button;
