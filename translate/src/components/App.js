import React from "react"
import UserCreate from './UserCreate'
import LanguageContext from '../contexts/LanguageContext'

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
        <LanguageContext.Provider value={this.state.language}>
          <UserCreate/>
        </LanguageContext.Provider>
      </div>
    )
  }  
}

export default App