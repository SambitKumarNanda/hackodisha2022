import React, { useState } from "react";
import icon from "../images/icon.png";
import {
  Nav,
  NavLink,
  NavLogo,
  Bar,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLogo to="\">
          <img src={icon} alt="icon of sehat.com" height={75} />
        </NavLogo>
        <Bars />
        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/find-doctor" activeStyle>
            Find Doctor
          </NavLink>
          <NavLink to="/find-hospital" activeStyle>
            Find Hospital
          </NavLink>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/contact" activeStyle>
            Contact
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signin">Sign in</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
