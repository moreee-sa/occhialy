import Navbar from "./components/Navbar"
import styled from "styled-components"
import '@fontsource/libre-baskerville';
import "@fontsource/noto-sans/400.css";
import "@fontsource/noto-sans/500.css";
import "@fontsource/noto-sans/600.css";
import VideoBackground from "./components/VideoBackground";
import { LoremIpsum } from 'react-lorem-ipsum';

const AboutWrapper = styled.div`
  width: 100%;
  height: 100vh;
  /* background-color: #b18282; */
  box-sizing: border-box;
`;

const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 65%;
  padding: 0 80px;
  @media (max-width: 999px) {
    padding: 0 20px;
  }
  /* background-color: #b18282; */
`;

const TextWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* background-color: blue; */
`;

const Tagline = styled.p`
  font-family: "Libre Baskerville", sans-serif;
  font-weight: 400;
  font-size: 25px;
  line-height: 38px;
  color: white;
  @media (max-width: 999px) {
    text-align: center;
  }
`;

const SubTagline = styled.p`
  font-family: "Noto Sans", sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: white;
  margin-top: 20px;
`; 

const AboutBrandWrapper = styled.div`
  /* background-color: blue; */
  width: 100%;
  display: flex;
  gap: 25px;
  margin-top: 150px;
  padding: 0 80px;
  box-sizing: border-box;
  @media (max-width: 999px) {
    flex-direction: column;
  }
`;

const BrandDescription = styled.div`
  /* background-color: yellow; */
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 30px;
  @media (max-width: 999px) {
    align-items: center;
  }
`;

const BrandDescriptionText = styled.div`
  /* background-color: red; */
  width: 60%;
  font-family: "Libre Baskerville", sans-serif;
  font-weight: 400;
  font-size: 22px;
  line-height: 37px;
  color: rgb(29, 29, 31);
`;

const BrandDescriptionParagraph = styled.span`
  /* background-color: #2bff00; */
  width: 60%;
  font-family: "Noto Sans", sans-serif;
  font-weight: 500;
  font-size: 17px;
  line-height: 29px;
  color: rgb(38, 38, 38);
`;

const BrandImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: left;
  @media (max-width: 999px) {
    justify-content: center;
  }
  /* background-color: red; */
`;

const BrandImage = styled.img`
  max-width: 60%;
  border-radius: 8px;
`;

function About() {
  return (
    <>
      <AboutWrapper>
        <Navbar fade={false} />
        <AboutContent>
          <VideoBackground height={65} />
          <TextWrapper>
            <Tagline>Ideato per accompagnarti ogni giorno.</Tagline>
            <SubTagline>Progettato per resistere nel tempo.</SubTagline>
          </TextWrapper>
        </AboutContent>
        <AboutBrandWrapper>
          <BrandDescription>
            <BrandDescriptionText>
              Occhialy propone occhiali esclusivi, realizzati con materiali di alta qualità e progettati per chi cerca eleganza e originalità.
            </BrandDescriptionText>
            <BrandDescriptionParagraph>
              <LoremIpsum p={2} />
            </BrandDescriptionParagraph>
          </BrandDescription>
          <BrandImageContainer>
            <BrandImage src="./image/case/case1.png" />
          </BrandImageContainer>
        </AboutBrandWrapper>
      </AboutWrapper>
    </>
  )
}

export default About