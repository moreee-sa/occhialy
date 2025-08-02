import Navbar from "./components/Navbar"
import VideoBackground from "./components/VideoBackground";
import AboutSection from "./components/AboutSection";
import AboutTagline from "./components/AboutTagline";
import styled from "styled-components";
import GetPageTitle from "./components/GetPageTitle";
import Footer from "./components/Footer";
import { COLORS, BREAKPOINTS } from "./lib/constants";

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