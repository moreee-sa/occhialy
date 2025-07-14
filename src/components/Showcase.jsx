import styled from "styled-components";
import '@fontsource/libre-baskerville';
import "@fontsource/noto-sans/500.css";
import "@fontsource/noto-sans/600.css";
import CardsCollection from "./CardsCollection";
import { COLORS, FONTS } from "../lib/constants";

const ShowcaseWrapper = styled.div`
  background-color: #ededed;
  padding: 0 80px 120px 80px;
  @media (max-width: 999px) {
    padding: 0 20px 60px 20px;
  }
`;

const TextWrapper = styled.div`
  padding: 80px 0 60px 0;

  @media (max-width: 999px) {
    padding: 25px 0 60px 0;
  }
`;

const TextShowcaseWrapper = styled.div`
  width: 30vw;
  margin-bottom: 40px;

  @media (max-width: 1200px) {
    width: 60vw;
  }

  @media (max-width: 999px) {
    width: 100%;
    margin-bottom: 0;
    text-align: center;
  }
`;

const TextCollection = styled.h1`
  font-family: ${FONTS.LIBRE_BASKERVILLE};
  font-weight: 400;
  font-size: clamp(24px, 5vw, 61px);
  line-height: 80px;
  color: ${COLORS.SECONDARY_TEXT};
`;

const TextInfoCollection = styled.span`
  font-family: ${FONTS.NOTO_SANS};
  font-weight: 500;
  font-size: 17px;
  line-height: 29px;
  color: #6e6e73;
`;

function Collection() {
  return (
    <ShowcaseWrapper>
      <TextWrapper>
        <TextShowcaseWrapper>
          <TextCollection>La collezione 2025</TextCollection>
        </TextShowcaseWrapper>
        <TextShowcaseWrapper>
          <TextInfoCollection>Ogni occhiale che realizziamo racconta una storia, dalla concezione alla creazione.</TextInfoCollection>
        </TextShowcaseWrapper>
      </TextWrapper>
      <CardsCollection color="all" stock={false} limit={4} />
    </ShowcaseWrapper>
  )
}

export default Collection