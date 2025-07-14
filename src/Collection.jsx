import Navbar from "./components/Navbar"
import styled from "styled-components"
import '@fontsource/libre-baskerville';
import "@fontsource/noto-sans/500.css";
import LoremIpsum from "react-lorem-ipsum";
import GetPageTitle from "./components/GetPageTitle";
import FilterCollection from "./components/FilterCollection";
import Footer from "./components/Footer";
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT, COLORS , FONTS } from "./lib/constants";

const CollectionWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  background-color: ${COLORS.BACKGROUND_PRIMARY};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 65%;
  padding: 80px 80px;
  margin-top: 50px;
  @media (max-width: 999px) {
    padding: 20px 20px;
  }
`;

const TextWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${COLORS.DARK_PRIMARY};
  text-align: center;
  margin-bottom: 50px;
  @media only screen and (max-width: ${MOBILE_BREAKPOINT}) {
    text-align: left;
    align-items: flex-start;
  }
`;

const TaglineWrapper = styled.div`
  width: 50%;
`;

const Tagline = styled.p`
  font-family: ${FONTS.LIBRE_BASKERVILLE};
  font-weight: 400;
  
  @media only screen and (min-width: ${TABLET_BREAKPOINT}) {
    font-size: 86px;
    line-height: 112px;
  }

  @media only screen and (max-width: ${TABLET_BREAKPOINT}) {
    font-size: 38px;
    line-height: 50px;
  }
`;

const SubTaglineWrapper = styled.div`
  width: 80%;
`;

const SubTagline = styled.span`
  font-family: ${FONTS.LIBRE_BASKERVILLE};
  font-weight: 400;
  margin-top: 20px;
  font-size: 20px;
  line-height: 40px;
  @media only screen and (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 16px;
    line-height: 33px;
  }
`;

const EditionParagraph = styled.p`
  font-family: ${FONTS.NOTO_SANS};
  font-weight: 500;
  font-size: 16px;
  line-height: 30px;
  color: #898989;
`;

function Collection() {
  return (
    <CollectionWrapper>
      <GetPageTitle />
      <Navbar isFading={false} isInverted={true} />
      <Content>
        <TextWrapper>
          <TaglineWrapper>
            <Tagline>Collezione 2025</Tagline>
          </TaglineWrapper>
          <EditionParagraph>Edizione Numerata</EditionParagraph>
          <SubTaglineWrapper>
            <SubTagline>
              <LoremIpsum />
            </SubTagline>
          </SubTaglineWrapper>
      </TextWrapper>
      <FilterCollection />
      </Content>
      <Footer />
    </CollectionWrapper>
  )
}

export default Collection