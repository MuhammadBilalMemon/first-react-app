import React from 'react';
import './App.css';

function App({ myName, age }) {
  return (
    <div>
      <p>My name is
        <strong> {myName} </strong>
       & age is {age} </p>
      <br />
      <p>First React app ever Created</p>
    </div >
  );
}

export default App;
