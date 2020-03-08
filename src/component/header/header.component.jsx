import React from "react";
import logo from "./logo.svg";
import { StyledHeaderLogo } from "./header.style";
import { SignIn } from "../sign-in";
import { LogIn } from "../log-in";

const Header = () => {
  return (
    <StyledHeaderLogo>
      <img src={logo} alt="" />
    </StyledHeaderLogo>
  );
};

export { Header };
