import React from 'react'
import LanguageContext from '../contexts/LanguageContext'

class Button extends React.Component{
  renderSubmit = value =>{
    return value === 'English' ? "submit" : "Voorleggen"
  }
  render(){
    return (
      <button className="ui primary button">
        <LanguageContext.Consumer>
          {(value)=> this.renderSubmit(value)} 
        </LanguageContext.Consumer>
      </button>
      
      )
  }
}

export default Button