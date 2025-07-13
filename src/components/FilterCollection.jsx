import { useState } from "react";
import CardsCollection from "./CardsCollection"
import styled, { keyframes } from "styled-components"
import "@fontsource/noto-sans/500.css";
import { MOBILE_BREAKPOINT, COLORS, FONTS } from "../lib/constants";

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

const gradient = keyframes`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`;

const FilterBox = styled.div`
  width: 160px;
  height: 46px;
  border-radius: 4px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
  user-select: none;
  background: linear-gradient(
    90deg,
    rgba(40, 40, 40, 1) 0%,
    rgba(60, 60, 60, 1) 50%,
    rgba(80, 80, 80, 1) 100%
  );
  background-size: 200% 200%;
  transition: background 0.5s ease, transform 0.1s ease-in-out;
  animation: ${gradient} 4s ease infinite;

  &:hover {
    animation: ${gradient} 1.5s ease infinite;
    background: linear-gradient(
      90deg,
      rgba(50, 50, 50, 1) 0%,
      rgba(70, 70, 70, 1) 50%,
      rgba(90, 90, 90, 1) 100%
    );
    background-size: 200% 200%;
  }

  @media only screen and (max-width: ${MOBILE_BREAKPOINT}) {
    width: 100%;
  }
`;

const FilterSelect = styled.select`
  border: transparent;
  width: 100%;
  height: 100%;
  outline: none;
  padding: 0 10px;
  margin-right: 10px;
  background-color: transparent;
  color: ${COLORS.LIGHT_PRIMARY};
  font-family: ${FONTS.NOTO_SANS};
  font-weight: 500;
  font-size: 14px;
  user-select: none;
`;

const FilterOption = styled.option`
  background-color: #121212;
  color: #aca8a8;
`;

const FilterLabel = styled.span`
  color: ${COLORS.LIGHT_PRIMARY};
  font-family: ${FONTS.NOTO_SANS};
  font-weight: 500;
  font-size: 14px;
`;

const FilterCheckbox = styled.input`
  height: 16px;
  width: 16px;
  cursor: pointer;
`;

function Filter() {
  const [isStockChecked, setIsStockChecked] = useState(false);
  const [selectedColor, setSelectedColor] = useState("all");
  
  const handleStockCheckbox = () => {
    setIsStockChecked((prev) => !prev);
  };

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  return (
    <>
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
            <FilterCheckbox
              type="checkbox"
              name="stock"
              value="Stock"
              checked={isStockChecked}
              onChange={handleStockCheckbox}
              onClick={handleStockCheckbox}
            />
          </FilterBox>
        </FilterWrapper>
      </FilterContainer>
      <CardsCollection color={selectedColor} stock={isStockChecked}/>
    </>
  )
}

export default Filter