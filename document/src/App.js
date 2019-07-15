import React from 'react';
import './App.css';

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeding(props){
  const isLoggedIn = props.isLoggedIn;
  if(isLoggedIn){
    return <UserGreeting/>
  }
  return <GuestGreeting/>
}

function App() {
  return (
    <Greeding isLoggedIn={true} />
  );
}

export default App;
