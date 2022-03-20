import React from "react";
import { Container } from "react-bootstrap";

import styles from "./Section.module.css";

function Section({title, children, color, textColor}) {
  return (
    <div className={styles.section} style={{backgroundColor: color, color: textColor}}>
      <Container>
      <h1 className="mb-5">{title}</h1>
      {children}
      </Container>
    </div>
  );
}

export default Section;