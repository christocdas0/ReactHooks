import React, { useRef, useState } from "react";

function UseReffHook() {
  const inputRef = useRef(null);
  const [inputVal, setInputVal] = useState("");

  const getValue = () => {
    const val = inputRef.current.value;
    setInputVal(val);
  };
  const clearValue = () => {
    inputRef.current.value = "";
    setInputVal("");
  };

  return (
    <>
      <p>Use Reff hook</p>
      <input type="text" ref={inputRef} />
      <p>{inputVal}</p>
      <button onClick={getValue}>Get Value</button>
      <button onClick={clearValue}>Clear Value</button>
    </>
  );
}

export default UseReffHook;
