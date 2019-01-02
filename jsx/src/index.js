import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  
  return (
    <div>
      <label htmlFor="">Enter Name</label>
      <input type="text"/>
      <input type="submit"/>
    </div>
  )
};

    ReactDOM.render(<App/>, document.querySelector('#root'));
