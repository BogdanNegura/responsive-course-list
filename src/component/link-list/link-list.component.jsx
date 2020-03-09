import React from "react";
import { StyledLink, StyledNav } from "./link-list.style";

const LinkList = ({ linkData }) => {
  return (
    <StyledNav>
      {linkData.map(({ link, special }) => (
        <StyledLink key={link} special={special} href={link}>
          {link}
        </StyledLink>
      ))}
    </StyledNav>
  );
};

export { LinkList };
