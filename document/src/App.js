import React from 'react';
import './App.css';

function Welcome(props){
  return <h1>Hello, {props.name}</h1>
}

const element = (
  <div>
    <Welcome name="Tom"/>
    <Welcome name="David"/>
    <Welcome name="John"/>
  </div>
);

function App() {
  return (
    element
  );
}

export default App;
