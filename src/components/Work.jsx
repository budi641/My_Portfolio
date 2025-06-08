import React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import Title from "./Title";
import hazemMansourLogo from "../images/hazem_mansour.png";
import serenityForgeLogo from "../images/serenity forge.png";
import janaGamesStudiosLogo from "../images/Jana Games Studios.png";

const StyledWork = styled.section`
  padding: var(--spacing-xxl) 0;
  background: var(--color-gray-900);
  position: relative;
  overflow: hidden;

  .work-container {
    position: relative;
    z-index: 2;
  }

  .work-item {
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

  .company-logo {
    width: 80px; /* Adjust as needed */
    height: auto;
    margin-bottom: var(--spacing-md);
    border-radius: var(--border-radius-sm);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }

  .position-title {
    font-family: var(--font-display);
    font-size: var(--text-xl);
    color: var(--color-primary);
    margin-bottom: var(--spacing-sm);
    font-weight: 600;
  }

  .company-title {
    font-size: var(--text-lg);
    color: var(--color-gray-200);
    margin-bottom: var(--spacing-sm);
  }

  .grouped-company-heading {
    font-family: var(--font-display);
    font-size: var(--text-xl);
    color: var(--color-primary);
    margin-bottom: var(--spacing-md);
    font-weight: 600;
  }

  .role-card-inner {
    border-left: 3px solid rgba(255, 255, 255, 0.1);
    padding-left: var(--spacing-lg);
    margin-top: var(--spacing-sm);
    margin-bottom: var(--spacing-sm);
  }

  .role-card-position {
    font-size: var(--text-lg);
    color: var(--color-gray-200);
    margin-bottom: var(--spacing-sm);
  }

  .date-location {
    font-size: var(--text-sm);
    color: var(--color-gray-400);
    margin-bottom: var(--spacing-md);
  }

  .description {
    color: var(--color-gray-300);
    line-height: 1.6;
    ul {
      list-style: disc;
      margin-left: var(--spacing-lg);
      li {
        margin-bottom: var(--spacing-sm);
      }
    }
  }

  .skills {
    margin-top: var(--spacing-md);
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-sm);
  }

  .skill-tag {
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

const workData = [
  {
    position: "Unreal Developer",
    company: "Hazem Mansour",
    dateLocation: "Apr 2025 – present | Shiekh Zayed, Egypt",
    description: [
      ""
    ],
    skills: [
      "Unreal Engine",
      "VR Development",
      "C++",
      "Automation",
      "3ds Max"
    ],
    image: hazemMansourLogo
  },
  {
    company: "Serenity Forge",
    image: serenityForgeLogo,
    roles: [
      {
        position: "Mid Level Engine Programmer",
        dateLocation: "Oct 2022 – Feb 2023 | Remote",
        description: [
          ""
        ],
        skills: [
          "Engine Programming",
          "C++",
          "Game Development"
        ]
      },
      {
        position: "Junior Game Programmer",
        dateLocation: "May 2022 – Oct 2022 | Remote",
        description: [
          ""
        ],
        skills: [
          "Game Programming",
          "C++",
          "Game Design"
        ]
      }
    ]
  },
  {
    position: "Unreal Engine Developer",
    company: "Jana Games Studios",
    dateLocation: "Apr 2022 – Dec 2022 | Remote",
    description: [
      ""
    ],
    skills: [
      "Unreal Engine",
      "Game Development",
      "C++"
    ],
    image: janaGamesStudiosLogo
  }
];

const Work = () => {
  return (
    <Element name="Work" id="work">
      <StyledWork className="section">
        <Container className="work-container">
          <Title size="h2" text="Work Experience" />
          {workData.map((item, index) => (
            <motion.div
              key={index}
              className="work-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {item.roles ? (
                <>
                  {item.image && <img src={item.image} alt={`${item.company} Logo`} className="company-logo" />}
                  <h3 className="grouped-company-heading">{item.company}</h3>
                  {item.roles.map((role, roleIndex) => (
                    <div key={roleIndex} className="role-card-inner">
                      <h4 className="role-card-position">{role.position}</h4>
                      <p className="date-location">{role.dateLocation}</p>
                      {role.description && role.description.length > 0 && (
                        <div className="description">
                          <ul>
                            {role.description.map((desc, i) => (
                              <li key={i}>{desc}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {role.skills && role.skills.length > 0 && (
                        <div className="skills">
                          {role.skills.map((skill, skillIndex) => (
                            <span key={skillIndex} className="skill-tag">
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </>
              ) : (
                <>
                  {item.image && <img src={item.image} alt={`${item.company} Logo`} className="company-logo" />}
                  <h3 className="position-title">{item.position}</h3>
                  <h4 className="company-title">{item.company}</h4>
                  <p className="date-location">{item.dateLocation}</p>
                  {item.description && item.description.length > 0 && (
                    <div className="description">
                      <ul>
                        {item.description.map((desc, i) => (
                          <li key={i}>{desc}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {item.skills && item.skills.length > 0 && (
                    <div className="skills">
                      {item.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="skill-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </>
              )}
            </motion.div>
          ))}
        </Container>
      </StyledWork>
    </Element>
  );
};

export default Work; 