import styled from "styled-components";
import '@fontsource/libre-baskerville';
import "@fontsource/noto-sans/500.css";
import "@fontsource/noto-sans/600.css";

const GridContainer = styled.div`
  display: grid;
  /* border: 1px solid blue; */
  grid-template-columns: repeat(4, 1fr); /* 4 colonne di base */
  gap: 15px;
  justify-content: center;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr); /* 2 colonne quando lo schermo si restringe */
    gap: 35px;
  }

  @media (max-width: 999px) {
    grid-template-columns: repeat(1, 1fr); /* 1 colonna su schermi piccoli */
    gap: 50px;
  }
`;

const CardShadowInset = styled.div`
  position: absolute;
  /* background-color: #ad952a52; */
  width: 100%;
  height: 100%;
  border-radius: 12px;
  transition: box-shadow 0.3s ease-in-out;
`;

const CardInfo = styled.div`
  position: absolute;
  width: 80%;
  height: 80%;
  /* background-color: #87879e8f; */
  display: flex;
  justify-content: flex-end;
  align-items: start;
  flex-direction: column;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 1200px) {
    width: 90%;
  }
`;

const CardInfoText = styled.span`
  font-family: "Libre Baskerville", sans-serif;
  font-weight: 400;
  font-size: 25px;
  line-height: 40px;
  color: white;
`;

const CardInfoParagraph = styled.span`
  font-family: "Libre Baskerville", sans-serif;
  font-weight: 400;
  font-size: 15px;
  color: #ccc;
  text-align: left;
  margin-bottom: 5px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 12px;
  object-fit: cover;
`;

const CardInfoHidden = styled.span`
  font-family: "Libre Baskerville", sans-serif;
  font-weight: 400;
  font-size: 13px;
  color: #ccc;
  text-align: left;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
`;

const Card = styled.div`
  position: relative;
  border-radius: 12px;
  color: white;
  /* background-color: red; */
  text-align: center;
  /* padding: 20px; */
  height: 400px; /* Imposta un'altezza fissa o usa min-height */
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover{
    /* background-color: blue; */
    transform: translateY(-15px);
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);
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

const occhiali = [
  {
    id: 0,
    nome: "Nero Lucente",
    info: "Un design audace che evoca eleganza e forza.",
    hiddenInfo: "Testo Nascosto",
    path: "/1",
    imageUrl: "./image/glasses/glasses4.png"
  },
  {
    id: 1,
    nome: "Oro Luminoso",
    info: "L'unione perfetta di stile raffinato e modernità.",
    hiddenInfo: "Testo Nascosto",
    path: "/2",
    imageUrl: "./image/glasses/glasses2.png"
  },
  {
    id: 2,
    nome: "Titanio Raffinato",
    info: "Una fusione di tecnologia avanzata e design futuristico.",
    hiddenInfo: "Testo Nascosto",
    path: "/3",
    imageUrl: "./image/glasses/glasses1.png"
  },
  {
    id: 3,
    nome: "Vetro Cristallino",
    info: "Semplicità sofisticata con una visione chiara e pura.",
    hiddenInfo: "Testo Nascosto",
    path: "/4",
    imageUrl: "./image/glasses/glasses3.png"
  },
];

function CardsCollection () {
  return (
    <>
      <GridContainer>
        {occhiali.map((item) => (
          <Card key={item.id}>
            <CardShadowInset/>
            <CardInfo>
              <CardInfoText>
                {item.nome}
              </CardInfoText>
              <CardInfoParagraph>
                {item.info}
              </CardInfoParagraph>
              <CardInfoHidden>
                {item.hiddenInfo}
              </CardInfoHidden>
            </CardInfo>
            <Image src={item.imageUrl} style={{ height: "400px" }} />
          </Card>
        ))}
      </GridContainer>
    </>
  )
}

export default CardsCollection