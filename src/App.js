import "./styles.css";
// Add State as it will remember what has happened
// Add Hooks to add State
import React, { useState } from "react";

/**
 * Build a @function LikeCounter component
 * A component enables us to reuse code a write a
 * bunch of heaing with their own like an dislike buttons and counters
 */
function LikeCounter() {
  /**
   * Creating a state
   * State is the part of your application that remembers
   * what has happened.
   * @param useState returns the Array with 2 elements
   * @param count is a variable that holds the number -
   * @param setCount is a function that can be used to update the count.
   */
  const [count, setCount] = useState(0);

  /**
   * This is a function that will increment the like counter
   * Use a function when you are using a state to update your state
   * @param oldCount is declared in the setCount brackets
   */
  const increment = () => {
    setCount((oldCount) => oldCount + 1);
  };

  /** This is a function that will decerement the like counter */
  const decrement = () => {
    setCount((oldCount) => oldCount - 1);
  };

  /** This is a function that will increment the like counter by 10 */
  const superLike = () => {
    setCount((oldCount) => oldCount + 10);
  };

  /** HTML part */
  return (
    <div>
      <p>Like Count: {count}</p>
      <button onClick={increment}>Like</button>
      <button onClick={decrement}>Dislike</button>
      <button onClick={superLike}>Super Like</button>
    </div>
  );
}

/**
 * Build a @function Headline component with a @param prop
 * This will hol dout titles + buttons
 */

function Headline(props) {
  /** HTML part
   * pass prop to h1
   */
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  );
}

/**The main function/display */
export default function App() {
  return (
    <div className="App">
      <Headline title="Like Counter" />
      <LikeCounter />

      <Headline title="Another Like Counter" />
      <LikeCounter />

      <Headline title="And Another Counter" />
      <LikeCounter />
    </div>
  );
}
