import React from 'react';

const App = () => {
  return(
    <div>
      <Cat/>
      <Dog/>
    </div>
  )
}

const Cat = () =>{
  return <div>Meow</div>
}

const Dog = () =>{
  return <div>woof</div>
}

export default App;
