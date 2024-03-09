import React from "react";
import { useState } from "react";

export default function Counter() {
  console.log("running Counter function");

  let [count, setCount] = useState(5);
  let [width, show_WIdth] = useState(window.innerWidth);

  function iswidth() {
    increment();
    show_WIdth(() => {
      if (count % 2 == 0) {
        return window.innerWidth;
      } else {
        return 0;
      }
    });
  }

  function increment() {
    setCount((current_count) => {
      return current_count + 1;
    });
    console.log("current count is ", count);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>increse</button>

      <button onClick={iswidth}> {width && width}</button>
    </div>
  );
}
