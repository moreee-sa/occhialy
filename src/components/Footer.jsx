import styled from "styled-components";
import '@fontsource/libre-baskerville';
import "@fontsource/noto-sans/400.css";
import "@fontsource/noto-sans/500.css";
import "@fontsource/noto-sans/600.css";
import { MOBILEBREAKPOINT, LIGHT_PRIMARY_COLOR } from "../lib/constants";

const FooterWrapper = styled.div`
  height: 30vh;
  background-color: #0a0a0a;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 18px;
  box-sizing: border-box;
  justify-items: center;
  padding: 40px 80px;
  @media (max-width: 999px) {
    padding: 40px 20px;
  }
`;

const LogoWrapper = styled.div`
  font-family: "Noto Sans", sans-serif;
  font-weight: 500;
  font-size: 30px;
  line-height: 43px;
  color: ${LIGHT_PRIMARY_COLOR};
  display: flex;
  align-items: center;

  @media only screen and (max-width: ${MOBILEBREAKPOINT}) {
    font-size: 15px;
    line-height: 25px;
  }
`;

const SocialWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Rights = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: span 2 / span 2;
  font-family: "Noto Sans", sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: ${LIGHT_PRIMARY_COLOR};
`;

const SocialLink = styled.a`
  font-family: "Noto Sans", sans-serif;
  font-weight: 500;
  font-size: 13px;
  line-height: 14px;
  color: ${LIGHT_PRIMARY_COLOR};
  text-decoration: underline;
`;

const socialLinks = [
  { id: 0, name: "Instagram", path: "/" },
  { id: 1, name: "X/Twitter", path: "/collection" },
  { id: 2, name: "Youtube", path: "/about" },
  { id: 3, name: "TikTok", path: "/contact" },
];

function Footer() {
  return (
    <>
      <FooterWrapper>
        <LogoWrapper>
          Impegnati nell'arte, non nei riflettori sociali.
        </LogoWrapper>
        <SocialWrapper>
          {socialLinks.map((item) => (
            <SocialLink
              key={item.id}
              href="https://github.com/moreee-sa/occhialy"
              target="blank"
            >
              {item.name}
            </SocialLink>
          ))}
        </SocialWrapper>
        <Rights>
          © 2025 moreee-sa – Questo sito è stato creato con passione 💙
        </Rights>
      </FooterWrapper>
    </>
  )
}

export default Footer;