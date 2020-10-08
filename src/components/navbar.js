import React, { useState } from "react";
import { Link } from "gatsby";

import logo from "../images/logo.svg";
import cartIcon from "../images/cart-icon.svg";

function Navbar() {
  const [navBarOpen, setNavBarOpen] = useState(false);
  const [css, setCss] = useState("collapse navbar-collapse");
  const [links, setLinks] = useState([
    {
      id: 1,
      path: "/",
      text: "home",
    },
    {
      id: 2,
      path: "/about",
      text: "about",
    },
  ]);

  const navbarToggler = () => {
    if (navBarOpen) {
      setNavBarOpen(false);
      setCss("collapse navbar-collapse");
    } else {
      setNavBarOpen(true);
      setCss("collapse navbar-collapse show");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <img src={logo} className="navbar-brand my-auto" width="32" />

        <button
          className="navbar-toggler"
          type="button"
          onClick={navbarToggler}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={css}>
          <ul className="navbar-nav ml-auto">
            {links.map(link => (
              <li className="nav-item" key={link.id}>
                <Link className="nav-link" to={link.path}>
                  {link.text}
                </Link>
              </li>
            ))}
            <li className="nav-item">
              <img src={cartIcon} className="snipcart-checkout" width="24" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
