import { RefObject, useCallback, useEffect, useState } from "react";
import useDebounce from "./useDebounce";

type Coordinate = {
  x: number;
  y: number;
};

export default function useScroll(ref: RefObject<HTMLElement>): Coordinate {
  const [state, setState] = useState({ x: 0, y: 0 });
  const debouncedState = useDebounce<Coordinate>(state, 100);

  const handler = useCallback(() => {
    if (ref.current) {
      setState({
        x: Math.round(ref.current.scrollLeft ?? 0),
        y: Math.round(ref.current.scrollTop ?? 0),
      });
    }
  }, [ref]);

  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener("scroll", handler, {
        capture: false,
        passive: true,
      });
    }

    return () => {
      if (ref.current) {
        ref.current.removeEventListener("scroll", handler);
      }
    };
  }, [ref]);
  return debouncedState;
}
