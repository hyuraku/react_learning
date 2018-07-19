import React from 'react';
import PropTypes from 'prop-types'
// Proptypes check the type of prop like string,intenger and so on.

// Warning message is displayed on console
const App = () =>{
  const profiles = [
    {name:"Tim", age:35},
    {name:"Tetsu", age:18},
    // Warning: Failed prop type: Invalid prop `name` of type `number` supplied to `User`, expected `string`.
    {name:90},
    // Warning: Failed prop type: The prop `age` is marked as required in `User`, but its value is `undefined`.
    {name:"Jeph"}
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
// User.defaultProps={
//   age: 1
// }

User.propTypes={
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;
