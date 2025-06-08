import React from "react";
// Styles
import styled from "styled-components";
// State
import PropTypes from "prop-types";

// #region styled-components
const StyledTitle = styled.h2`
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 800;
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 50%, var(--color-primary) 100%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient 8s linear infinite;
  text-align: center;
  margin-bottom: var(--spacing-xl);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  letter-spacing: -0.02em;

  @keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background: linear-gradient(to right, var(--color-primary), var(--color-secondary));
    margin: 0.5rem auto 0;
    border-radius: 2px;
  }
`;
// #endregion

// #region component
const propTypes = {
  size: PropTypes.string,
  text: PropTypes.string,
};

const Title = ({ size, text }) => {
  return <StyledTitle as={size}>{text}</StyledTitle>;
};

Title.propTypes = propTypes;
// #endregion

export default Title;
