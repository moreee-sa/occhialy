import { useState } from "react";
import styled from "styled-components";
import '@fontsource/libre-baskerville';
import "@fontsource/noto-sans/400.css";
import "@fontsource/noto-sans/500.css";
import "@fontsource/noto-sans/600.css";

const NewsletterWrapper = styled.div`
  /* background-color: blue; */
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding: 0 80px 120px 80px;
  @media (max-width: 999px) {
    padding: 0 20px 60px 20px;
  }
`;

const FormData = styled.form`
  min-width: 40%;
  border-radius: 9px;
  padding: 6px;
  display: flex;
  justify-content: space-between;
  outline: 1px solid #d1d1d1;
  transition: box-shadow 0.3s ease;

  &:focus-within {
    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 999px) {
    min-width: 60%;
  }
`;

const SendButton = styled.button`
  background-color: black;
  border: none;
  border-radius: 8px;
  color: white;
  font-family: "Noto Sans", sans-serif;
  font-weight: 500;
  font-size: 14px;
  height: 40px;
  width: 140px;
  cursor: pointer;
`;

const EmailInput = styled.input`
  width: 100%;
  font-family: "Noto Sans", sans-serif;
  font-weight: 400;
  line-height: 16px;
  font-size: 16px;
  border: none;
  outline: none;
`;

const TextWrapper = styled.div`
  max-width: 60%;
  /* background-color: blue; */
  text-align: center;
  margin: 60px 0;
`;

const Text = styled.span`
  font-family: "Libre Baskerville", sans-serif;
  font-weight: 400;
  font-size: clamp(24px, 5vw, 45px);
  line-height: 1.2; /* Usa un valore relativo */
  color: rgb(29, 29, 31);
`;

function NewsletterSubscription() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  // Funzione di gestione dell'input email
  const handleChange = (e) => {
    setSent(false);
    setEmail(e.target.value);
  };

  // Funzione di gestione del submit
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita il refresh della pagina
    console.log("Email inviata: ", email);
    setEmail("");
    setSent(true);
  };

  return (
    <>
      <NewsletterWrapper>
        <TextWrapper>
          <Text>
            Tieniti informato e non perderti niente.
          </Text>
        </TextWrapper>
        <FormData onSubmit={handleSubmit}>
          <EmailInput
            type="email"
            name="email"
            id="email"
            placeholder={sent? "Email inviata" : "Inserisci la tua email"}
            required
            value={email}
            onChange={handleChange}
          />
          <SendButton type="submit">Invia</SendButton>
        </FormData>
      </NewsletterWrapper>
    </>
  )
}

export default NewsletterSubscription