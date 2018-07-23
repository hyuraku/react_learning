import React, { Component } from 'react';
import { connect } from 'react-redux'
import { increment,decrement} from '../actions'

class App extends Component {
  render() {
    const props = this.props
    return (
      <React.Fragment>
      <div>Value: {props.value} </div>
      <button onClick={props.increment}>plus 2</button>
      <button onClick={props.decrement}>multiply 2</button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({value: state.count.value})

const mapDispatchToProps = ({ increment,decrement})

export default connect(mapStateToProps, mapDispatchToProps)(App)
