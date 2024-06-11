import { useState } from "react";

export default function Width() {
  const [showWidth, setShowWidth] = useState(false);

  function toggle() {
    setShowWidth((prev) => !prev);
  }

  return (
    <div>
      {showWidth && <h1>Width: {window.innerWidth}</h1>}
      <button onClick={toggle}>
        {!showWidth ? "show width" : "hide width"}
      </button>
    </div>
  );
}
