import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
// icons
import { AiFillGithub, AiFillLinkedin, AiFillCode } from "react-icons/ai";
import { IoMdMail } from "react-icons/io";
import { FaUserGraduate } from "react-icons/fa";
import { BiHappyAlt } from "react-icons/bi";

import styles from "./Content.module.css";
import Hero from "../components/Hero";
import Section from "../components/Section";
import AboutCards from "../components/AboutCards";
import ProjectCards from "../components/ProjectCards";
import ContactForm from "../components/ContactForm";
import Socials from "../components/Socials";

// images
import talk from "../assets/talk.svg";
import covidTracker from "../assets/covid-tracker.png";
import rhythmRoom from "../assets/rhythm-room.png";
import markdown from "../assets/markdown.png";

function Content() {
  return (
    <Container fluid className="px-0">
      <Hero />
      <Section
        title="About Me"
        children={
          <AboutCards
            icons={[FaUserGraduate, AiFillCode, BiHappyAlt]}
            headings={["Student", "Developer", "Human"]}
            descriptions={[
              "Mathematics and Computer Science student at UC San Diego. Expected to graduate in Spring 2025.",
              "I love coding and constantly learning new things. My favorite languages are Java, Python, and JavaScript.",
              "I'm a person who loves to talk and do human things. I love to read, write, and listen to music.",
            ]}
          />
        }
        color={"#0d6efd"}
        textColor={"#fff"}
      />
      <Section
        title="My Projects"
        children={
          <ProjectCards
            titles={["Rhythm Room", "COVID-19 Tracker", "Markdown Parser"]}
            descriptions={[
              "A web app that allows you to listen to music and watch videos synchronously with other people.",
              "Track the current status of COVID-19 in the world based on current data.",
              "Parse links in markdown file and extract the URLs from them.",
            ]}
            images={[rhythmRoom, covidTracker, markdown]}
            tags={[
              ["React", "Node", "Socket.io"],
              ["React", "Chart.js", "API"],
              ["Java", "JUnit", "Bash"],
            ]}
            githubs={[
              "https://github.com/sprestrelski/rhythm-room",
              "https://github.com/jeremynguyencs/covid-tracker",
              "https://github.com/jeremynguyencs/markdown-parser",
            ]}
            demos={[
              "https://rhythm-room.herokuapp.com/",
              "https://covid-tracker.herokuapp.com/",
            ]}
          />
        }
        color={"white"}
        textColor={"black"}
      />
      <Section
        title="Contact Me"
        children={
          <Row>
            <ContactForm />
            <Col lg={{ span: 4, offset: 2 }} className={styles.image}>
              <Image src={talk} fluid />
            </Col>
          </Row>
        }
        color={"#f1f5f9"}
      />
      <Section
        title="My Socials"
        children={
          <Socials
            links={[
              "mailto:hi@jeremynguyen.dev",
              "https://www.linkedin.com/in/jeremynguyencs/",
              "https://https://www.github.com/jeremynguyencs/",
            ]}
            usernames={[
              "hi@jeremynguyen.dev",
              "jeremynguyencs",
              "jeremynguyencs",
            ]}
            icons={[IoMdMail, AiFillLinkedin, AiFillGithub]}
            variant={["outline-danger", "outline-secondary", "outline-primary"]}
          />
        }
        color={"white"}
        textColor={"black"}
      />
    </Container>
  );
}

export default Content;
