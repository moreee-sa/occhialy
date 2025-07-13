import styled from 'styled-components'
import "@fontsource/noto-sans/500.css";
import "@fontsource/noto-sans/600.css";
import '@fontsource/libre-baskerville';
import { LIGHT_PRIMARY_COLOR } from "../lib/constants";

const TextWrapperHeight = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex-wrap: wrap;
`;

const TextWrapper = styled.div`
  margin: 40px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  @media (max-width: 999px) {
    flex-direction: column;
  }
`;

const LeftTextWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const RightTextWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  @media (max-width: 999px) {
    display: none;
  }
`;

const TextIntro = styled.span`
  font-family: "Libre Baskerville", sans-serif;
  font-weight: 400;
  font-size: clamp(24px, 5vw, 42px);
  line-height: 63px;
  color: ${LIGHT_PRIMARY_COLOR};
`;

const TextContainer = styled.div`
  width: 50%;
  @media (max-width: 999px) {
    width: auto;
    text-align: center;
  }
`;

const TextP = styled.span`
  font-family: "Noto Sans", sans-serif;
  font-weight: 500;
  font-size: clamp(18px, 2vw, 22px);
  line-height: 37px;
  color: ${LIGHT_PRIMARY_COLOR};
`;

const TextLimited = styled.span`
  font-family: "Noto Sans", sans-serif;
  font-weight: 500;
  font-size: clamp(18px, 2vw, 22px);
  line-height: 37px;
  color: ${LIGHT_PRIMARY_COLOR};
  display: none;
  @media (max-width: 999px) {
    display: block;
  }
`;

function Introduction() {
  return (
    <TextWrapperHeight>
      <TextWrapper>
        <TextLimited>
          Edizione Numerata
        </TextLimited>

        <LeftTextWrapper>
          <TextContainer>
            <TextIntro>
              Lancio della collezione 2025
            </TextIntro>
          </TextContainer>
        </LeftTextWrapper>

        <RightTextWrapper>
          <TextContainer>
            <TextP>
              Un incontro senza tempo tra un design minimalista e una forma funzionale.
            </TextP>
          </TextContainer>
        </RightTextWrapper>
      </TextWrapper>
    </TextWrapperHeight>
  )
}

export default Introduction