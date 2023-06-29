import React from "react";
import flexStyle from "../style/flex";

type Props = {
  children: React.ReactNode;
};

const commonBackgroundStyle =
  "fixed w-full max-w-screen-sm h-[calc(60%_/_2)] bg-black opacity-80";

export default function Dimm({ children }: Props) {
  return (
    <div className="relative w-full h-full">
      <div className={`${commonBackgroundStyle} top-0`}></div>
      <h1 className={`h-[calc(60%_/_2)] ${flexStyle.center}`}>
        유순상 이올시다.
      </h1>
      <section className="h-[3000px]">{children}</section>
      <div className={`${commonBackgroundStyle} bottom-0`}></div>
    </div>
  );
}
