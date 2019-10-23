// Libraries
import React, { Component } from "react";

// Components
import Todo from "./components/Todo";

// Stylesheets
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      list: [],
      input: ""
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    console.log("componentDidMount", {state: this.state, props: this.props});
    /**
     * componentDidMount() is invoked immediately after a component is mounted (inserted into the tree). This
     * occurs AFTER the initial render!
     * 
     * Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint,
     * this is a good place to instantiate the network request. This method is a good place to set up any
     * subscriptions. If you do that, don’t forget to unsubscribe in componentWillUnmount().
     * 
     * This is a great place to make network requests! (Think axios)
     */
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      console.log("componentDidUpdate", {prevState, currentState: this.state}, {prevProps, currentProps: this.props});
    }
    /**
     * Type something into the input box and then compare the console output. The first thing you will likely
     * notice is that this function fires a lot. That is because our component updates everytime* we invoke
     * setState or receive new props. React will automatically get a snapshot of our previous state and props
     * and provide them to us in this method (we still have to tell the method to accept them as parameters like above).
     *
     * Use this as an opportunity to operate on the DOM when the component has been updated. This is also a good
     * place to do network requests as long as you compare the current props to previous props (e.g. a network request
     * may not be necessary if the props have not changed).
     * 
     * We use an if statement so that we can be more declarative about when we want to cause a side-effect. We should be
     * as specific as possible when making this equality check so that we only cause the side-effect when we absolutely
     * want to. In this case, let's edit it so that we only see the console.log when the length of our "list" array has
     * changed:
     * 
     * if(prevState.list.length !== this.state.list.length)
     */
  }

  componentWillUnmount() {
    /**
     * We will implement a componentWillUnmount in another level of this review. As it stands we do not
     * have a subcomponent that we can unmount. componentWillUnmount is invoked immediately before a component
     * is unmounted and destroyed. Perform any necessary cleanup in this method, such as invalidating timers,
     * canceling network requests, or cleaning up any subscriptions that were created in componentDidMount().
     */
  }

  handleChange = event => {
    this.setState({ input: event.target.value });
  };

  handleClick() {
    this.setState({
      list: [...this.state.list, this.state.input],
      input: ""
    });
  }

  render() {
    return (
      <div>
        <input
          placeholder="Add a task..."
          value={this.state.input}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>Add Task</button>
        <ul>
          {this.state.list.map((todo, index) => (
            <Todo key={index} todo={todo} />
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
