import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { IconContext } from "react-icons";

function AboutCards({ icons, headings, descriptions }) {
  const cardStyle = {
    width: "5rem",
    height: "5rem",
    borderRadius: "50%",
    backgroundColor: "#0d6efd",
    display: "grid",
    placeItems: "center",
    margin: "0 auto"
  };
  return (
    <Row xs={1} md={3} className="g-4 d-flex justify-content-around" >
      {icons.map((icon, index) => (
        <Col key={index} style={{maxWidth:"45ch"}}>
          <Card key={index} className="mb-3 p-3 d-flex h-100">
            <Card.Body className="d-flex flex-column justify-content-between">
              <div>
                <div style={cardStyle}>
                  <IconContext.Provider value={{ color: "white" }}>
                    {React.createElement(icon, { size: 30, key: index })}
                  </IconContext.Provider>
                </div>
                <h3 className="d-flex justify-content-center mt-3 text-dark fs-3">
                  {headings[index]}
                </h3>
              </div>
              <Card.Text className="text-dark mb-0">
                {descriptions[index]}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default AboutCards;
