import styled from "styled-components"
import '@fontsource/libre-baskerville';
import "@fontsource/noto-sans/500.css";
import { LoremIpsum } from 'react-lorem-ipsum';
import { BREAKPOINTS , COLORS, FONTS, RADIUS } from "../lib/constants";

const AboutSectionWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex-wrap: wrap;
  margin: 0 0 80px 0;
  box-sizing: border-box;
  padding: 0 80px;
  z-index: 20;
  
  @media (max-width: ${BREAKPOINTS.DESKTOP}) {
    padding: 0 20px;
  }
`;

const ContentRow = styled.div`
  margin-top: 80px;
  display: flex;
  @media (max-width: ${BREAKPOINTS.DESKTOP}) {
    flex-direction: column;
  }
  gap: 25px;
`;

const TextColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 30px;
  @media (max-width: ${BREAKPOINTS.DESKTOP}) {
    align-items: center;
  }
`;

const HeadingText = styled.div`
  width: 60%;
  font-family: ${FONTS.LIBRE_BASKERVILLE};
  font-weight: 400;
  font-size: 22px;
  line-height: 37px;
  color: ${COLORS.SECONDARY_TEXT};
  @media (max-width: ${BREAKPOINTS.DESKTOP}) {
    width: 100%;
  }
`;

const BodyText = styled.span`
  width: 60%;
  font-family: ${FONTS.NOTO_SANS};
  font-weight: 500;
  font-size: 17px;
  line-height: 29px;
  color: #262626;
  @media (max-width: ${BREAKPOINTS.DESKTOP}) {
    width: 100%;
  }
`;

const ImageColumn = styled.div`
  width: 100%;
  display: flex;
  justify-content: left;
  @media (max-width: ${BREAKPOINTS.DESKTOP}) {
    justify-content: center;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  max-height: 60vh;
  border-radius: ${RADIUS.MEDIUM};
  object-fit: cover;
  object-position: center;

  @media (max-width: ${BREAKPOINTS.DESKTOP}) {
    max-height: 50vh;
  }
`;

function AboutSection() {
  return (
    <AboutSectionWrapper>
      <ContentRow>
        <TextColumn>
          <HeadingText>
            Occhialy propone occhiali esclusivi, realizzati con materiali di alta qualità e progettati per chi cerca eleganza e originalità.
          </HeadingText>
          <BodyText>
            <LoremIpsum />
          </BodyText>
        </TextColumn>
        <ImageColumn>
          <StyledImage src="./image/case/case1.png" />
        </ImageColumn>
      </ContentRow>
    </AboutSectionWrapper>
  )
}

export default AboutSection