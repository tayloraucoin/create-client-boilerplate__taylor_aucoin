import React from "react";
import { Route } from "react-router-dom";

import About from "./about/about.js";
import Home from "./home/home.js";

export default () => (
  <>
    <Route exact path="/" component={() => <Home />} />
    <Route exact path="/about" component={() => <About />} />
  </>
);
