import usePageHeight from "../hooks/usePageHeight";
import flexStyle from "../style/flex";

export default function Header() {
  const { dividePageHeight } = usePageHeight();
  const pageHeightDividedByTwo = dividePageHeight(2);
  const pageHeightDividedByFour = dividePageHeight(4);
  return (
    <header
      style={{
        height: `${pageHeightDividedByTwo}px`,
        marginTop: `${pageHeightDividedByFour}px`,
      }}
      className={`w-full bg-red-500 ${flexStyle.center}`}
    >
      <h1 className="text-red-50">소개</h1>
    </header>
  );
}
