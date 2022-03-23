import React from "react";
import { Container } from "react-bootstrap";

function Section({title, children, color, textColor}) {

  const sectionStyle = {
    display: "grid",
    placeItems: "center",
    padding: "clamp(1rem, 8vw, 6rem) 0",
    backgroundColor: color,
    color: textColor
  };

  return (
    <section style={sectionStyle}>
      <Container>
      <h1 className="mb-5">{title}</h1>
      {children}
      </Container>
    </section>
  );
}

export default Section;