import React from "react";

import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        Made with{" "}
        <span role="img" aria-label="love" className={styles.emoji}>
          ❤️
        </span>{" "}
        by{" "}
        <a
          className={styles.link}
          href="https://github.com/jeremynguyencs"
          target="__blank"
        >
          Jeremy Nguyen
        </a>
      </p>
    </footer>
  );
}

export default Footer;
