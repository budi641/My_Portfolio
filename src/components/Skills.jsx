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

  .skill-item {
    text-align: center;
    font-size: var(--text-lg);
    color: var(--color-gray-300);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .skill-icon {
    font-size: 3rem;
    color: var(--color-primary);
    margin-bottom: var(--spacing-sm);
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
              <div
                key={skill.id}
                className="skill-item"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <figure>
                  {skill.skill}
                  <figcaption>{skill.name}</figcaption>
                </figure>
              </div>
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
