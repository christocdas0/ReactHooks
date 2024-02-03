import React, { useState } from "react";


function UseStateHook() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <>
      <p className="text-center">Use State Hook</p>
      <div className="flex-center">
      <p>Count : {count}</p>
      <button className="button bg-green" onClick={increment}>Increment</button>
      <button className="button bg-red" onClick={decrement}>Decrement</button>
      </div>
    </>
  );
}

export default UseStateHook;
