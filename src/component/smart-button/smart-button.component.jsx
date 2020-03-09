import React from "react";
import { StyledSmartButton, StyledSmartLink } from "./smart-button.style";

const SmartButton = ({ type = "link", children, handleOnClick }) => {
  return (
    <>
      {type === "button" && (
        <StyledSmartButton onClick={handleOnClick}>
          {children}
        </StyledSmartButton>
      )}
      {type === "link" && (
        <StyledSmartLink to="button">{children}</StyledSmartLink>
      )}
    </>
  );
};

export { SmartButton };
