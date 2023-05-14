import React from 'react';

// * Components

// * CSS
import './Cyte.css';

// * Images

// * Icons


const Cyte = props => {
   const { name, fetchWeather, setInputValue } = props;

   return (
      <button className='Cyte b-cyte' onClick={e => {fetchWeather(name); setInputValue(name)}}>
         <h3>{name}</h3>
      </button>
   );
}

export default Cyte;