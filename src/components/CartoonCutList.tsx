import CartoonCut from "./CartoonCut";
import ScrollSnapContainer from "./ScrollSnapContainer";
import flexStyle from "../style/flex";

export default function CartoonCutList() {
  return (
    <ol>
      <li>
        <CartoonCut>
          <ScrollSnapContainer>
            <>
              <h2 className={`${flexStyle.center} h-full`}>Introduce</h2>
              <div className="bg-orange-500 h-full" />
              <div className="bg-green-500 h-full" />
              <div className="bg-violet-500 h-full" />
            </>
          </ScrollSnapContainer>
        </CartoonCut>
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
