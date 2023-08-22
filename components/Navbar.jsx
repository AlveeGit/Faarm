import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import Cart from "./Cart";
import { useStateContext } from "../context/StateContext";

import { signOut, useSession } from "next-auth/react";
import { useState } from "react";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  Dropdown,
  DropdownTrigger,
  Avatar,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { showcart, totalQuantities, setShowcart } = useStateContext();

  const { data: session } = useSession();

  const categories = ["Groceries", "Rices", "Spices", "Vegetables"];

  return (
    <Navbar isBordered maxWidth="xl" onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent justify="">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          {/* //logo */}
          <Link href="/" className="font-bold text-inherit text-2xl ">
            Faarm
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4">
        <NavbarItem isActive>
          <Link href="/" aria-current="page">
            Home
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link color="foreground" href="/contact">
            Contact
          </Link>
        </NavbarItem>

        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                // endContent={icons.chevron}
                radius="sm"
                variant="light"
              >
                Categories
              </Button>
            </DropdownTrigger>
          </NavbarItem>

          <DropdownMenu
            aria-label="Categories"
            className="w-[100px]"
            itemClasses={{
              base: "gap-0",
            }}
          >
            {categories.map((category) => (
              <DropdownItem key={category}>
                <Link href={`/categories/${category}`}>
                {category}
                </Link>
                </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>

      {session && (
        <NavbarContent as="div" justify="end">
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                name={session?.user?.fullName}
                size="sm"
                src="/assets/images/user.png"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">{session?.user?.fullName}</p>
              </DropdownItem>
              <DropdownItem key="Profile">Dashboard</DropdownItem>
              <DropdownItem onClick={signOut} key="logout" color="danger">
                Sign Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>
      )}

      {!session && (
        <NavbarContent justify="flex-end">
          <NavbarItem>
            <Button as={Link} color="primary" href="/sign-up" variant="flat">
              Sign in
            </Button>
          </NavbarItem>
        </NavbarContent>
      )}

      <NavbarContent justify="flex-end">
        <button
          className="cart-icon"
          type="button"
          onClick={() => setShowcart(true)}
        >
          <AiOutlineShopping />
          <span className="cart-item-qty">{totalQuantities}</span>
        </button>
        {showcart && <Cart />}
      </NavbarContent>

      <NavbarMenu>
        <NavbarItem isActive>
          <Link href="/" aria-current="page">
            Home
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link color="foreground" href="/contact">
            Contact
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link color="foreground" href="#">
            Categories
          </Link>
        </NavbarItem>
      </NavbarMenu>
    </Navbar>
  );
};
export default NavBar;
