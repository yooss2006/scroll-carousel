import React, { Children, isValidElement } from "react";

type ChildSet =
  | string
  | number
  | React.ReactElement<any, string | React.JSXElementConstructor<any>>
  | Iterable<React.ReactNode>
  | React.ReactPortal;

export default function useChildren(children: React.ReactNode) {
  const childNodes = Children.toArray(children).reduce(
    (acc: ChildSet[], cur) => {
      if (isValidElement(cur) && typeof cur.type === "symbol") {
        const fragmentChildren = cur.props.children;
        if (typeof fragmentChildren === "object") {
          const updateChildren = fragmentChildren.map(
            (item: any, index: number) => ({
              ...item,
              key: `${item.type}-${index}`,
            })
          );
          return [...acc, ...updateChildren];
        }
        return [...acc, cur.props.children];
      }
      return [...acc, cur];
    },
    []
  );
  return childNodes;
}
