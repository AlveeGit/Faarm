import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import Cart from "./Cart";
import  {useStateContext}  from "../context/StateContext";

const Navbar = () => {
  const { showcart, totalQuantities, setShowcart } = useStateContext();

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">Faarm Connect</Link>
      </p>
      <p className="logo">
        <Link href="/user">User</Link>
      </p>
      <p className="logo">
        <Link href="/contact">Contact</Link>
      </p>
      <button
        className="cart-icon"
        type="button"
        onClick={() => setShowcart(true)}
      >
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>
      {showcart && <Cart />}
    </div>
  );
};
export default Navbar;
