import React, { useEffect, useLayoutEffect, useRef } from "react";

function UseLayoutHook() {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.value = "Arun";
  }, []);
  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);
  return (
    <>
      <p>Use Layout Hook</p>
      <input type="text" defaultValue="Christo" ref={inputRef} />
    </>
  );
}

export default UseLayoutHook;
