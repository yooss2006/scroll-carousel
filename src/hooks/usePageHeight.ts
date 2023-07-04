import React, { useCallback, useEffect, useState } from "react";

export default function usePageHeight() {
  const [pageHeight, setPageHeight] = useState<number>(
    document.body.scrollHeight
  );

  const handleResize = useCallback(() => {
    setPageHeight(document.body.scrollHeight);
  }, [setPageHeight]);

  const dividePageHeight = useCallback(
    (number: number) => Math.round(pageHeight / number),
    [pageHeight]
  );

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, [handleResize]);

  return {
    pageHeight,
    dividePageHeight,
  };
}
