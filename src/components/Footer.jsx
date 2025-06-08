import React from "react";
import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";
import SocialLinks from "./SocialLinks";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const StyledFooter = styled.footer`
  min-height: calc(var(--nav-height) + 2rem);
  background: ${({ theme }) =>
    theme.name === "light"
      ? "linear-gradient(to right, var(--color-primary), var(--color-secondary))"
      : "linear-gradient(to right, var(--color-primary-dark), var(--color-gray-900))"};
  padding: var(--spacing-lg) 0;
  animation: ${fadeIn} 0.5s ease-out;

  .footer-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--spacing-md);
  }

  .footer-text {
    color: white;
    font-family: var(--font-display);
    font-size: var(--text-sm);
    font-weight: 500;
    text-align: center;
    opacity: 0.9;
  }

  .social-links {
    display: flex;
    gap: var(--spacing-md);
    
    a {
      color: white;
      opacity: 0.9;
      transition: var(--transition-base);
      
      &:hover {
        opacity: 1;
        transform: translateY(-3px);
      }
    }
  }

  .copyright {
    color: white;
    font-size: var(--text-xs);
    opacity: 0.7;
    text-align: center;
  }
`;

const Footer = ({ mode }) => {
  const currentYear = new Date().getFullYear();

  return (
    <StyledFooter className="d-flex align-items-center justify-content-center">
      <div className="footer-content">
        <div className="footer-text">
          Let's connect and create something amazing together
        </div>
        <div className="social-links">
          <SocialLinks />
        </div>
        <div className="copyright">
          © {currentYear} Abdelrahman Ameen. All rights reserved.
        </div>
      </div>
    </StyledFooter>
  );
};

Footer.propTypes = {
  mode: PropTypes.string.isRequired,
};

export default Footer;
