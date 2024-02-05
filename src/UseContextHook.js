import React, { useContext } from "react";

import { AppContext } from "./App";

function UseContextHook() {
  const { userName, setUserName } = useContext(AppContext);
  return (
    <>
      <input type="text" onChange={(e) => setUserName(e.target.value)} />
      <p>User Name : {userName}</p>
    </>
  );
}

export default UseContextHook;
