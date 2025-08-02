import styled from "styled-components";
import '@fontsource/libre-baskerville';
import "@fontsource/noto-sans/500.css";
import { BREAKPOINTS , COLORS, FONTS } from "../lib/constants";

const PrimaryTagline = styled.p`
  font-family: ${FONTS.LIBRE_BASKERVILLE};
  font-weight: 400;
  font-size: 25px;
  line-height: 38px;
  color: ${COLORS.LIGHT_PRIMARY};
  @media (max-width: ${BREAKPOINTS.DESKTOP}) {
    text-align: center;
  }
`;

const SecondaryTagline = styled.p`
  font-family: ${FONTS.NOTO_SANS};
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: ${COLORS.LIGHT_PRIMARY};
  margin-top: 20px;
`;

function AboutTagline() {
  return (
    <>
      <PrimaryTagline>Ideato per accompagnarti ogni giorno.</PrimaryTagline>
      <SecondaryTagline>Progettato per resistere nel tempo.</SecondaryTagline>
    </>
  )
}

export default AboutTagline