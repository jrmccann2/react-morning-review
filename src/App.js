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
      </div>
    );
  }
}

export default App; // Note10

 /**
  * Note1: extends Component means we will inherit some of the functionality of the Component class that comes with React
  * 
  * Note2: constructor is the first lifecycle method and runs once for each instance of a component
  * 
  * Note3: super invokes the constructor of the class that we are extending (Component in this case)
  * 
  * Note4: We declare state within our constructor as an object. We give it a skeleton of initial properties
  *        that we want it to have. More often than not, you should set those properties equal to the empty form of
  *        the datatype that we expect the values to be. In this case, "input" will handle the text entered into our
  *        input element and so we set it to an empty string. "List" will be an array of these strings so we set it
  *        to an empty array.
  * 
  * Note5: Here we create a function that is equal to our "handleClick" bound to the context of "this" which is our class App
  * 
  * Note6: handleChange utilizes arrow function syntax to show that a method can get implicit context if written as a function
  *        expression. It takes in an event object. We then use setState() to update our "input" property to the *value* of the
  *       *target* element of our onChange *event* (event = onChange, target = input element, value = the text in the input box).
  * 
  *       We have access to the *event* object because handleChange is a callback function being invoked everytime our input box
  *       value changes. You will notice below when we point our onChange handler to this.handleChange that we do not invoke it
  *       with any arguments. That is because it will be invoked **for us** by the Web API (essentially the browser) any time that
  *       event is registered and it will pass in the event object as the first argument.
  * 
  *       setState is traditionally invoked with a single argument. That argument is an object containing the key/value pairs that
  *       we want to update on state. If a key in this object does not already exist on state, it will be added to state. We often
  *       just create this object inline with the invocation (see line 33). However, you could create it as a separate variable and
  *       then invoke setState, passing that variable in as an argument:
  * 
  *       let obectToUpdateState = { input: event.target.value }
  *       this.setState(objectToUpdateState)
  * 
  * Note7: render is a method used by react to know what to display from a component. We write our JSX in the return from render
  *        and React converts it into valid HTML
  * 
  * Note8: We put all of our JSX in parentheses to allow us to have our JSX on multiple lines. Otherwise, we would have to type
  *        it all on one line because returns are single line in JavaScript.
  * 
  * Note9: A note on our JSX: 
  *   Input properties: 
  *     placeholder - Gray text that will display in the box before you click on it
  *     value - the text inside of the input box. We use this to allow our handleClick function to reset our input box because
  *             the handleClick sets this.state.input equal to "" (line 57) onChange - an event handler that we can have fire a
  *             function anytime the value of our input box changes
  * 
  * Note10: 
  *   **export** allows us to expose some of our code to other files. They can access it using **import**
  *   **default** means that when we import this code into another file will we get our full class App code
  *   by default. When something is just exported we have to wrap it in curly brackets when we import it. When
  *   it is the default export we just name it. An example:
  *
  *   import React, { Component } from "react"
  *
  *   React - the default export
  *   Component - exported but without the default keyword
  *   A file can only have one default export.
  */