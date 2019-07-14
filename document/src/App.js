import React from 'react';
import './App.css';

function Welcome(props){
  return <h1>Hello, {props.name}</h1>
}

const element = (
    <Welcome name="Tom"/>
);

function App() {
  return (
    element
  );
}

export default App;
