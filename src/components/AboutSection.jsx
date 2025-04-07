import styled from "styled-components"
import '@fontsource/libre-baskerville';
import "@fontsource/noto-sans/400.css";
import "@fontsource/noto-sans/500.css";
import "@fontsource/noto-sans/600.css";
import { LoremIpsum } from 'react-lorem-ipsum';

const AboutSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex-wrap: wrap;
  margin-top: 380px;
  box-sizing: border-box;
  padding: 0 80px;
  @media only screen and (max-width: 768px) {
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
  font-family: "Libre Baskerville", sans-serif;
  font-weight: 400;
  font-size: 22px;
  line-height: 37px;
  color: rgb(29, 29, 31);
  @media (max-width: 999px) {
    width: 100%;
  }
`;

const BodyText = styled.span`
  width: 60%;
  font-family: "Noto Sans", sans-serif;
  font-weight: 500;
  font-size: 17px;
  line-height: 29px;
  color: rgb(38, 38, 38);
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
  border-radius: 8px;
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
  /* background-color: blue; */
`;

const PrimaryTagline = styled.p`
  font-family: "Libre Baskerville", sans-serif;
  font-weight: 400;
  font-size: 25px;
  line-height: 38px;
  color: white;
  @media (max-width: 999px) {
    text-align: center;
  }
`;

const SecondaryTagline = styled.p`
  font-family: "Noto Sans", sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: white;
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