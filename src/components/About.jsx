import React from "react";
import styled, { keyframes } from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { Element } from "react-scroll";

// New animations
const scaleUp = keyframes`
  from {
    transform: scale(0.9);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

const pulseGlow = keyframes`
  0% { box-shadow: 0 0 5px rgba(59, 130, 246, 0.4); }
  50% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.8); }
  100% { box-shadow: 0 0 5px rgba(59, 130, 246, 0.4); }
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const textReveal = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
    filter: blur(5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }
`;

const pulseBorder = keyframes`
  0% { border: 2px solid var(--color-primary-light); }
  50% { border: 2px solid var(--color-secondary); }
  100% { border: 2px solid var(--color-primary-light); }
`;

const animatedGradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const blobAnimation = keyframes`
  0% {
    transform: translate(0, 0) scale(1);
  }
  25% {
    transform: translate(20px, -30px) scale(1.1);
  }
  50% {
    transform: translate(-10px, 40px) scale(0.9);
  }
  75% {
    transform: translate(30px, 10px) scale(1.2);
  }
  100% {
    transform: translate(0, 0) scale(1);
  }
`;

const floatAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
  100% { transform: translateY(0px); }
`;

const BlobOne = styled.div`
  position: absolute;
  width: 500px;
  height: 500px;
  background: linear-gradient(135deg, var(--color-primary-dark), var(--color-secondary));
  border-radius: 50%;
  filter: blur(150px);
  opacity: 0.3;
  top: 10%;
  left: 5%;
  animation: ${blobAnimation} 15s infinite alternate ease-in-out;
  z-index: 0;
`;

const BlobTwo = styled.div`
  position: absolute;
  width: 600px;
  height: 600px;
  background: linear-gradient(135deg, var(--color-blue-500), var(--color-teal-500));
  border-radius: 50%;
  filter: blur(180px);
  opacity: 0.25;
  bottom: 15%;
  right: 10%;
  animation: ${blobAnimation} 18s infinite alternate-reverse ease-in-out;
  z-index: 0;
`;

