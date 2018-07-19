import React from 'react';

const App = () =>{
  const profiles = [
    {name:"Tim", age:35},
    {name:"Tetsu", age:18},
    {name:"John"}
  ]
  return (
    <div>
    {
      profiles.map((profile,index) => {
        return<User name={profile.name} age={profile.age} key={index}/>
      })
    }
    </div>
  )
}

const User= (props)=>{
  return <div>Hi I am {props.name} ,and {props.age} years old</div>
}

// if User.age is null, it will be displayed
User.defaultProps={
  age: 1
}

export default App;
