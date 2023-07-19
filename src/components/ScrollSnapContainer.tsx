import React, { isValidElement } from "react";
import useChildren from "../hooks/useChildren";

type Props = {
  children: React.ReactNode;
};

export default function ScrollSnapContainer({ children }: Props) {
  const childNodes = useChildren(children);
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
