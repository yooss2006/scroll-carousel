import React from "react";
import usePageHeight from "../hooks/usePageHeight";
import flexStyle from "../style/flex";

type Props = {
  scrollY: number;
};

export default function Header({ scrollY }: Props) {
  const { dividePageHeight } = usePageHeight();
  const height = dividePageHeight(4);
  return (
    <header
      style={{ height: `${height}px` }}
      className={`w-full ${flexStyle.center} relative z-10`}
    >
      <h1 className="text-red-50">소개</h1>
    </header>
  );
}
