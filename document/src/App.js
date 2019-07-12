import React from 'react';
import './App.css';

function greeding(user){
  return user.FirstName + ' ' + user.LastName;
}

const user1 = {
  FirstName: 'David',
  LastName: 'Air'
}

const element = (
    <h1>
      Hello {greeding(user1)}
    </h1>
);

function App() {
  return (
    element
  );
}

export default App;
