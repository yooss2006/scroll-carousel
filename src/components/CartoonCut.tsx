import usePageHeight from "../hooks/usePageHeight";

type Props = {
  children: React.ReactNode;
};

export default function CartoonCut({ children }: Props) {
  const { dividePageHeight } = usePageHeight();
  const pageHeightDividedByTwo = dividePageHeight(2);
  return (
    <div style={{ height: `${pageHeightDividedByTwo}px` }} className="p-4">
      <div className="h-full border-black border-2">{children}</div>
    </div>
  );
}
