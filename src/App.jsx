import './App.css';
import '@fontsource/libre-baskerville';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
import CollectionShowcase from './components/Showcase';
import NewsletterSubscription from './components/NewsletterSubscription';
import Footer from './components/Footer';
import VideoBackground from "./components/VideoBackground";
import GetPageTitle from './components/GetPageTitle';
import { LoremIpsum } from 'react-lorem-ipsum';

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
`;

const AppHome = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 0 80px;
  @media (max-width: 999px) {
    padding: 0 20px;
  }
`;

function App() {
  return (
    <AppWrapper>
      <GetPageTitle />
      <Navbar fade={true} />
      <AppHome>
        <VideoBackground height={100} />
        <Introduction />
      </AppHome>
      <div style={{ backgroundColor: "blue", height: "100px", display: "none" }}>
        <LoremIpsum p={2} />
      </div>
      <CollectionShowcase />
      <NewsletterSubscription id='contact-form' />
      <Footer />
    </AppWrapper>
  )
}

export default App