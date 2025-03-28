import { useState, useEffect, use } from "react";
import styled from "styled-components";
import "@fontsource/noto-sans/500.css";
import "@fontsource/noto-sans/600.css";
import { FiMenu, FiX } from "react-icons/fi"; // Icone per hamburger menu

const NavbarWrapper = styled.div`
  height: 75px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  opacity: ${(props) => (props.$isVisible ? 1 : 0)};
  transition: ${(props) => (props.$fade ? "opacity 2s ease-in-out" : "none")};

  @media (max-width: 999px) {
    padding: 0 10px;
  }
`;

const LogoWrapper = styled.div`
  font-family: "Noto Sans", sans-serif;
  font-weight: 600;
  font-size: 22px;
  color: white;
`;

const LinksWrapper = styled.div`
  display: flex;
  gap: 30px;
  width: 100%;

  @media (max-width: 999px) {
    display: none; /* Nascondi i link nella navbar quando diventa sidebar */
  }
`;

const OtherLinkWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 25px;
  font-family: "Noto Sans", sans-serif;
  font-weight: 600;
  font-size: 22px;
  width: 100%;

  @media (max-width: 999px) {
    display: none;
  }
`;

const StyledText = styled.span`
  font-family: "Noto Sans", sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: white;
  transition: color 0.2s ease;

  &:hover {
    color: #7c7c7c;
  }
`;

const ContactButton = styled.button`
  background-color: black;
  border: none;
  border-radius: 8px;
  color: white;
  font-family: "Noto Sans", sans-serif;
  font-weight: 500;
  font-size: 15px;
  height: 40px;
  width: 140px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: white;
    color: rgb(29, 29, 31);
  }
`;

const HamburgerButton = styled.div`
  display: none;
  font-size: 30px;
  color: white;
  cursor: pointer;

  @media (max-width: 999px) {
    display: block; /* Mostra l'hamburger menu quando lo schermo è piccolo */
  }
`;

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  right: ${(props) => (props.open ? "0" : "-100%")}; /* Mostra/Nasconde il menu */
  width: 250px;
  height: 100%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
  transition: right 0.3s ease-in-out;
  z-index: 2;
`;

const CloseButton = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 30px;
  color: white;
  cursor: pointer;
`;

const SidebarLink = styled.a`
  color: #000000;
  font-size: 18px;
  margin: 20px 0;
  text-decoration: none;
  font-family: "Noto Sans", sans-serif;

  &:hover {
    color: gray;
  }
`;

const SidebarBackground = styled.div`
  position: fixed;
  top: 0;
  right: ${(props) => (props.open ? "0" : "100%")};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
  transition: right 0.3s ease-in-out;
  z-index: 1;
  /* background-color: red; */
`;

const links = [
  { id: 0, name: "Home", path: "/" },
  { id: 1, name: "Collezione", path: "/collection" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Contatti", path: "/contact" },
];

function Navbar({ fade }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isFading, setIsFading] = useState(fade);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <NavbarWrapper $isVisible={isVisible}  $fade={isFading}>
        {/* Desktop Links */}
        <LinksWrapper>
          {links
            .filter((link) => link.id !== 3) // Esclude il link con id 3
            .map((link) => (
              <a key={link.id} href={link.path} style={{ textDecoration: "none" }}>
                <StyledText>{link.name}</StyledText>
              </a>
          ))}
        </LinksWrapper>
        
        <LogoWrapper>Occhialy</LogoWrapper>

        <OtherLinkWrapper>
          <ContactButton>Contatti</ContactButton>
        </OtherLinkWrapper>

        {/* Hamburger Button (Solo Mobile) */}
        <HamburgerButton onClick={() => setSidebarOpen(true)}>
          <FiMenu />
        </HamburgerButton>
      </NavbarWrapper>

      {/* Sidebar Menu */}
      <Sidebar open={sidebarOpen}>
        <CloseButton onClick={() => setSidebarOpen(false)}>
          <FiX style={{ color: "black" }} />
        </CloseButton>
        {links.map((link) => (
          <SidebarLink key={link.id} href={link.path}>
            {link.name}
          </SidebarLink>
        ))}
      </Sidebar>

      <SidebarBackground onClick={() => setSidebarOpen(false)} onMouseEnter={() => setSidebarOpen(false)} open={sidebarOpen}></SidebarBackground>
    </>
  );
}

export default Navbar;