import React from "react";
import usePageHeight from "../hooks/usePageHeight";

export default function CutList() {
  const { dividePageHeight } = usePageHeight();
  const height = dividePageHeight(2);
  return (
    <ol>
      <li style={{ height: `${height}px` }}>1</li>
      <li style={{ height: `${height}px` }}>2</li>
      <li style={{ height: `${height}px` }}>3</li>
    </ol>
  );
}
