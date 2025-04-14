import { useState } from "react";
import Navbar from "./components/Navbar"
import styled from "styled-components"
import '@fontsource/libre-baskerville';
import "@fontsource/noto-sans/400.css";
import "@fontsource/noto-sans/500.css";
import "@fontsource/noto-sans/600.css";
import LoremIpsum from "react-lorem-ipsum";
import GetPageTitle from "./components/GetPageTitle";
import CardsCollection from "./components/CardsCollection";
import Footer from "./components/Footer";

const CollectionWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
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
  color: #000000;
  text-align: center;
  margin-bottom: 50px;
  @media only screen and (max-width: 768px) {
    text-align: left;
    align-items: flex-start;
  }
`;

const TaglineWrapper = styled.div`
  width: 50%;
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
`;

const SubTagline = styled.span`
  font-family: "Libre Baskerville", sans-serif;
  font-weight: 400;
  margin-top: 20px;
  font-size: 20px;
  line-height: 40px;
  @media only screen and (max-width: 768px) {
    font-size: 16px;
    line-height: 33px;
  }
`;

const EditionParagraph = styled.p`
  font-family: "Noto Sans", sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 30px;
  color: #898989;
`;

const FilterContainer = styled.div`
  margin-bottom: 25px;
  padding: 10px 0;
  border-radius: 8px;
`;

const FilterWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const FilterBox = styled.div`
  width: 188px;
  height: 36px;
  border-radius: 4px;
  box-sizing: border-box;
  transition: background-color 0.2s ease;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #200b0b;
  cursor: pointer;
  user-select: none;

  &:hover {
    background-color: #252933;
  }
`;

const FilterSelect = styled.select`
  border: transparent;
  width: 100%;
  height: 100%;
  outline: none;
  padding: 0 10px;
  background-color: transparent;
  color: #aca8a8;
  font-family: "Noto Sans", sans-serif;
  font-weight: 500;
  font-size: 14px;
  user-select: none;
`;

const FilterOption = styled.option`
  background-color: #200b0b;
  color: #aca8a8;
`;

const FilterLabel = styled.span`
  color: #aca8a8;
  font-family: "Noto Sans", sans-serif;
  font-weight: 500;
  font-size: 14px;
`;

function Collection() {
  const [isStockChecked, setIsStockChecked] = useState(false);
  const [selectedColor, setSelectedColor] = useState("all");
  
  const handleStockCheckbox = () => {
    setIsStockChecked((prev) => !prev);
  };

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
    console.log("Colore selezionato:", event.target.value);
  };

  return (
    <CollectionWrapper>
     <GetPageTitle />
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

        <FilterContainer>
          <FilterWrapper>

            <FilterBox>
              <FilterSelect id="color" name="color" onChange={handleColorChange}>
                <FilterOption value="all">Tutti i colori</FilterOption>
                <FilterOption value="black">Black</FilterOption>
                <FilterOption value="gold">Gold</FilterOption>
                <FilterOption value="silver">Silver</FilterOption>
                <FilterOption value="white">White</FilterOption>
              </FilterSelect>
            </FilterBox>

            <FilterBox onClick={handleStockCheckbox}>
              <FilterLabel>
                Disponibilita'
              </FilterLabel>
              <input
                type="checkbox"
                name="stock"
                value="Stock"
                checked={isStockChecked}
                onChange={handleStockCheckbox}
                style={{ cursor: "pointer" }}
              />
            </FilterBox>

          </FilterWrapper>
        </FilterContainer>

      <CardsCollection color={selectedColor} stock={isStockChecked}/>
      </Content>
      <Footer />
    </CollectionWrapper>
  )
}

export default Collection