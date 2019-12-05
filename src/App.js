import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    count: 0
  };

  makeIncrementer = () => {
    this.setState(prevState => ({
      count: prevState.count += 1
  }))};

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button className="increment" onClick={this.makeIncrementer}>
          {" "}
          Increment count
        </button>
      </div>
    );
  }
}

export default App;
