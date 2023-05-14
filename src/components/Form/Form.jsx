import React from 'react';

// * Components

// * CSS
import './Form.css';

// * Images

// * Icons
import { AiOutlineSearch } from 'react-icons/ai';

const Form = (props) => {
   const { inputValue, setInputValue, handleClickSearch } = props;

   return (
      <form className="Form" onSubmit={e => {e.preventDefault()}}>
         <div>
            <input
               className='textInput'
               type="text"
               onChange={(e) => setInputValue(e.target.value)}
               onKeyDown={e => {if (e.key === 'Enter') {handleClickSearch()}}}
               value={inputValue}
               autoFocus
               placeholder="Enter city name"
            />
            <button
               className="b-search"
               type="button"
               onClick={handleClickSearch}
            >
               <AiOutlineSearch className="icon-search" />
            </button>
         </div>

         <hr />
      </form>
   );
};

export default Form;
