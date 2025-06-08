import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
import GH from "../images/GH.svg";
import { Card, Button } from "react-bootstrap";
import ProjectModal from './ProjectModal';

const StyledCard = styled(motion.div)`
  background: var(--color-gray-800);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  border: 1px solid var(--color-gray-700);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 40px rgba(59, 130, 246, 0.6), 0 0 20px rgba(139, 92, 246, 0.4);
    border-color: var(--color-primary);

    .image-overlay {
      opacity: 1;
      transform: scale(1.08);
    }

    .card-img-top {
      transform: scale(1.08);
    }
  }

  .image-wrapper {
    position: relative;
    width: 100%;
    height: 200px; /* Fixed height for consistency */
    overflow: hidden; /* Hide overflowing parts during scale */
    border-top-left-radius: var(--border-radius-lg);
    border-top-right-radius: var(--border-radius-lg);
  }

  .card-img-top {
    display: block; /* Ensure no extra space below image */
    width: 100%;
    height: 100%; /* Fill the wrapper */
    object-fit: cover;
    transition: transform 0.3s ease;
    transform-origin: bottom;
  }

  .image-overlay {
    position: absolute;
    inset: 0; /* Cover the entire parent wrapper */
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.8)
    );
    opacity: 0;
    transition: opacity 0.3s ease, transform 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    transform-origin: bottom;
  }

  .card-body {
    padding: var(--spacing-lg);
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }

  .card-title {
    font-size: var(--text-xl);
    font-weight: 700;
    margin-bottom: var(--spacing-sm);
    color: var(--color-white);
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);

    a {
      color: inherit;
      text-decoration: none;
      transition: color 0.3s ease;

      &:hover {
        color: var(--color-primary);
      }
    }
  }

  .card-text {
    color: var(--color-gray-300);
    font-size: var(--text-base);
    line-height: 1.6;
    margin-bottom: var(--spacing-md);
    flex-grow: 1;
  }

  .technologies {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-xs);
    margin-bottom: var(--spacing-md);
  }

  .tech-tag {
    background: var(--color-gray-700);
    color: var(--color-gray-300);
    padding: 4px 8px;
    border-radius: var(--border-radius-sm);
    font-size: var(--text-sm);
    transition: all 0.3s ease;

    &:hover {
      background: var(--color-primary);
      color: var(--color-white);
    }
  }

  .project-button {
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
    justify-content: center;
    gap: var(--spacing-sm);
    width: 100%;

    &:hover:not(:disabled) {
      background: var(--color-primary-dark);
      box-shadow: var(--shadow-md);
    }
  }

  .full-description {
    /* This styling will be moved to ProjectModal.jsx */
  }
`;

const ProjectCard = ({ title, description, fullDescription, image, links, technologies }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  // console.log("ProjectCard image prop:", image); // Removed after debugging

  return (
    <StyledCard
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="image-wrapper">
        <img src={image} alt={title} className="card-img-top" />
        <div className="image-overlay"></div>
      </div>
      <div className="card-body">
        <h3 className="card-title">
          {title}
        </h3>
        <p className="card-text">{description}</p>
        <div className="technologies">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
        <button
          className="project-button"
          onClick={() => setShowFullDescription(true)}
        >
          View Project
        </button>
      </div>

      <ProjectModal
        show={showFullDescription}
        onHide={() => setShowFullDescription(false)}
        title={title}
        image={image}
        fullDescription={fullDescription}
        links={links}
      />
    </StyledCard>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  fullDescription: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  })).isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProjectCard;