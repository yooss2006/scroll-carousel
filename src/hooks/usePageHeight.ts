import React, { useCallback, useEffect, useState } from "react";
import useDebounce from "./useDebounce";

export default function usePageHeight() {
  const [pageHeight, setPageHeight] = useState<number>(
    document.body.scrollHeight
  );
  const debouncedHeight = useDebounce<number>(pageHeight);

  const handleResize = useCallback(() => {
    setPageHeight(document.body.scrollHeight);
  }, [setPageHeight]);

  const dividePageHeight = useCallback(
    (number: number) => Math.round(debouncedHeight / number),
    [debouncedHeight]
  );

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, [handleResize]);

  return {
    pageHeight: debouncedHeight,
    dividePageHeight,
  };
}
