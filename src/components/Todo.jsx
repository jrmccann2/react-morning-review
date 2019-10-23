import React from "react"

export default function Todo(props){
  return <li>{props.todo}</li>
}

/**
 * Here our Todo component is a simple functional component. We named it for debugging purposes but
 * we could have left it an anonymous function which would have looked like this:
 * 
 * export default function(props){
 * ...
 * }
 * 
 * We have it take in props as a parameter so that we can access the props object which has the "todo"
 * property that we declared in App.js
 * 
 * We then just have it return some JSX which in this case is just an list item. A unique instance of the
 * Todo component is created for each item in our list array. This happens in App.js when we map over the
 * array of strings on state in App.js
 */