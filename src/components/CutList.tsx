import React from "react";
import usePageHeight from "../hooks/usePageHeight";

export default function CutList() {
  const { dividePageHeight } = usePageHeight();
  const height = dividePageHeight(2);
  return (
    <ol
      style={{ height: `${height}px`, scrollSnapType: "y mandatory" }}
      className="w-full overflow-auto"
    >
      <li style={{ height: `${height}px` }} className="w-full snap-start">
        1
      </li>
      <li style={{ height: `${height}px` }} className="snap-start">
        2
      </li>
      <li style={{ height: `${height}px` }} className="snap-start">
        3
      </li>
    </ol>
  );
}
