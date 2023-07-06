import { useMemo } from "react";
import usePageHeight from "../hooks/usePageHeight";

type Props = {
  scrollY: number;
};

const commonFocusLayerStyle =
  "fixed w-full max-w-screen-sm bg-black opacity-70 transition duration-500";

export default function FocusLayer({ scrollY }: Props) {
  const { dividePageHeight } = usePageHeight();
  const pageHeightDividedByFour = dividePageHeight(4);
  const commonInlineStyle = useMemo(
    () => ({
      height: `${pageHeightDividedByFour}px`,
      transitionTimingFunction: "cubicBezier(0, 0.91, 1, 1)",
    }),
    [pageHeightDividedByFour]
  );

  return (
    <>
      <div
        style={{
          ...commonInlineStyle,
          transform: `translateY(-${
            scrollY > 1 ? 0 : pageHeightDividedByFour
          }px)`,
        }}
        className={`${commonFocusLayerStyle} top-0`}
      ></div>
      <div
        style={{
          ...commonInlineStyle,
          transform: `translateY(${
            scrollY > 1 ? 0 : pageHeightDividedByFour
          }px)`,
        }}
        className={`${commonFocusLayerStyle} bottom-0`}
      ></div>
    </>
  );
}
