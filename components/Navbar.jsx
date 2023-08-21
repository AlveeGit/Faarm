import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import Cart from "./Cart";
import { useStateContext } from "../context/StateContext";

import { signOut, useSession } from "next-auth/react";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const { showcart, totalQuantities, setShowcart } = useStateContext();

  const { data: session } = useSession();

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">Faarm Connect</Link>
      </p>

      <div className={` ${menuOpen ? "open" : ""}`}>
        <ul className="navList">
          <li>
            <Link href="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about">
              About
            </Link>
          </li>
          <li>
            <Link href="/services">
              Services
            </Link>
          </li>
          <li>
            <Link href="/contact">
             Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* <p className="logo">
        <Link href="/contact">Contact</Link>
      </p> */}

      {/* {session ? (
        <div>
          <Link href="/sign-up">{session?.user?.fullName} </Link>
          <button className="bg-slate-400" onClick={signOut}>
            SingOut
          </button>
        </div>
      ) : (
        <Link href="/sign-up">Sign In</Link>
      )} */}

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
