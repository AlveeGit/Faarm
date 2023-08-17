/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { BsBagCheckFill } from "react-icons/bs";
import Link from "next/link";
import { useStateContext } from "@/context/StateContext";

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
  },[]);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Thank You For Your Order!</h2>
        <p className="email-msg">Check your email for the receipt</p>
        <p className="description">
          If you have any questions, please email us at
          <a className="email" href="mailto:alveekabir1@gmail.com">
            alveekabir1@gmail.com
          </a>
        </p>
        <Link href="/">
          <button type="button"  className="bg-slate-600 text-white text-2xl p-4 rounded-3xl font-bold hover:scale-110 ease-in-out duration-500">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Success;
