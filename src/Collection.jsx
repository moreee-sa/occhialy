import Navbar from "./components/Navbar"
import styled from "styled-components"

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

const ConstructionMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: #ff6347;
  font-weight: bold;
  text-align: center;
  background-color: #f0f0f0;

  font-family: "Libre Baskerville", sans-serif;
  font-weight: 400;
  font-size: clamp(24px, 5vw, 42px);
  line-height: 63px;
  color: rgb(114, 110, 110);
`;

function Collection() {
  return (
    <Content>
      <Navbar fade={false} inverted={true} />
      <ConstructionMessage>
          Ancora in costruzione...
      </ConstructionMessage>
    </Content>
  )
}

export default Collection