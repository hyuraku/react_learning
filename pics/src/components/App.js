import React from 'react'
import SearchBar from './SearchBar'
import { render } from '@testing-library/react';


class  App extends React.Component{
  onSearchSubmit(term){
    console.log(term)
  }
  render(){
      return ( 
      <div className = "ui container"  style = {{marginTop: '20px'} } >
        <SearchBar onSubmit={this.onSearchSubmit}/>
      </div>
    )
  }
};


export default App