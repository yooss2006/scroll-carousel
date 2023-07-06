import { forwardRef } from "react";
import flexStyle from "../style/flex";

export default forwardRef(function Header(_, ref: any) {
  return (
    <header className={`w-ful h-full bg-red-500 ${flexStyle.center}`} ref={ref}>
      <h1 className="text-red-50">소개</h1>
    </header>
  );
});
