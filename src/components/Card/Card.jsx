import React from 'react';

// * Components

// * CSS
import './Card.css';

// * Images

// * Icons


const Card = props => {
   const { classNamePassed, cardRender } = props;

   return (
      <div className={`Card ${classNamePassed} ${cardRender !== classNamePassed ? 'disable' : '' }`}>
         {props.children}
      </div>
   );
}

export default Card;