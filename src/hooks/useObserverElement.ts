import React, { useEffect } from "react";
import useChildElements from "./useChildElements";
import usePageHeight from "./usePageHeight";

type Params = {
  rootRef: React.RefObject<HTMLElement> | null;
  callback: (entry: IntersectionObserverEntry) => void;
};

export default function useObserverElement({ rootRef, callback }: Params) {
  const { dividePageHeight } = usePageHeight();
  const elements = useChildElements(rootRef);

  const pageHeightDividedByFour = dividePageHeight(4);

  useEffect(() => {
    if (elements.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          callback(entry);
        });
      },
      {
        rootMargin: `-${pageHeightDividedByFour + 10}px 0px`,
        threshold: 0,
      }
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [callback, elements, pageHeightDividedByFour]);
}
