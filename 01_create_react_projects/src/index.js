import React from 'react'; //core foundation library
import ReactDOM from 'react-dom/client'; //mainly used for web application 

//DOM ---> tree structure (reacts creates its own virtual DOM)

import App from './App';


//root -->id through HTML getting accessed
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  // creating own HTML tags through react
  //<React.StrictMode>
  <App />  //going to the file app.js
  // </React.StrictMode>
);

//we can remove </React.StrictMode> no need 