import { useRef } from "react";
import CutList from "./components/CutList";
import FocusLayer from "./components/FocusLayer";
import Header from "./components/Header";
import useScroll from "./hooks/useScroll";

function App() {
  const mainRef = useRef(null);
  const { y } = useScroll(mainRef);

  return (
    <>
      <main className="max-w-screen-sm h-full mx-auto overflow-hidden bg-white">
        <section
          ref={mainRef}
          className="h-full overflow-y-auto scrollbar-hide"
        >
          <Header scrollY={y} />
          <CutList />
        </section>
        <FocusLayer scrollY={y} />
      </main>
    </>
  );
}

export default App;
