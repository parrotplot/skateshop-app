import Navmenu from "./Navmenu";
import Logo from "./Logo";
import CartWidget from "./CartWidget";
import CartDropdown from "./CartDropdown";
import "./Navbar.css";
import { useState } from "react";

export default function Navbar() {
  const [cartOpen, setCartOpen] = useState(false);
  return (
    <>
      <nav className="Navbar">
        <Logo />
        <Navmenu />
        <CartWidget color="blue" handleClick={() => setCartOpen(!cartOpen)} />

        <CartDropdown showCart={cartOpen} />
      </nav>
    </>
  );
}
