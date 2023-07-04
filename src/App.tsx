import CutList from "./components/CutList";
import FocusLayer from "./components/FocusLayer";
import usePageHeight from "./hooks/usePageHeight";
import flexStyle from "./style/flex";

function App() {
  const { dividePageHeight } = usePageHeight();
  const height = dividePageHeight(4);
  return (
    <>
      <main className="max-w-screen-sm h-full mx-auto overflow-hidden bg-white">
        <section className="h-full overflow-y-auto scrollbar-hide">
          <header
            style={{ height: `${height}px` }}
            className={`w-full ${flexStyle.center} relative z-10`}
          >
            <h1 className="text-red-50">소개</h1>
          </header>
          <CutList />
          <footer style={{ height: `${height}px` }}></footer>
        </section>
        <FocusLayer />
      </main>
    </>
  );
}

export default App;
