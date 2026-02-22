import React from "react";
import { useState, useEffect } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
   let counterId =  setInterval(() => {
      setCount((prev)=>prev+1);
    }, 1000)
    return ()=>clearInterval(counterId)
  }, []);

  return (
    <div className="container">
      <h2>New Timer Is Available</h2>
      <h2>{count}</h2>
      <h3>Real Time Counter</h3>
    </div>
  );
};

export default App;
