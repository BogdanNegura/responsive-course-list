import styled from "styled-components";
import StyledHeroImage from "../../asset/image/StyledHeroImage/AdobeStock_299034266@2x.png";

export const StyledHeroDescription = styled.p`
  font-size: 18px;
  font-family: "Roboto";
  color: white;
  text-align: left;
`;

export const StyledHeroBackground = styled.div`
  background-image: linear-gradient(
      to left,
      rgba(0, 0, 0, 0.15),
      rgba(0, 0, 0, 0.15)
    ),
    url(${StyledHeroImage});
  background-position: center;
  padding: 15px;
  & > button:last-child {
    margin-bottom: 22px;
  }
`;

export const StyledHeroTitle = styled.h1`
  font-size: 36px;
  color: white;
  font-family: "Roboto";
  margin-top: 12px;
`;
