import React, { useEffect, useState } from "react";
import { Stack, Button } from "react-bootstrap";

function Socials({ usernames, links, icons, variant }) {
  const [direction, setDirection] = useState("horizontal");

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 768) {
        setDirection("vertical");
      } else {
        setDirection("horizontal");
      }
    });
  }, []);

  return (
    <Stack direction={direction} gap={3}>
      {usernames.map((username, index) => (
        <Button
          variant={variant[index]}
          href={links[index]}
          target="_blank"
          className="me-2 py-2 px-3"
        >
          {React.createElement(icons[index], { size: 24 })}{" "}
          <span className="ps-2">{username}</span>
        </Button>
      ))}
    </Stack>
  );
}

export default Socials;
