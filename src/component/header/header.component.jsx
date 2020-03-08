import React from "react";
import logo from "./logo.svg";
import { StyledHeaderLogo } from "./header.style";

const Header = () => {
  return (
    <StyledHeaderLogo>
      <img src={logo} alt="" />
    </StyledHeaderLogo>
  );
};

export { Header };
