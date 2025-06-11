import Navbar from "./components/Navbar";
import styled from "styled-components";
import NewsletterSubscription from "./components/NewsletterSubscription";
import Footer from "./components/Footer";
import GetPageTitle from "./components/GetPageTitle";

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const FullHeightNewsletter = styled.div`
  flex: 1;
`;

function Contact() {
  return (
    <ContactWrapper>
      <GetPageTitle />
      <Navbar isInverted={true} />
      <FullHeightNewsletter>
        <NewsletterSubscription />
      </FullHeightNewsletter>
      <Footer />
    </ContactWrapper>
  )
}

export default Contact