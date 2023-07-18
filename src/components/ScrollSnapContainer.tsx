import React, { Children, isValidElement } from "react";

type Props = {
  children: React.ReactNode;
};

type ChildSet =
  | string
  | number
  | React.ReactElement<any, string | React.JSXElementConstructor<any>>
  | Iterable<React.ReactNode>
  | React.ReactPortal;

export default function ScrollSnapContainer({ children }: Props) {
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
  return (
    <ul className="flex items-center snap-x snap-mandatory h-full overflow-x-auto scrollbar-hide">
      {childNodes.map((item, index) => {
        return (
          <li
            key={isValidElement(item) ? item.key : index}
            className="w-full h-full snap-center flex-none"
          >
            {item}
          </li>
        );
      })}
    </ul>
  );
}
