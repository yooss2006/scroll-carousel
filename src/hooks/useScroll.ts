import { ForwardedRef, useCallback, useEffect, useState } from "react";
import useDebounce from "./useDebounce";

type Coordinate = {
  x: number;
  y: number;
};

export default function useScroll(ref: ForwardedRef<HTMLElement>): Coordinate {
  const [state, setState] = useState({ x: 0, y: 0 });
  const debouncedState = useDebounce<Coordinate>(state, 100);
  const handler = useCallback(() => {
    if (typeof ref !== "function" && ref?.current) {
      setState({
        x: Math.round(ref.current.scrollLeft ?? 0),
        y: Math.round(ref.current.scrollTop ?? 0),
      });
    }
  }, [ref]);

  useEffect(() => {
    if (typeof ref !== "function" && ref?.current) {
      ref.current.addEventListener("scroll", handler, {
        capture: false,
        passive: true,
      });
    }

    return () => {
      if (typeof ref !== "function" && ref?.current) {
        ref.current.removeEventListener("scroll", handler);
      }
    };
  }, [ref, handler]);
  return debouncedState;
}
