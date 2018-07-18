import React from 'react';

const App = () => {
  return(
    <div>
      <cat/>
      <dog/>
    </div>
  )
}

const cat = () =>{
  return <div>Meow</div>
}

const dog = () =>{
  return <div>woof</div>
}

export default App;
