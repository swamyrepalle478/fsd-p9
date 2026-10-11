import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <section className="section">
      <h2>1. Counter using useState</h2>
      <h3>Counter: {count}</h3>

      <button onClick={() => setCount((c) => c + 1)}>Increment</button>

      <button onClick={() => setCount((c) => c - 1)}>Decrement</button>

      <button onClick={() => setCount(0)}>Reset</button>
    </section>
  );
}

export default Counter;
