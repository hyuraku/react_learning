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
  return <div>Woof</div>
}

export default App;
