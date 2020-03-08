import styled, { css } from "styled-components";
import { Link } from "@reach/router";

const sharedStyle = css`
  background: #00aeef;
  height: 43px;
  border-radius: 4px;
  padding: 15px 30px;
  color: white;
  font-size: 15px;
`;

export const StyledSmartButton = styled.button`
  ${sharedStyle}
  border: 0;
`;

export const StyledSmartLink = styled(Link)`
  ${sharedStyle}
`;
