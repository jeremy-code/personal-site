import React from "react";
import Header from "./sections/Header";
import Footer from "./sections/Footer";
import Content from "./sections/Content";

import "./App.css";

const App = () => {
  return (
    <>
      <div className="content">
        <Header />
        <Content />
      </div>
      <Footer />
    </>
  );
};

export default App;