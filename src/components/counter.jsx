import React, { useState, useEffect } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  // after each `date` update
  useEffect(() => {
    const id = setInterval(() => setCounter(counter + 1), 1000);
    return () => clearInterval(id); // clear interval before unmount component
  }, [counter]);

  return <h1>{`Current: ${counter}`}</h1>;
};

export default Counter;
