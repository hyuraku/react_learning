import React from "react"
import UserCreate from './UserCreate'

class App extends React.Component{
  state = {language: "English"}
  onLanguageChanged = (language) =>{
    this.setState({language: language})
  }
  render(){
    return (
      <div className="ui container">
        <div>
            Select Language
            <i className="flag us" onClick={()=> this.onLanguageChanged('English')}></i>
            <i className="flag nl" onClick={()=> this.onLanguageChanged('Dutch')}></i>
        </div>
        {this.state.language}
        <UserCreate/>
      </div>
    )
  }  
}

export default App