import { useState, useEffect } from "react";
import styled from "styled-components";
import "@fontsource/noto-sans/500.css";
import "@fontsource/noto-sans/600.css";
import { FiMenu, FiX } from "react-icons/fi"; // Icone per hamburger menu
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { COLORS, FONTS, RADIUS, BREAKPOINTS } from "../lib/constants";

const NavbarSticky = styled.div`
  position: sticky;
  top: 0;
  z-index: 50;
`;

const NavbarWrapper = styled.div`
  min-height: 75px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => (props.$scrolled ? COLORS.DARK_PRIMARY : "transparent")};
  transition: ${props => 
    props.$fade 
      ? "background 0.3s ease-in-out, opacity 2s ease-in-out" 
      : "background 0.3s ease-in-out"};
  z-index: 5;

  padding: 0 80px;
  @media (max-width: ${BREAKPOINTS.DESKTOP}) {
    padding: 0 20px;
  }
`;

const BrandNameLogo = styled.div`
  font-family: ${FONTS.NOTO_SANS};
  font-weight: 600;
  font-size: 22px;
`;

const LinksWrapper = styled.div`
  display: flex;
  gap: 30px;
  width: 100%;

  @media (max-width: ${BREAKPOINTS.SMALL_MOBILE}) {
    display: none; /* Nascondi i link nella navbar quando diventa sidebar */
  }
`;

const OtherLinkWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  font-family: ${FONTS.NOTO_SANS};
  font-weight: 600;
  font-size: 22px;
  width: 100%;

  @media (max-width: ${BREAKPOINTS.SMALL_MOBILE}) {
    display: none;
  }
`;

const StyledText = styled.span`
  font-family: ${FONTS.NOTO_SANS};
  font-weight: 500;
  font-size: 14px;
  color: ${(props) => {
    if (props.$scrolled) return COLORS.LIGHT_PRIMARY;
    return props.$inverted ? COLORS.DARK_PRIMARY : COLORS.LIGHT_PRIMARY;
  }};
  transition: color 0.2s ease;

  &:hover {
    color: #7c7c7c;
  }
`;

const ContactButton = styled.button`
  background-color: ${(props) => (props.$scrolled ? "#ced4da" : COLORS.DARK_PRIMARY)};
  color: ${(props) => (props.$scrolled ? COLORS.DARK_PRIMARY : COLORS.LIGHT_PRIMARY)};
  border: none;
  border-radius: ${RADIUS.MEDIUM};
  font-family: ${FONTS.NOTO_SANS};
  font-weight: 500;
  font-size: 15px;
  height: 40px;
  width: 140px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${(props) => (props.$scrolled ? "#212529" : "#ced4da")};
    color: ${(props) => (props.$scrolled ? COLORS.LIGHT_PRIMARY : COLORS.DARK_PRIMARY)};
  }
`;

const GithubButton = styled.button`
  background-color: ${(props) => (props.$scrolled ? "#ced4da" : COLORS.DARK_PRIMARY)};
  color: ${(props) => (props.$scrolled ? COLORS.DARK_PRIMARY : COLORS.LIGHT_PRIMARY)};
  border: none;
  border-radius: ${RADIUS.MEDIUM};
  font-size: 15px;
  height: 40px;
  width: 40px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${(props) => (props.$scrolled ? "#212529" : "#ced4da")};
    color: ${(props) => (props.$scrolled ? COLORS.LIGHT_PRIMARY : COLORS.DARK_PRIMARY)};
  }
`;

const HamburgerButton = styled.div`
  display: none;
  font-size: 30px;
  color: ${COLORS.LIGHT_PRIMARY};
  cursor: pointer;

  @media (max-width: ${BREAKPOINTS.SMALL_MOBILE}) {
    display: block; /* Mostra l'hamburger menu quando lo schermo è piccolo */
  }
`;

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  right: ${(props) => (props.$open ? "0" : "-100%")}; /* Mostra/Nasconde il menu */
  width: 250px;
  height: 100%;
  background-color: ${COLORS.LIGHT_PRIMARY};
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
  color: ${COLORS.LIGHT_PRIMARY};
  cursor: pointer;
`;

const SidebarLink = styled.span`
  color: ${COLORS.DARK_PRIMARY};
  font-size: 18px;
  margin: 20px 0;
  text-decoration: none;
  font-family: ${FONTS.NOTO_SANS};

  &:hover {
    color: gray;
  }
`;

const SidebarBackground = styled.div`
  position: fixed;
  top: 0;
  right: ${(props) => (props.$open ? "0" : "100%")};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
  transition: right 0.3s ease-in-out;
  z-index: 1;
`;

function Navbar({ isFading, isInverted }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const colorMenu = scrolled ? COLORS.LIGHT_PRIMARY : isInverted ? COLORS.DARK_PRIMARY : COLORS.LIGHT_PRIMARY;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll(); // inizializzazione

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > parseInt(BREAKPOINTS.SMALL_MOBILE)) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const links = [
    { id: 0, name: "Home", path: "/" },
    { id: 1, name: "Collezione", path: "/collection" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Contatti", path: "/contact" },
    { id: 4, name: "Github", path: "https://github.com/moreee-sa/occhialy.git" }
  ];

  return (
    <NavbarSticky>
      <NavbarWrapper $fade={isFading} $scrolled={scrolled}>
        {/* Desktop Links */}
        <LinksWrapper>
          {links
            .filter((link) => Number(link.id) !== 3 && Number(link.id) !== 4)
            .map((link) => (
              <Link key={link.id} to={link.path} style={{ textDecoration: "none" }}>
                <StyledText $inverted={isInverted} $scrolled={scrolled}>{link.name}</StyledText>
              </Link>
            ))}
        </LinksWrapper>
        
        <BrandNameLogo>
          <Link
            to={links[0].path}
            style={{ 
              textDecoration: "none", 
              color: scrolled ? COLORS.LIGHT_PRIMARY : (isInverted ? COLORS.DARK_PRIMARY : COLORS.LIGHT_PRIMARY) 
            }}
          >
            Occhialy
          </Link>
        </BrandNameLogo>

        <OtherLinkWrapper>
          <GithubButton $scrolled={scrolled} onClick={() => window.open(links[4].path, "_blank")}>
            <FaGithub />
          </GithubButton>
          <ContactButton $scrolled={scrolled}>
            <Link
              to={links[3].path}
              style={{ textDecoration: "none", color: "inherit"}}>
              Contatti
            </Link>
          </ContactButton>
        </OtherLinkWrapper>

        {/* Hamburger Button (Solo Mobile) */}
        <HamburgerButton onClick={() => setSidebarOpen(true)}>
          <FiMenu color={colorMenu} />
        </HamburgerButton>
      </NavbarWrapper>

      {/* Sidebar Menu */}
      <Sidebar $open={sidebarOpen}>
        <CloseButton onClick={() => setSidebarOpen(false)}>
          <FiX style={{ color: COLORS.DARK_PRIMARY }} />
        </CloseButton>
        {links.map((link) => (
          <Link key={link.id} to={link.path} style={{ textDecoration: "none" }}>
            <SidebarLink>{link.name}</SidebarLink>
          </Link>
        ))}
      </Sidebar>

      <SidebarBackground onClick={() => setSidebarOpen(false)} onMouseEnter={() => setSidebarOpen(false)} $open={sidebarOpen}></SidebarBackground>
    </NavbarSticky>
  );
}

export default Navbar;