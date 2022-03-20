import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { IconContext } from "react-icons";

import styles from "./AboutCards.module.css";

function AboutCards({ icons, headings, descriptions }) {
  return (
    <Row xs={1} md={3} className="g-4">
      {icons.map((icon, index) => (
        <Col>
          <Card key={index} className="mb-3 px-2 d-flex h-100">
            <Card.Body>
              <div className={styles.icon}>
                <IconContext.Provider value={{ color: "white" }}>
                  {React.createElement(icon, { size: 24 })}
                </IconContext.Provider>
              </div>
              <h3 className="d-flex justify-content-center my-3 text-dark">
                {headings[index]}
              </h3>
              <Card.Text class="text-dark">{descriptions[index]}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default AboutCards;
