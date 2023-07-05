import React, { useMemo } from "react";
import usePageHeight from "../hooks/usePageHeight";

type Props = {
  scrollY: number;
};

const commonFocusLayerStyle = `fixed w-full max-w-screen-sm bg-black opacity-70 transition duration-300`;

export default function FocusLayer({ scrollY }: Props) {
  const { dividePageHeight } = usePageHeight();
  const height = dividePageHeight(4);
  const commonInlineStyle = useMemo(
    () => ({
      height: `${height}px`,
      transitionTimingFunction: "cubicBezier(0, 0.91, 1, 1)",
    }),
    [height]
  );

  return (
    <>
      <div
        style={{
          ...commonInlineStyle,
          transform: `translateY(-${scrollY >= height ? 0 : height}px)`,
        }}
        className={`${commonFocusLayerStyle} top-0`}
      ></div>
      <div
        style={{
          ...commonInlineStyle,
          transform: `translateY(${scrollY >= height ? 0 : height}px)`,
        }}
        className={`${commonFocusLayerStyle} bottom-0`}
      ></div>
    </>
  );
}
