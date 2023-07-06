import { useEffect, useRef } from "react";
import FocusLayer from "./components/FocusLayer";
import Header from "./components/Header";
import useScroll from "./hooks/useScroll";
import usePageHeight from "./hooks/usePageHeight";
import CartoonCutList from "./components/CartoonCutList";

function App() {
  const mainRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const { dividePageHeight } = usePageHeight();
  const pageHeightDividedByFour = dividePageHeight(4);
  const { y } = useScroll(mainRef);
  useEffect(() => {
    if (headerRef.current) {
      const targetY = headerRef.current.clientHeight - pageHeightDividedByFour;
      if (y > 1 && y < targetY) {
        mainRef.current?.scrollTo({
          top: targetY,
          behavior: "smooth",
        });
      }
    }
  }, [headerRef, pageHeightDividedByFour, y]);

  return (
    <>
      <main className="max-w-screen-sm h-full mx-auto overflow-hidden bg-white">
        <section
          ref={mainRef}
          className="h-full overflow-y-auto scrollbar-hide"
        >
          <Header ref={headerRef} />
          <CartoonCutList />
          <footer style={{ height: `${pageHeightDividedByFour}px` }}></footer>
        </section>
        <FocusLayer scrollY={y} />
      </main>
    </>
  );
}

export default App;
