import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

function App() {
  const [count, setCount] = useState(0);
  console.log("this is useState", useState(0));
  console.log(count);
  console.log(setCount);

  return (
    <div className="counter">
      <h1>React Counter</h1>
      <p className="click_desc">
        {/* count is just a variable and can be inserted in our curly braces just like any other variable 👇 */}
        You clicked <span>{count}</span> times
      </p>
      {/* <p>{color}</p> */}
      <div className="button_container">
        {/* In Rect we typically use an onclick attribute similar to what is in Vanilla JS. The onClick attribute is our event handler and it is added to the target element in order to specify the function to be executed when that element is clicked. like any other event listener it expects a callback function. So let's use the onClick attribute(also called property in React) */}
        {/* If we leave off the call back our expression would run after the browser parsed our file and not when we click on the button like it will with the function. We wrap it in a function so onClick will only run when we we decide to click on it not when the browser first runs  */}
        {/* <button onClick={console.log('click')}>Add 1</button> */}
        {/* Now we can use the setCount function to increase our count */}
        {/* When we call setCount we are telling React to rerender the component and count will be = to what ever we have clicked. And then the updated state is displayed on our page.*/}
        <button onClick={() => setCount(count + 1)}>Add 1</button>
        {/* When we click the buttons, we call setCount with a new value. React will then re-render the App component, passing the new count value to it. */}
        <button onClick={() => setCount(count * 5)}>multiply by 5</button>
        <button onClick={() => setCount(0)}>reset</button>
        {/* <button onClick={handleReset}>Reset</button> */}
      </div>
    </div>
  );
}
// Blog on event handlers
// https://blog.logrocket.com/a-guide-to-react-onclick-event-handlers-d411943b14dd/
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

//Example of this written as a class component

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0
//     };
//   }

//   render() {
//     return (
//       <div>
//         <p>You clicked {this.state.count} times</p>
//         <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//           Add 1
//         </button>
//         <button onClick={() => this.setState({ count: this.state.count * 5 })}>
//           Multiply by 5
//         </button>
//         <button onClick={() => this.setState({ count: this.state.count * 0 })}>
//           Reset
//         </button>
//       </div>
//     );
//   }
// }
