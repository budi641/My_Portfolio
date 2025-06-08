import React from "react";
import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { Container, Nav, Navbar } from "react-bootstrap";

const navLinks = {
  routes: [
    { id: "1R", name: "Home", route: "/" },
    { id: "2R", name: "All Projects", route: "/All-Projects" },
  ],
  to: [
    { id: "1T", name: "Home", to: "Home" },
    { id: "2T", name: "About Me", to: "About" },
    { id: "3T", name: "Education", to: "Education" },
    { id: "4T", name: "Work", to: "Work" },
    { id: "5T", name: "Skills", to: "Skills" },
    { id: "6T", name: "Projects", to: "projects" },
    { id: "7T", name: "Contact", to: "Contact" },
  ],
};

const slideDown = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const StyledNavbar = styled(Navbar)`
  background: rgba(17, 24, 39, 0.95) !important;
  backdrop-filter: blur(15px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  animation: ${slideDown} 0.5s ease-out;
  transition: var(--transition-base);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 15px;

  .navbar-brand {
    transition: var(--transition-base);
    
    &:hover {
      transform: scale(1.05);
    }
  }

  .logo-img {
    border: none;
    transition: var(--transition-base);
    filter: drop-shadow(0 0 5px rgba(37, 99, 235, 0.5));
    
    &:hover {
      transform: scale(1.1);
      filter: drop-shadow(0 0 15px rgba(37, 99, 235, 0.8));
    }
  }

  .nav-link {
    position: relative;
    color: var(--color-gray-300) !important;
    font-weight: 600;
    padding: 0.75rem 1.25rem;
    margin: 0 0.5rem;
    transition: var(--transition-base);
    border-radius: var(--border-radius-sm);

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0%;
      width: 0;
      height: 3px;
      background: linear-gradient(to right, var(--color-primary), var(--color-secondary));
      transition: width 0.3s ease-in-out;
      transform: translateX(0%);
    }

    &:hover {
      color: var(--color-primary) !important;
      background: rgba(59, 130, 246, 0.1);
      
      &::after {
        width: 100%;
      }
    }

    &.active {
      color: var(--color-primary) !important;
      background: rgba(59, 130, 246, 0.1);
      
      &::after {
        width: 100%;
      }
    }
  }

  .navbar-toggler {
    border: none;
    padding: 0.5rem;
    outline: none;
    
    &:focus {
      box-shadow: none;
    }
  }

  /* Custom Toggler Icon Styles */
  .custom-toggler-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px; /* Give it some height to contain the lines */
    position: relative;
    cursor: pointer;

    span {
      display: block !important;
      position: absolute !important;
      width: 100% !important;
      height: 2px !important;
      background: var(--color-gray-50) !important;
      transition: background 0.3s ease-in-out !important;
      transform: none !important; /* Ensure no initial transform */
      transform-origin: center center; /* Crucial for correct rotation */

      &::before,
      &::after {
        content: '';
        position: absolute !important;
        width: 100% !important;
        height: 2px !important;
        background: var(--color-gray-50) !important;
        transition: transform 0.3s ease-in-out, top 0.3s ease-in-out, opacity 0.3s ease-in-out !important;
        left: 0 !important;
        transform-origin: center center; /* Crucial for correct rotation */
      }

      &::before {
        top: -7px !important; /* Consistent spacing from center */
        transform: none !important; /* Explicitly ensure no transform in collapsed state */
      }

      &::after {
        top: 7px !important; /* Consistent spacing from center */
        transform: none !important; /* Explicitly ensure no transform in collapsed state */
      }
    }
  }

  /* Animation for custom toggler icon */
  &.navbar-toggler[aria-expanded="true"] {
    .custom-toggler-icon {
      span {
        background: transparent !important; /* Hide middle line */

        &::before {
          top: 0 !important;
          transform: rotate(45deg) !important;
        }

        &::after {
          top: 0 !important;
          transform: rotate(-45deg) !important;
        }
      }
    }
  }
`;

const StyledDiv = styled.div`
  .spacer {
    height: var(--nav-height);
  }
`;

const NavBar = ({ Logo, closeDelay = 125 }) => {
  const [isExpanded, setisExpanded] = React.useState(false);
  const { pathname } = useLocation();

  return (
    <StyledDiv>
      <div className="spacer" />
      <StyledNavbar
        id="nav"
        collapseOnSelect={true}
        expand="xl"
        expanded={isExpanded}
        bg="dark"
        variant="dark"
        fixed="top"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              alt="Logo"
              src={Logo}
              width="35"
              height="35"
              className="rounded-circle logo-img"
            />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => setisExpanded(!isExpanded)}
          >
            <div className="custom-toggler-icon">
              <span className=""></span>
            </div>
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav navbarScroll className="me-auto">
              {pathname === "/"
                ? navLinks.to.map((el) => (
                    <Nav.Item key={el.id}>
                      <ScrollLink
                        to={el.to}
                        spy={true}
                        activeClass="active"
                        className="nav-link"
                        onClick={() => {
                          setTimeout(() => {
                            setisExpanded(false);
                          }, closeDelay);
                        }}
                      >
                        {el.name}
                      </ScrollLink>
                    </Nav.Item>
                  ))
                : navLinks.routes.map((el) => (
                    <Nav.Item key={el.id}>
                      <Link
                        to={el.route}
                        className={
                          pathname === el.route
                            ? "nav-link active"
                            : "nav-link"
                        }
                        onClick={() => {
                          setTimeout(() => {
                            setisExpanded(false);
                          }, closeDelay);
                        }}
                      >
                        {el.name}
                      </Link>
                    </Nav.Item>
                  ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </StyledNavbar>
    </StyledDiv>
  );
};

NavBar.propTypes = {
  Logo: PropTypes.string.isRequired,
  closeDelay: PropTypes.number,
};

export default NavBar;
