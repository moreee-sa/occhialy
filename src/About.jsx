import Navbar from "./components/Navbar"
import VideoBackground from "./components/VideoBackground";
import AboutSection from "./components/AboutSection";
import styled from "styled-components";
import GetPageTitle from "./components/GetPageTitle";
import Footer from "./components/Footer";
import { COLORS, BREAKPOINTS } from "./lib/constants";

const AboutWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  background-color: ${COLORS.BACKGROUND_PRIMARY};
`;

const AboutHome = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 0 80px;
  @media (max-width: ${BREAKPOINTS.DESKTOP}) {
    padding: 0 20px;
  }
`;

function About() {
  return (
    <AboutWrapper>
      <GetPageTitle />
      <Navbar isFading={false} />
      <AboutHome>
        <VideoBackground height={65} />
        <AboutSection />
      </AboutHome>
      <Footer />
    </AboutWrapper>
  )
}

export default About