const StyledAbout = styled.section`
  position: relative;
  padding: var(--spacing-xxl) 0;
  background: var(--color-gray-900);
  background-image: radial-gradient(circle at top, var(--color-gray-800) 0%, var(--color-gray-900) 70%),
                    repeating-linear-gradient(45deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 2px, transparent 2px, transparent 10px);
  background-size: cover, 10px 10px;
  background-blend-mode: overlay, normal;
  margin-top: -150px;
  overflow: hidden;

  .image-container {
    position: relative;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    aspect-ratio: 1;
  }

  .profile-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    border: 4px solid var(--color-primary);
    box-shadow: 0 0 30px rgba(59, 130, 246, 0.3);
    transition: all 0.3s ease;
  }

  .glow-effect {
    position: absolute;
    inset: -20px;
    background: linear-gradient(45deg, var(--color-primary), var(--color-secondary));
    border-radius: 50%;
    filter: blur(30px);
    opacity: 0.3;
    transition: all 0.3s ease;
  }

  .image-container:hover {
    .profile-image {
      transform: scale(1.05);
      box-shadow: 0 0 50px rgba(59, 130, 246, 0.5);
    }
    .glow-effect {
      opacity: 0.5;
      filter: blur(40px);
    }
  }

  .about-content {
    position: relative;
    z-index: 2;
    padding: var(--spacing-lg);
    border-radius: var(--border-radius-lg);
    background: linear-gradient(145deg, var(--color-gray-900) 0%, var(--color-gray-800) 100%); /* Inner gradient */
    box-shadow: rgba(0, 0, 0, 0.3) 0px 10px 20px; /* Subtle shadow */
    animation: ${pulseBorder} 3s infinite ease-in-out, ${floatAnimation} 4s infinite ease-in-out; /* Apply pulsating border and float animations */
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(270deg, var(--color-primary-light), var(--color-secondary), var(--color-primary-light));
      background-size: 200% 200%;
      opacity: 0.05; /* Very subtle glow */
      border-radius: var(--border-radius-lg);
      animation: ${animatedGradient} 10s ease infinite; /* Animated gradient overlay */
      z-index: -1;
    }
  }

  .about-title {
    font-family: var(--font-display);
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 800;
    background: linear-gradient(to right, var(--color-primary), var(--color-secondary)); /* Gradient text */
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: var(--spacing-xl);
    text-align: center;
    animation: ${fadeInUp} 0.8s ease-out;
  }

  .about-text {
    font-size: 1.1rem;
    line-height: 1.8;
    color: var(--color-gray-300);
    margin-bottom: var(--spacing-lg);
    animation: ${textReveal} 0.8s ease-out forwards; /* Apply text reveal animation */
    opacity: 0; /* Hidden initially for animation */
  }

  .tech-stack {
    margin-top: var(--spacing-xl);
  }

  .tech-stack-title {
    font-size: 1.5rem;
    color: var(--color-primary);
    margin-bottom: var(--spacing-md);
    animation: ${fadeInUp} 1s ease-out 0.4s forwards; /* Staggered animation */
    opacity: 0; /* Hidden initially for animation */
  }

  .tech-list {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-md);
    list-style: none;
    padding: 0;
  }

  .tech-item {
    background: linear-gradient(135deg, var(--color-gray-800) 0%, var(--color-gray-700) 100%);
    padding: var(--spacing-sm) var(--spacing-md);
    border-radius: var(--border-radius-md);
    color: var(--color-gray-300);
    font-size: 0.9rem;
    transition: var(--transition-base);
    border: 1px solid var(--color-gray-700);
    box-shadow: var(--shadow-sm);
    animation: ${fadeInUp} 0.8s ease-out forwards; /* Apply animation directly */
    opacity: 0; /* Hidden initially for animation */
    position: relative; /* Needed for pseudo-element positioning */
    overflow: hidden; /* Hide overflow of shine */

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%; /* Start off-screen to the left */
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 0.1); /* Subtle white gradient for shine */
      transform: skewX(-30deg); /* Slant the shine */
      transition: all 0.7s ease; /* Smooth transition for shine */
    }

    &:hover {
      background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
      color: white;
      transform: translateY(-3px);
      box-shadow: var(--shadow-md);
      border-color: var(--color-primary-light);

      &::before {
        left: 100%; /* Move across to the right */
      }
    }
  }

  @media (max-width: 1200px) {
    .image-container {
      max-width: 800px;
    }
  }

  @media (max-width: 768px) {
    .image-container {
      max-width: 500px;
    }
  }
`;

const About = ({ name, image, techStack }) => {
  return (
    <Element name="About" id="about">
      <StyledAbout className="section">
        <BlobOne />
        <BlobTwo />
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-5 mb-lg-0">
              <div className="image-container">
                <img src={image} alt={name} className="profile-image" />
                <div className="glow-effect"></div>
              </div>
            </Col>
            <Col lg={6}>
              <motion.div
                className="about-content"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="about-title">About Me</h2>
                <div className="about-text">
                  <p>
                    I'm a passionate game developer and graphics programmer with a focus on real-time rendering, physics simulation, and interaction systems. I specialize in Unreal Engine and enjoy building immersive, high-performance experiences using C++, Python, and Vulkan.
                  </p>
                  <p>
                    I love solving complex problems and turning creative ideas into interactive systems. Whether it's gameplay mechanics, custom engines, or visual effects, I bring innovation, dedication, and technical skill to every project.
                  </p>
                </div>
                <div className="tech-stack">
                  {techStack.map((tech, index) => (
                    <motion.span
                      key={index}
                      className="tech-item"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1, textShadow: "0 0 8px var(--color-primary)" }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </StyledAbout>
    </Element>
  );
};

About.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  techStack: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default About; 