import usePageHeight from "../hooks/usePageHeight";

type Props = {
  cutStyle?: string;
  children?: React.ReactNode;
};

export default function CartoonCut({ cutStyle = "", children }: Props) {
  const { dividePageHeight } = usePageHeight();
  const pageHeightDividedByTwo = dividePageHeight(2);
  return (
    <section style={{ height: `${pageHeightDividedByTwo}px` }} className="p-4">
      <div className={`w-full h-full border-black border-2 ${cutStyle}`}>
        {children}
      </div>
    </section>
  );
}
