import React from "react";
// Styles
import styled, { keyframes } from "styled-components";
// State
import PropTypes from "prop-types";
// Icons
import { Icon } from "@iconify/react";
// Images
import Logo from "../images/logo.svg";
import { Light, Dark } from "../config";
// Components
import { useErrorBoundary } from "react-error-boundary";
import { Link } from "react-scroll";
import { Button, Col, Container, Row } from "react-bootstrap";
import SocialLinks from "./SocialLinks";

// Modern animations
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

const glow = keyframes`
  0% { filter: drop-shadow(0 0 5px rgba(37, 99, 235, 0.5)); }
  50% { filter: drop-shadow(0 0 20px rgba(37, 99, 235, 0.8)); }
  100% { filter: drop-shadow(0 0 5px rgba(37, 99, 235, 0.5)); }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

// #region styled-components
const StyledHero = styled.header`
  position: relative;
  display: grid;
  place-items: center;
  max-width: 1920px;
  margin: 0 auto;
  min-height: 100vh;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${Dark}) center center no-repeat;
    background-size: cover;
    z-index: -2;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(${props => props.blur}px);
    z-index: -1;
    transition: backdrop-filter 0.3s ease;
  }

  .hero-content {
    animation: ${fadeIn} 1s ease-out;
  }

  .hero-title {
    font-family: var(--font-display);
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 800;
    background: linear-gradient(to right, var(--color-primary), var(--color-secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: var(--spacing-lg);
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .hero-subtitle {
    font-size: clamp(1.25rem, 2vw, 1.5rem);
    color: var(--color-gray-300);
    margin-bottom: var(--spacing-xl);
    font-weight: 500;
  }

  .hero-img {
    animation: ${float} 6s ease-in-out infinite;
    filter: drop-shadow(0 0 10px rgba(37, 99, 235, 0.3));
    transition: var(--transition-base);

    &:hover {
      animation: ${glow} 2s ease-in-out infinite;
    }
  }

  .down-container {
    position: absolute;
    bottom: var(--spacing-xl);
    left: 50%;
    transform: translateX(-50%);
  }

  .scroll-down {
    color: var(--color-primary);
    font-size: 2rem;
    transition: var(--transition-base);
    
    &:hover {
      transform: translateY(5px);
      color: var(--color-secondary);
    }
  }

  @media screen and (min-width: 1180px) {
    &::before {
      /* Removed specific background properties here to avoid overriding */
    }
  }

  @media screen and (min-width: 1367px) {
    &::before {
      /* Removed specific background properties here to avoid overriding */
    }
  }
`;
// #endregion

// #region component
const propTypes = {
  name: PropTypes.string,
};

const Hero = ({ name }) => {
  const { showBoundary } = useErrorBoundary();
  const [blur, setBlur] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxBlur = 8; // Maximum blur value
      const scrollThreshold = 500; // Scroll distance to reach max blur
      
      // Calculate blur based on scroll position
      const newBlur = Math.min((scrollPosition / scrollThreshold) * maxBlur, maxBlur);
      setBlur(newBlur);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <StyledHero blur={blur}>
      <Container className="hero-content">
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start">
            <h1 className="hero-title">Hi, I'm {name}</h1>
            <p className="hero-subtitle">
              Gameplay & Graphics Programmer | Unreal Engine Developer | VR Developer
            </p>
            <SocialLinks />
          </Col>
          <Col md={6} className="text-center">
            <img
              src={Logo}
              alt="Hero"
              className="hero-img"
              style={{ width: "80%", maxWidth: "400px" }}
            />
          </Col>
        </Row>
      </Container>
      <div className="down-container">
        <Link to="About" smooth={true} duration={500}>
          <Icon icon="mdi:chevron-down" className="scroll-down" />
        </Link>
      </div>
    </StyledHero>
  );
};

Hero.propTypes = propTypes;
// #endregion

export default Hero;
