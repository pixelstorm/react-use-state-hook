import React, { useState } from "react";
function App() {
  const [count, setCount] = useState(3);
  const decrementCount = () => {
    setCount(count - 1);
  };
  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button>+</button>
    </>
  );
}

export default App;
