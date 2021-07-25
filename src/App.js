import React, { useState } from "react";
function App() {
  const [count, setCount] = useState(3);
  const [Theme, setTheme] = useState("neutral");

  const decrementCount = () => {
    setCount((prevCount) => prevCount - 1);
    setTheme("down");
  };
  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
    setTheme("up");
  };
  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>
        {count}
        {Theme}
      </span>
      <button onClick={incrementCount}>+</button>
    </>
  );
}

export default App;
