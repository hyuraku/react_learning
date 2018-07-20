import React, { Component } from 'react';

const App = ()=>(<Counter></Counter>)

class Counter extends Component {
  // constructor: execute the initialization process
  constructor(props){
    super(props)
    this.state = { count: 0}
  }

  handlePlusButton = ()=> {
    this.setState({ count: this.state.count+ 2})
  }

  handleMultiplyButton = ()=> {
    this.setState({ count: this.state.count* 2})
  }

  render() {
    return (
      <React.Fragment>
      <div>Count: {this.state.count} </div>
      <button onClick={this.handlePlusButton}>plus 2</button>
      <button onClick={this.handleMultiplyButton}>multiply 2</button>
      </React.Fragment>
    );
  }
}

export default App;
