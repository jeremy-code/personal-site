import React from "react";
import { Button, Stack, Col, Image, Row, Container } from "react-bootstrap";
import { useSpring, animated, easings } from "react-spring";
// import BsChatSquareDots from icons
import { BiChevronRight } from "react-icons/bi";

import styles from "./Hero.module.css";
import coding from "../assets/coding.svg";

function Hero() {
  const props = useSpring({
    loop: { reverse: true },
    from: { y: 0, rotate: -20 },
    to: { y: 0, rotate: 20 },
    config: {
      duration: 500,
      mass: 1,
      tension: 210,
      friction: 20,
      easing: easings.easeOutCubic,
    },
  });

  const props2 = useSpring({
    loop: { reverse: true },
    from: { x: 0 },
    to: { x: 3 },
    config: {
      duration: 500,
      easings: easings.easeOutBack,
    },
  });

  return (
    <Container className={styles.hero}>
      <Row className={styles.heroContent}>
        <Col lg>
          <h1 className={styles.heroTitle}>
            <animated.span style={props} className={styles.emoji}>
              <span role="img" aria-label="wave">
                👋
              </span>
            </animated.span>{" "}
            Hi there,
          </h1>
          <p className={styles.heroSubtitle}>I’m Jeremy</p>
          <Stack direction="horizontal" gap={4}>
            <Button variant="primary" size="lg" href="#contact">
              Contact me{" "}
              <animated.span className={styles.emoji} style={props2}>
                <BiChevronRight size={28} />
              </animated.span>
            </Button>
            <Button
              variant="outline-secondary"
              size="lg"
              href={process.env.PUBLIC_URL + "/resume.pdf"}
              target="_blank"
            >
              See my Resume
            </Button>
          </Stack>
        </Col>
        <Col lg className={styles.svg}>
          <Image fluid src={coding}></Image>
        </Col>
      </Row>
    </Container>
  );
}

export default Hero;
