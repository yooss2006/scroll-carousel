import usePageHeight from "../hooks/usePageHeight";
import flexStyle from "../style/flex";

export default function Footer() {
  const { dividePageHeight } = usePageHeight();
  const pageHeightDividedByTwo = dividePageHeight(2);
  const pageHeightDividedByFour = dividePageHeight(4);

  return (
    <footer
      style={{
        height: `${pageHeightDividedByTwo}px`,
        marginBottom: `${pageHeightDividedByFour}px`,
      }}
      className={`w-full ${flexStyle.center}`}
    >
      끝
    </footer>
  );
}
