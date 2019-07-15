import React from 'react';
import './App.css';

function FormattedDate(props){
  return <h2>It is {props.date.toLocaleTimeString()}</h2>
}

class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {date: new Date()}
  }

  componentDidMount(){
    this.timerID = setInterval(()=> this.tick(),1000)
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  tick(){
    this.setState({
      date: new Date()
    })
  }
  // never write below
  // this.state.date = new Date()

  render(){
    return(
      <div>
        <h1>Hello World</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
        <FormattedDate date={this.state.date}/>
      </div>
    )
  }
}

function App() {
  return (
    <Clock />
  );
}

export default App;
