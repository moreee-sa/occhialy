import Navbar from "./components/Navbar"
import styled from "styled-components"
import '@fontsource/libre-baskerville';
import "@fontsource/noto-sans/400.css";
import "@fontsource/noto-sans/500.css";
import "@fontsource/noto-sans/600.css";
import LoremIpsum from "react-lorem-ipsum";

const CollectionWrapper = styled.div`
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
`;

const Content = styled.div`
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
  color: #000000;
  text-align: center;
`;

const TaglineWrapper = styled.div`
  width: 50%;
  /* background-color: red; */
`;

const Tagline = styled.p`
  font-family: "Libre Baskerville", sans-serif;
  font-weight: 400;
  
  @media only screen and (min-width: 1200px) {
    font-size: 86px;
    line-height: 112px;
  }

  @media only screen and (max-width: 1200px) {
    font-size: 38px;
    line-height: 50px;
  }
`;

const SubTaglineWrapper = styled.div`
  width: 80%;
  /* background-color: red; */
`;

const SubTagline = styled.p`
  font-family: "Libre Baskerville", sans-serif;
  font-weight: 400;
  margin-top: 20px;
  font-size: 22px;
  line-height: 40px;
`; 

const EditionParagraph = styled.p`
  font-family: "Noto Sans", sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 30px;
  color: #898989;
`;

const NavbarWrapper = styled.div`
  position: sticky;
  top: 0;
`;

function Collection() {
  return (
    <CollectionWrapper>
      <Navbar fade={false} inverted={true} />
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
      </Content>
    </CollectionWrapper>
  )
}

export default Collection