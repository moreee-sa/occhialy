import styled from "styled-components";
import '@fontsource/libre-baskerville';
import occhiali from "../data/occhiali.json";
import { BREAKPOINTS, COLORS, FONTS, RADIUS } from "../lib/constants";

const GridContainer = styled.div`
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  
  @media (min-width: ${BREAKPOINTS.DESKTOP}) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: ${BREAKPOINTS.MOBILE}) and (max-width: ${BREAKPOINTS.DESKTOP}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${BREAKPOINTS.MOBILE}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const CardShadowInset = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: ${RADIUS.LARGE};
  transition: box-shadow 0.3s ease-in-out;
`;

const CardInfo = styled.div`
  position: absolute;
  width: 80%;
  height: 80%;
  display: flex;
  justify-content: flex-end;
  align-items: start;
  flex-direction: column;
  transition: transform 0.3s ease-in-out;

  @media (max-width: ${BREAKPOINTS.LARGE_DESKTOP}) {
    width: 90%;
  }
`;

const CardInfoText = styled.span`
  font-family: ${FONTS.LIBRE_BASKERVILLE};
  font-weight: 400;
  font-size: 25px;
  line-height: 40px;
  color: ${COLORS.LIGHT_PRIMARY};
`;

const CardInfoParagraph = styled.span`
  font-family: ${FONTS.LIBRE_BASKERVILLE};
  font-weight: 400;
  font-size: 15px;
  color: #ccc;
  text-align: left;
  margin-bottom: 5px;
`;

const Image = styled.img`
  width: 100%;
  border-radius: ${RADIUS.LARGE};
  object-fit: cover;
`;

const CardInfoHidden = styled.span`
  font-family: ${FONTS.LIBRE_BASKERVILLE};
  font-weight: 400;
  font-size: 13px;
  color: #ccc;
  text-align: left;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  text-transform: uppercase;
`;

const Card = styled.div`
  position: relative;
  border-radius: ${RADIUS.LARGE};
  color: ${COLORS.LIGHT_PRIMARY};
  text-align: center;
  height: 400px; /* Imposta un'altezza fissa o usa min-height */
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover{
    transform: translateY(-15px);
    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.3);
  }

  &:hover ${CardInfo} {
    transform: translateY(-20px); /* Solleva solo il testo */
  }

  &:hover ${CardInfoHidden} {
    opacity: 1;
  }

  &:hover ${CardShadowInset} {
    box-shadow: inset 0px -180px 90px -15px rgba(0,0,0,0.35);
  }
`;

function CardsCollection({ color, stock, limit }) {
  const filteredOcchiali = occhiali
    .filter((item) => {
      const colorMatch = color === "all" || item.color === color;
      const stockMatch = !stock || item.availability === "Stock";
      return colorMatch && stockMatch;
    });

  const displayedOcchiali = limit ? filteredOcchiali.slice(0, limit) : filteredOcchiali;

  return (
    <GridContainer>
      {displayedOcchiali.map((item) => (
        <Card key={item.id}>
          <CardShadowInset />
          <CardInfo>
            <CardInfoText>{item.nome}</CardInfoText>
            <CardInfoParagraph>{item.info}</CardInfoParagraph>
            <CardInfoHidden>{item.color} - {item.availability}</CardInfoHidden>
          </CardInfo>
          <Image src={item.imageUrl} style={{ height: "400px" }} />
        </Card>
      ))}
    </GridContainer>
  );
}

export default CardsCollection;