/* eslint-disable no-unused-vars */
import React from 'react';
import './Button.css';
import{ Link } from 'react-router-dom';
 const STYLES =['btn--primary', 'btn--outline'];
 const sizes =['btn-medium','btn-large'];
export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle =STYLES.includes(buttonStyle)
    ? buttonStyle 
    :STYLES[0];

    // eslint-disable-next-line no-unused-vars
    const checkButtonSize =sizes.includes(buttonStyle)
    ?buttonSize 
    :sizes[0]
    
    
 return(
       
         <Link to='/signup' className='btn-mobile'>
                    <button className={`btn ${checkButtonStyle} ${checkButtonStyle} `}
                    onClick={onClick}
                    type={type}
              >
                        {children}
                    </button>
                </Link>
    )
};