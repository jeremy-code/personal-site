import React from "react";
import { Card, Row, Col, Stack, Badge, Button } from "react-bootstrap";
import { AiFillGithub, AiFillPlayCircle } from "react-icons/ai";
import { IconContext } from "react-icons";

function ProjectCards({ titles, descriptions, images, tags, githubs, demos }) {
  return (
    <Row xs={1} md={3} className="g-4">
      {titles.map((title, index) => (
        <Col>
          <Card key={index} className="d-flex h-100">
            <Card.Header className="py-3 d-flex justify-content-center fs-5">
              {title}
            </Card.Header>
            <Card.Img variant="top" src={images[index]} />
            <Card.Body>
              <Card.Text>{descriptions[index]}</Card.Text>
              <Stack direction="horizontal" gap={1}>
                {tags[index].map((tag) => (
                  <Badge variant="primary">{tag}</Badge>
                ))}
              </Stack>
            </Card.Body>
            <Card.Footer>
              <Button
                variant="secondary"
                href={githubs[index]}
                target="_blank"
                className="me-2"
              >
                <IconContext.Provider value={{ color: "white" }}>
                  <AiFillGithub size={24} /> Github
                </IconContext.Provider>
              </Button>
              {index < 2 ? (
                <Button variant="primary" href={demos[index]} target="_blank">
                  <IconContext.Provider value={{ color: "white" }}>
                    <AiFillPlayCircle size={24} /> Live Demo
                  </IconContext.Provider>
                </Button>
              ) : (
                ""
              )}
            </Card.Footer>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default ProjectCards;
