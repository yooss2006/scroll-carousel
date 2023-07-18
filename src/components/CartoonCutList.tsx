import CartoonCut from "./CartoonCut";

export default function CartoonCutList() {
  return (
    <ol>
      <li>
        <CartoonCut cutStyle="bg-[#FCA039]"></CartoonCut>
      </li>
      <li>
        <CartoonCut cutStyle="bg-[#0B5C46]"></CartoonCut>
      </li>
      <li>
        <CartoonCut cutStyle="bg-[#242B54]"></CartoonCut>
      </li>
    </ol>
  );
}
