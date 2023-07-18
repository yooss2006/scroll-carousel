import { useMemo } from "react";
import usePageHeight from "../hooks/usePageHeight";

const commonFocusLayerStyle =
  "fixed w-full max-w-screen-sm bg-black opacity-70";

export default function FocusLayer() {
  const { dividePageHeight } = usePageHeight();
  const pageHeightDividedByFour = dividePageHeight(4);
  const commonInlineStyle = useMemo(
    () => ({
      height: `${pageHeightDividedByFour}px`,
    }),
    [pageHeightDividedByFour]
  );

  return (
    <>
      <div
        style={commonInlineStyle}
        className={`${commonFocusLayerStyle} top-0`}
      />
      <div
        style={commonInlineStyle}
        className={`${commonFocusLayerStyle} bottom-0`}
      />
    </>
  );
}
