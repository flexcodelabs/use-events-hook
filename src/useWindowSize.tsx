import { useState } from "react";
import useEventListener from "./useEventListener";

interface Sizes {
  width?: number;
  height?: number;
}

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<Sizes>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEventListener("resize", () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  });

  return windowSize;
};

export default useWindowSize;
