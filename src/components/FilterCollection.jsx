import { useState } from "react";
import CardsCollection from "./CardsCollection"
import styled from "styled-components"
import "@fontsource/noto-sans/500.css";

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
  width: 160px;
  height: 46px;
  border-radius: 4px;
  box-sizing: border-box;
  transition: background-color 0.2s ease;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #121212;
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
  margin-right: 10px;
  background-color: transparent;
  color: #ffffff;
  font-family: "Noto Sans", sans-serif;
  font-weight: 500;
  font-size: 14px;
  user-select: none;
`;

const FilterOption = styled.option`
  background-color: #121212;
  color: #aca8a8;
`;

const FilterLabel = styled.span`
  color: #ffffff;
  font-family: "Noto Sans", sans-serif;
  font-weight: 500;
  font-size: 14px;
`;

const FilterCheckbox = styled.input`
  height: 16px;
  width: 16px;
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
              style={{ cursor: "pointer" }}
            />
          </FilterBox>

        </FilterWrapper>
      </FilterContainer>
      <CardsCollection color={selectedColor} stock={isStockChecked}/>
    </>
  )
}

export default Filter