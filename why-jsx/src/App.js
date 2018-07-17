// jsxの使用にはReactが必要
import React, { Component } from 'react';

// <div>~</div>の箇所がjsx(javascript xml)
// classを書くときは"className"と書く
class App extends Component {
  render() {
    // const greeting = "Hi, Tom!!"
    // const dom = <h1 className="foo">{greeting}</h1>
    // return dom;
    //
    return (
      <div>
      <label htmlFor="bar">Bar</label>
      <input type="button" onClick={() => console.log("Clicked")}/>
      </div>
    )
  }
}

export default App;
