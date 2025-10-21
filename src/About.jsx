import Navbar from "./components/Navbar"
import VideoBackground from "./components/home/VideoBackground";
import AboutSection from "./components/about/AboutSection";
import AboutTagline from "./components/about/AboutTagline";
import styled from "styled-components";
import GetPageTitle from "./components/GetPageTitle";
import Footer from "./components/Footer";
import { COLORS } from "./lib/constants";

const AboutWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  background-color: ${COLORS.BACKGROUND_PRIMARY};
`;

const VideoSection = styled.div`
  position: relative;
  height: 65vh;
  width: 100%;
  overflow: hidden;
`;

const ContentOverlay = styled.div`
  position: relative;
  z-index: 20;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 90%;
`;

function About() {
  return (
    <AboutWrapper>
      <GetPageTitle />
      <Navbar isInverted={true} isFading={false} />
      <VideoSection>
        <VideoBackground height={100} />
        <ContentOverlay>
          <AboutTagline />
        </ContentOverlay>
      </VideoSection>
      <AboutSection />
      <Footer />
    </AboutWrapper>
  )
}

export default About