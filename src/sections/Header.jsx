import React, {useState, useEffect} from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { IoMdMail } from "react-icons/io";

import styles from "./Header.module.css";

function Header() {
  const [direction, setDirection] = useState("horizontal");

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 991) {
        setDirection("vertical");
      } else {
        setDirection("horizontal");
      }
    });
  }, []);


  return (
    <div>
      <Navbar variant="light" expand="lg" className="py-3" bg="white">
        <Container>
          <Navbar.Brand href="#" style={{ marginRight: "5rem" }}>
            Jeremy Nguyen
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" defaultActiveKey="home">
              <Nav.Link className={styles.navLink} href="#about">
                About
              </Nav.Link>
              <Nav.Link className={styles.navLink} href="#projects">
                Projects
              </Nav.Link>
              <Nav.Link className={styles.navLink} href="#contact">
                Contact
              </Nav.Link>
              <Nav.Link className={styles.navLink} href="#social-media">
                Socials
              </Nav.Link>
              <Nav.Link
                className={styles.navLink}
                href={process.env.PUBLIC_URL + "/resume.pdf"}
                target="_blank"
              >
                Resume
              </Nav.Link>
            </Nav>
            {direction === "horizontal" ? (

            <Nav className="ml-auto">
              <Nav.Link
                className={styles.navLink}
                href="mailto:hi@jeremynguyen.dev"
                target="_blank"
              >
                <IoMdMail size={28} />
              </Nav.Link>
              <Nav.Link
                className={styles.navLink}
                href="https://www.github.com/jeremynguyencs"
                target="_blank"
              >
                <AiFillGithub size={28} />
              </Nav.Link>
              <Nav.Link
                className={styles.navLink}
                href="https://www.linkedin.com/in/jeremynguyencs"
                target="_blank"
              >
                <AiFillLinkedin size={28} />
              </Nav.Link>
            </Nav>
            ) : null}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
