import { useState, useEffect, use } from "react";
import styled from "styled-components";
import "@fontsource/noto-sans/500.css";
import "@fontsource/noto-sans/600.css";
import { FiMenu, FiX } from "react-icons/fi"; // Icone per hamburger menu
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';

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

const BrandNameLogo = styled.div`
  font-family: "Noto Sans", sans-serif;
  font-weight: 600;
  font-size: 22px;
  color: ${(props) => (props.$inverted ? "black" : "white")};
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
  gap: 10px;
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
  color: ${(props) => (props.$inverted ? "black" : "white")};
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

const GithubButton = styled.button`
  background-color: black;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  height: 40px;
  width: 40px;
  cursor: pointer;
  transition: all 0.2s ease;
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
  gap: 20px;
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

const SidebarLink = styled.span`
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

function Navbar({ fade, inverted }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isFading, setIsFading] = useState(fade);
  const [isInverted, setIsInverted] = useState(inverted);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const links = [
    { id: 0, name: "Home", path: "/" },
    { id: 1, name: "Collezione", path: "/collection" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Contatti", path: "/contact" },
    { id: 4, name: "Github", path: "https://github.com/moreee-sa/occhialy.git"}
  ];

  return (
    <>
      <NavbarWrapper $isVisible={isVisible} $fade={isFading}>
        {/* Desktop Links */}
        <LinksWrapper>
          {links
            .filter((link) => Number(link.id) !== 3 && Number(link.id) !== 4)
            .map((link) => (
              <Link key={link.id} to={link.path} style={{ textDecoration: "none" }}>
                <StyledText $inverted={isInverted}>{link.name}</StyledText>
              </Link>
            ))}
        </LinksWrapper>
        
        <BrandNameLogo $inverted={isInverted}>
          <Link
            to={links[0].path}
            style={{ 
              textDecoration: "none", 
              color: isInverted ? "black" : "white" 
            }}
          >
            Occhialy
          </Link>
        </BrandNameLogo>

        <OtherLinkWrapper>
          <GithubButton onClick={() => window.open("https://github.com/moreee-sa/occhialy.git", "_blank")}>
            <FaGithub color="white" />
          </GithubButton>
          <ContactButton>Contatti</ContactButton>
        </OtherLinkWrapper>

        {/* Hamburger Button (Solo Mobile) */}
        <HamburgerButton onClick={() => setSidebarOpen(true)}>
          <FiMenu color={isInverted ? "black" : "white"} />
        </HamburgerButton>
      </NavbarWrapper>

      {/* Sidebar Menu */}
      <Sidebar open={sidebarOpen}>
        <CloseButton onClick={() => setSidebarOpen(false)}>
          <FiX style={{ color: "black" }} />
        </CloseButton>
        {links.map((link) => (
          <Link key={link.id} to={link.path} style={{ textDecoration: "none" }}>
            <SidebarLink>{link.name}</SidebarLink>
          </Link>
        ))}
      </Sidebar>

      <SidebarBackground onClick={() => setSidebarOpen(false)} onMouseEnter={() => setSidebarOpen(false)} open={sidebarOpen}></SidebarBackground>
    </>
  );
}

export default Navbar;