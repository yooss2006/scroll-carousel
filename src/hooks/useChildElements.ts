import { useEffect, useState } from "react";

export default function useChildElements(
  rootRef: React.RefObject<HTMLElement> | null
) {
  const [elements, setElements] = useState<Element[]>([]);
  useEffect(() => {
    if (rootRef?.current) {
      const data = Array.from(rootRef.current?.children).reduce(
        (acc: Element[], cur) => {
          if (["ol", "ul"].includes(cur.localName) && cur.children.length > 0) {
            return [...acc, ...Array.from(cur.children)];
          }
          return [...acc, cur];
        },
        []
      );
      setElements(data);
    }
  }, [rootRef]);
  return elements;
}
