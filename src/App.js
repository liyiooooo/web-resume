import "./App.css";
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";

import Nav from "./layout/nav";
import Resume from "./pages/resume";
import Contact from "./pages/contact";
import Portfolio from "./pages/portfolio";
import PortfolioWeb from "./pages/portfolioWeb";
import PortfolioGraphic from "./pages/portfolioGraphic";

function App() {
  return (
    <>
      <main>
        {/* <Router> */}
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/resume" element={<Resume />} />

            <Route path="/contact" element={<Contact />} />

            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/portfolioWeb" element={<PortfolioWeb />} />
            <Route
              path="/portfolio/portfolioGraphic"
              element={<PortfolioGraphic />}
            />
          </Routes>
        </BrowserRouter>
        {/* </Router> */}
      </main>
    </>
  );
}

export default App;
