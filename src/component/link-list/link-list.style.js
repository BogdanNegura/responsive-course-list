import styled from "styled-components";

export const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
`;

export const StyledLink = styled.a`
  text-decoration: none;
  color: ${({ special }) => (special ? "#00aeef" : "black")};
  border-top: 1px solid ${({ special }) => (special ? "#00aeef" : "lightgray")};
  padding: 3px;
`;
