import React, { useReducer } from "react";

const reducerFn = (state, action) => {
  switch (action.type) {
    case "Increment":
      return {
        count: state.count + 1,
        showText : state.showText
      };
    case "ShowText":
      return {
        showText: !state.showText,
        count: state.count,
      };
    default:
      return state;
  }
};

function UseReducerHook() {
  const initialState = {
    count: 0,
    showText: false,
  };
  const [state, dispatch] = useReducer(reducerFn, initialState);

  return (
    <>
      <p>Use Reducer Hook</p>
      <p>Count : {state.count}</p>
      <button
        onClick={() => {
          dispatch({ type: "Increment" });
          dispatch({ type: "ShowText" });
        }}
      >
        Increment
      </button>
      {state.showText && <p>Text Showing</p>}
    </>
  );
}

export default UseReducerHook;
