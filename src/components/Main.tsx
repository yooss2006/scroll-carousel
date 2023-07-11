import { useRef } from "react";
import usePageHeight from "../hooks/usePageHeight";
import CartoonCutList from "./CartoonCutList";
import FocusLayer from "./FocusLayer";
import Header from "./Header";
import useObserverElement from "../hooks/useObserverElement";
import Footer from "./Footer";

export default function Main() {
  const mainRef = useRef<HTMLElement>(null);
  const { dividePageHeight } = usePageHeight();
  const pageHeightDividedByFour = dividePageHeight(4);
  useObserverElement({
    rootRef: mainRef,
    callback: (entry: IntersectionObserverEntry) => {
      const target = entry.target as HTMLElement;
      const targetPoint = target.offsetTop - pageHeightDividedByFour;
      mainRef.current?.scrollTo({
        top: targetPoint > 0 ? targetPoint : 0,
        behavior: "smooth",
      });
    },
  });
  return (
    <>
      <main ref={mainRef} className="h-full overflow-y-auto scrollbar-hide">
        <Header />
        <CartoonCutList />
        <Footer />
      </main>
      <FocusLayer />
    </>
  );
}
