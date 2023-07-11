import usePageHeight from "../hooks/usePageHeight";

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
    ></footer>
  );
}
