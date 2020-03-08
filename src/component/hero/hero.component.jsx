import React from "react";
import { SmartButton } from "../smart-button";
import {
  StyledHeroTitle,
  StyledHeroBackground,
  StyledHeroDescription
} from "./hero.style";

const Hero = () => {
  return (
    <StyledHeroBackground>
      <StyledHeroTitle>Vestibulum pulvinar nisi orci vel</StyledHeroTitle>
      <StyledHeroDescription>
        Nam velit libero, ornare ac neque vitae, elementum lobortis justo.
        Vestibulum non finibus dolor.
      </StyledHeroDescription>
      <SmartButton type="button">Call the action</SmartButton>
    </StyledHeroBackground>
  );
};

export { Hero };
