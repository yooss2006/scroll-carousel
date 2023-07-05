import React from "react";
import usePageHeight from "../hooks/usePageHeight";

export default function FocusLayer() {
  const { dividePageHeight } = usePageHeight();
  const height = dividePageHeight(4);
  const commonFocusLayerStyle = `fixed w-full bg-black opacity-70`;
  return (
    <>
      <div
        style={{ height: `0px` }}
        className={`${commonFocusLayerStyle} top-0`}
      ></div>
      <div
        style={{ height: `${height}px` }}
        className={`${commonFocusLayerStyle} bottom-0`}
      ></div>
    </>
  );
}
