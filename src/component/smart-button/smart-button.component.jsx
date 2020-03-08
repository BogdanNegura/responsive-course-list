import React from "react";
import { StyledSmartButton, StyledSmartLink } from "./smart-button.style";

const SmartButton = ({ type = "link", children }) => {
  return (
    <>
      {type === "button" && <StyledSmartButton>{children}</StyledSmartButton>}
      {type === "link" && (
        <StyledSmartLink to="button">{children}</StyledSmartLink>
      )}
    </>
  );
};

export { SmartButton };
