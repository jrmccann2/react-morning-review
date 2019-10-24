// FOR NOTES SEE notes.md (try putting them side by side with the code!)

// Libraries
import React, { Component } from "react";

// Components
import Todo from "./components/Todo";

// Stylesheets
import "./App.css";

class App extends Component { // Note1
  constructor() { // Note2
    super(); // Note3

    this.state = { // Note4
      list: [],
      input: ""
    };
    
    this.handleClick = this.handleClick.bind(this) // Note5
  }

  handleChange = (event) => { // Note6
    this.setState({ input: event.target.value });
  }

  handleClick(){
    this.setState({
      list: [...this.state.list, this.state.input],
      input: ""
    })
  }

  render() { // Note7
    return ( // Note8
      <div>
        <input placeholder="Add a task..." value={this.state.input} onChange={this.handleChange} /> {/* Note9 */}
        <button onClick={this.handleClick}>Add Task</button>
        <ul>
          {this.state.list.map( (todo, index) => (
            <Todo key={index} todo={todo} />
          ))} {/* Note10 */}
        </ul>
      </div>
    );
  }
}

export default App; // Note11