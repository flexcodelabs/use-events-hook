import React, { useRef } from "react";
import ReactDOM from "react-dom";
import {
  useEventListener,
  useWindowSize,
  useClickOutsideListener,
} from "@flexcodelabs/use-events-hooks";

const Test = () => {
  const buttonRef = useRef(null);

  // window size
  const { width, height } = useWindowSize();

  // event listener
  useEventListener("scroll", () => {
    console.log("scrolled");
  });

  // detect outside clicks
  useClickOutsideListener(buttonRef, () => {
    console.log("clicked outside");
  });

  return (
    <div>
      viewport size: {width}x{height}
      <button ref={buttonRef}>Text</button>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Test />
  </React.StrictMode>,
  document.getElementById("root")
);
