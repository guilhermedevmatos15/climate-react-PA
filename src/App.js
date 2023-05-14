import React, { useState } from "react";

// ? Components
import Home from "./pages/Home/Home";


const App = () => {
   const [pageRender] = useState('Home');

   return (
      <>
         {pageRender === 'Home' ? <Home /> : ''}
      </>
   );
}

export default App;
