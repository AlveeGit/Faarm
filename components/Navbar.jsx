import Link from "next/link"
import {AiOutlineShopping} from 'react-icons/ai'

const Navbar = () => {
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
      <button className="cart-icon" type="button" onClick='' >
        <AiOutlineShopping/>
        <span className="cart-item-qty">1</span>
      </button>
    </div>
  )
}
export default Navbar