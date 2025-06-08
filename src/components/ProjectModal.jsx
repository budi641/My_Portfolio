import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from "prop-types";
import { Icon } from "@iconify/react";

const StyledModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-sm);
  backdrop-filter: blur(5px);
`;

const StyledModalContent = styled(motion.div)`
  background: var(--color-gray-800);
  border-radius: var(--border-radius-lg);
  max-width: 750px;
  width: 95%;
  max-height: 75vh;
  overflow-y: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.5);
  border: 1px solid var(--color-primary);

  /* Custom Scrollbar Styling */
  &::-webkit-scrollbar {
    width: 8px; /* Width of the scrollbar */
    background-color: var(--color-gray-900); /* Track color */
    border-radius: 4px; /* Rounded corners for the track */
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--color-primary); /* Thumb color */
    border-radius: 4px; /* Rounded corners for the thumb */
    border: 2px solid var(--color-gray-900); /* Padding around the thumb */
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: var(--color-secondary); /* Thumb color on hover */
  }

  .modal-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-top-left-radius: var(--border-radius-lg);
    border-top-right-radius: var(--border-radius-lg);
    filter: brightness(0.8);
  }

  .modal-body {
    padding: var(--spacing-xl);
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  h3 {
    color: var(--color-white);
    margin-bottom: var(--spacing-md);
    font-size: var(--text-2xl);
    text-align: center;
    background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  p {
    color: var(--color-gray-300);
    line-height: 1.6;
    margin-bottom: var(--spacing-md);
    white-space: pre-line;
    flex-grow: 1;
  }

  .modal-links {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-md);
    margin-top: var(--spacing-lg);
    justify-content: center;
  }

  .link-button {
    background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
    color: var(--color-white);
    padding: var(--spacing-sm) var(--spacing-md);
    border-radius: var(--border-radius-md);
    text-decoration: none;
    text-align: center;
    font-weight: 600;
    transition: all 0.3s ease;
    border: none;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: var(--spacing-xs);
    min-width: 120px;
    justify-content: center;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }
  }

  .close-button {
    background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
    color: var(--color-white);
    padding: var(--spacing-sm) var(--spacing-md);
    border-radius: var(--border-radius-md);
    text-decoration: none;
    text-align: center;
    font-weight: 600;
    transition: all 0.3s ease;
    border: none;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: var(--spacing-xs);
    min-width: 120px;
    justify-content: center;
    margin-top: var(--spacing-lg);

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }
  }

  @media (max-width: 768px) {
    max-width: 95%;
    max-height: 85vh;
    .modal-image {
      height: 120px;
    }
    .modal-body {
      padding: var(--spacing-md);
    }
    h3 {
      font-size: var(--text-xl);
    }
    p {
      font-size: var(--text-sm);
    }
    .link-button {
      padding: var(--spacing-xs) var(--spacing-sm);
      font-size: var(--text-sm);
      min-width: unset;
    }
  }
`;

const modalVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 100,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 300,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    y: -100,
    transition: {
      duration: 0.3,
    },
  },
};

const ProjectModal = ({ show, onHide, title, image, fullDescription, links }) => {
  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [show]);

  console.log("ProjectModal received links:", links);

  const getIconForLinkType = (type) => {
    switch (type.toLowerCase()) {
      case "github":
        return "mdi:github";
      case "itch.io":
        return "mdi:itchio";
      case "youtube":
        return "mdi:youtube";
      case "steam":
        return "mdi:steam";
      default:
        return "mdi:link";
    }
  };

  return (
    <AnimatePresence>
      {show && (
        <StyledModalOverlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onHide}
        >
          <StyledModalContent
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            {image && <img src={image} alt={title} className="modal-image" />}
            <div className="modal-body">
              <h3>{title}</h3>
              <p>{fullDescription}</p>
              {links && links.length > 0 && (
                <div className="modal-links">
                  {links.map((linkItem, index) => (
                    <a
                      key={index}
                      href={linkItem.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-button"
                    >
                      <Icon icon={getIconForLinkType(linkItem.type)} />
                      <span>{linkItem.type}</span>
                    </a>
                  ))}
                </div>
              )}
              <button className="close-button" onClick={onHide}>
                <Icon icon="mdi:close" />
                <span>Close</span>
              </button>
            </div>
          </StyledModalContent>
        </StyledModalOverlay>
      )}
    </AnimatePresence>
  );
};

ProjectModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  fullDescription: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  })).isRequired,
};

export default ProjectModal; 