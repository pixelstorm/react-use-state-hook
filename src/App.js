import React, { useState } from "react";
function App() {
  const [count, setCount] = useState(3);
  const decrementCount = () => {
    setCount((prevCount) => prevCount - 1);
  };
  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
}

export default App;
