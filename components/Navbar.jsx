import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import Cart from "./Cart";
import  {useStateContext}  from "../context/StateContext";

import { useSession } from "next-auth/react";

const Navbar = () => {
  const { showcart, totalQuantities, setShowcart } = useStateContext();

  const { data: session } = useSession();

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">Faarm Connect</Link>
      </p>
      <p className="logo">
        <Link href="/sign-up">User</Link>
      </p>
      <p className="logo">
        <Link href="/contact">Contact</Link>
      </p>

      {
        session ? (
          <Link href="/sign-up">Si</Link>
        ):(
          <Link href="/sign-up">Sign Up</Link>
        )
      }

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
