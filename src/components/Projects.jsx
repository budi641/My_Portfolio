import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import projects from '../data/projects';

const StyledProjects = styled.section`
  padding: var(--spacing-xxl) 0;
  background: var(--color-gray-900);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      var(--color-primary),
      transparent
    );
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--spacing-xl);
    margin-top: var(--spacing-xl);
  }

  .section-title {
    font-size: clamp(2.5rem, 5vw, 3.5rem);
    font-weight: 800;
    text-align: center;
    margin-bottom: var(--spacing-xl);
    background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    letter-spacing: -0.02em;
  }

  .section-title::after {
    content: '';
    display: block;
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, var(--color-primary), var(--color-secondary));
    margin: var(--spacing-sm) auto 0;
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    padding: var(--spacing-xl) 0;
    
    .projects-grid {
      gap: var(--spacing-lg);
    }
  }
`;

const Projects = () => {
  return (
    <StyledProjects id="projects">
      <Container>
        <h2 className="section-title">Here's some Projects I worked on</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.shortDescription}
              fullDescription={project.fullDescription}
              image={project.image}
              links={project.links}
              technologies={project.technologies}
            />
          ))}
        </div>
      </Container>
    </StyledProjects>
  );
};

export default Projects;
