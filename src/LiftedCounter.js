import React, { useState } from "react";

function CounterButtons({ count, setCount }) {
  return (
    <div className="inner-box">
      <h3>Counter Component</h3>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <button onClick={() => setCount((c) => c - 1)}>Decrement</button>
    </div>
  );
}

function DisplayCounter({ count }) {
  return (
    <div className="inner-box">
      <h3>Display Counter Component</h3>
      <p>Shared Count: {count}</p>
    </div>
  );
}

function LiftedCounter() {
  const [count, setCount] = useState(0);

  return (
    <section className="section">
      <h2>4. Lifting State Up</h2>
      <p>Both sibling components use the same counter state.</p>

      <CounterButtons count={count} setCount={setCount} />
      <DisplayCounter count={count} />
    </section>
  );
}

export default LiftedCounter;
