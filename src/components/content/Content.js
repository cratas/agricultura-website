import React from "react";
import { Container } from "react-bootstrap";
import Home from "./home/Home";
import Services from "./services/Services";
import Gallery from "./gallery/Gallery";
import Contact from "./contact/Contact";
import { Routes, Route } from "react-router-dom";

const Content = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/services" element={<Services />} />
      <Route exact path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Content;
