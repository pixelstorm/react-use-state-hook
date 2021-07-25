import React, { useState } from "react";
function App() {
  const [count, setCount] = useState(3);
  return (
    <>
      <button>-</button>
      <span>{count}</span>
      <button>+</button>
    </>
  );
}

export default App;
