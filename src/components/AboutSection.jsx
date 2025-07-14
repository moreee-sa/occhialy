import styled from "styled-components"
import '@fontsource/libre-baskerville';
import "@fontsource/noto-sans/400.css";
import "@fontsource/noto-sans/500.css";
import "@fontsource/noto-sans/600.css";
import { LoremIpsum } from 'react-lorem-ipsum';
import { MOBILE_BREAKPOINT, COLORS, FONTS, RADIUS } from "../lib/constants";

const AboutSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex-wrap: wrap;
  margin: 380px 0 80px 0;
  box-sizing: border-box;
  padding: 0 80px;
  z-index: 20;
  
  @media only screen and (max-width: ${MOBILE_BREAKPOINT}) {
    padding: 0;
  }
`;

const ContentRow = styled.div`
  margin-top: 120px;
  display: flex;
  @media (max-width: 999px) {
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
  @media (max-width: 999px) {
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
  @media (max-width: 999px) {
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
  @media (max-width: 999px) {
    width: 100%;
  }
`;

const ImageColumn = styled.div`
  width: 100%;
  display: flex;
  justify-content: left;
  @media (max-width: 999px) {
    justify-content: center;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  max-height: 60vh;
  border-radius: ${RADIUS.MEDIUM};
  object-fit: cover;
  object-position: center;

  @media (max-width: 999px) {
    max-height: 50vh;
  }
`;

const TaglineWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const PrimaryTagline = styled.p`
  font-family: ${FONTS.LIBRE_BASKERVILLE};
  font-weight: 400;
  font-size: 25px;
  line-height: 38px;
  color: ${COLORS.LIGHT_PRIMARY};
  @media (max-width: 999px) {
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

function AboutSection() {
  return (
    <AboutSectionWrapper>
      <TaglineWrapper>
        <PrimaryTagline>Ideato per accompagnarti ogni giorno.</PrimaryTagline>
        <SecondaryTagline>Progettato per resistere nel tempo.</SecondaryTagline>
      </TaglineWrapper>
      <ContentRow>
        <TextColumn>
          <HeadingText>
            Occhialy propone occhiali esclusivi, realizzati con materiali di alta qualità e progettati per chi cerca eleganza e originalità.
          </HeadingText>
          <BodyText>
            <LoremIpsum p={2} />
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