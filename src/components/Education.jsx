import React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import Title from "./Title";
import zewailCityLogo from "../images/Zewail City.png";

const StyledEducation = styled.section`
  padding: var(--spacing-xxl) 0;
  background: var(--color-gray-900);
  position: relative;
  overflow: hidden;

  .education-container {
    position: relative;
    z-index: 2;
  }

  .education-item {
    background: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: var(--border-radius-lg);
    padding: var(--spacing-xl);
    margin-bottom: var(--spacing-lg);
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
      border-color: var(--color-primary);
    }
  }

  .university-logo {
    width: 100px; /* Adjust as needed */
    height: auto;
    margin-bottom: var(--spacing-md);
    border-radius: var(--border-radius-sm);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }

  .degree {
    font-family: var(--font-display);
    font-size: var(--text-xl);
    color: var(--color-primary);
    margin-bottom: var(--spacing-sm);
    font-weight: 600;
  }

  .school {
    font-size: var(--text-lg);
    color: var(--color-gray-200);
    margin-bottom: var(--spacing-sm);
  }

  .date {
    font-size: var(--text-sm);
    color: var(--color-gray-400);
    margin-bottom: var(--spacing-md);
  }

  .description {
    color: var(--color-gray-300);
    line-height: 1.6;
  }

  .courses {
    margin-top: var(--spacing-md);
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-sm);
  }

  .course-tag {
    background: rgba(59, 130, 246, 0.1);
    color: var(--color-primary);
    padding: var(--spacing-xs) var(--spacing-sm);
    border-radius: var(--border-radius-md);
    font-size: var(--text-sm);
    transition: all 0.3s ease;

    &:hover {
      background: rgba(59, 130, 246, 0.2);
      transform: translateY(-2px);
    }
  }
`;

const educationData = [
  {
    degree: "Bachelor of Software Development",
    school: "Computational Science and AI at university of science and technology, Zewail city",
    date: "Oct 2022 – 2026",
    description: "• Concentration: Gaming and Computer Graphics",
    image: zewailCityLogo,
    courses: [
      "Computational Science",
      "Artificial Intelligence",
      "Game Development",
      "Computer Graphics"
    ]
  }
];

const Education = () => {
  return (
    <Element name="Education" id="education">
      <StyledEducation className="section">
        <Container className="education-container">
          <Title size="h2" text="Education" />
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="education-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {edu.image && <img src={edu.image} alt="University Logo" className="university-logo" />}
              <h3 className="degree">{edu.degree}</h3>
              <h4 className="school">{edu.school}</h4>
              <p className="date">{edu.date}</p>
              <p className="description">{edu.description}</p>
              <div className="courses">
                {edu.courses.map((course, courseIndex) => (
                  <span key={courseIndex} className="course-tag">
                    {course}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </Container>
      </StyledEducation>
    </Element>
  );
};

export default Education; 