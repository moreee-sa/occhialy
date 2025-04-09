import Navbar from "./components/Navbar"
import VideoBackground from "./components/VideoBackground";
import AboutSection from "./components/AboutSection";
import styled from "styled-components";
import GetPageTitle from "./components/GetPageTitle";

const AboutWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
`;

const AboutHome = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 0 80px;
  @media (max-width: 999px) {
    padding: 0 20px;
  }
`;

function About() {
  return (
    <AboutWrapper>
      <GetPageTitle />
      <Navbar fade={false} />
      <AboutHome>
        <VideoBackground height={65} />
        <AboutSection />
      </AboutHome>
    </AboutWrapper>
  )
}

export default About