import React from "react";
import styled, { keyframes } from "styled-components";
import { Element } from "react-scroll";
import { Button, Col, Container, Row } from "react-bootstrap";
import Title from "./Title";
import { skillData, resume } from "../config";

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

const glowAnimation = keyframes`
  0% {
    box-shadow: 0 0 5px var(--color-primary),
                0 0 10px var(--color-primary),
                0 0 15px var(--color-primary);
  }
  50% {
    box-shadow: 0 0 10px var(--color-primary),
                0 0 20px var(--color-primary),
                0 0 30px var(--color-primary);
  }
  100% {
    box-shadow: 0 0 5px var(--color-primary),
                0 0 10px var(--color-primary),
                0 0 15px var(--color-primary);
  }
`;

const StyledSkillItem = styled.div`
  text-align: center;
  font-size: var(--text-lg);
  color: var(--color-gray-300);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-md);
  border-radius: var(--border-radius-lg);
  transition: all 0.3s ease;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  width: 200px;
  height: 200px;
  margin: 0 auto;

  &:hover {
    transform: scale(1.1);
    animation: ${glowAnimation} 2s infinite;
    background: rgba(0, 0, 0, 0.3);
    border-color: var(--color-primary);
  }

  figure {
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-sm);
    height: 100%;
    width: 100%;
  }

  figcaption {
    font-size: var(--text-base);
    color: var(--color-gray-200);
    transition: color 0.3s ease;
    margin-top: var(--spacing-sm);
  }

  &:hover figcaption {
    color: var(--color-primary);
  }

  @media (max-width: 768px) {
    width: 180px;
    height: 180px;
  }

  @media (max-width: 480px) {
    width: 160px;
    height: 160px;
  }
`;

const StyledSkills = styled.section`
  padding: var(--spacing-xxxl) 0;

  .skill-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--spacing-lg);
    justify-items: center;
    margin-bottom: var(--spacing-xxl);
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
  }

  .resume-button {
    font-family: var(--font-display);
    font-weight: 600;
    padding: var(--spacing-md) var(--spacing-xl);
    border-radius: var(--border-radius-md);
    border: 2px solid var(--color-primary);
    background: var(--color-primary);
    color: white;
    transition: var(--transition-base);
    text-transform: uppercase;
    letter-spacing: 0.5px;
    display: inline-flex;
    align-items: center;
    gap: var(--spacing-sm);

    &:hover:not(:disabled) {
      background: var(--color-primary-dark);
      transform: translateY(-2px);
      box-shadow: var(--shadow-md);
    }

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }

    .spinner-border {
      width: 1rem;
      height: 1rem;
      border-width: 2px;
    }
  }

  @media (max-width: 768px) {
    .skill-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 480px) {
    .skill-grid {
      grid-template-columns: 1fr;
    }
  }
`;

const Skills = () => {
  return (
    <Element name="Skills" id="skills">
      <StyledSkills className="section">
        <Container>
          <Container className="d-flex justify-content-center">
            <Title size="h2" text="Skills" />
          </Container>
          <div className="skill-grid">
            {skillData.map((skill, index) => (
              <StyledSkillItem
                key={skill.id}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <figure>
                  {skill.skill}
                  <figcaption>{skill.name}</figcaption>
                </figure>
              </StyledSkillItem>
            ))}
          </div>
          {resume && (
            <div className="text-center">
              <a href={resume} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline-light" className="resume-button">
                  Resume
                </Button>
              </a>
            </div>
          )}
        </Container>
      </StyledSkills>
    </Element>
  );
};

export default Skills;
