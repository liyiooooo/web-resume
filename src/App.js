import "./App.css";
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes, Router } from "react-router-dom";

import Navbar from "./component/navbar";

import Home from "./pages/home";
import Resume from "./pages/resume";
import Contact from "./pages/contact";
import Portfolio from "./pages/portfolio";
import PortfolioWeb from "./pages/portfolioWeb";
import PortfolioGraphic from "./pages/portfolioGraphic";

function App() {
  return (
    <>
      <main>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route>
              <Route path="/resume" element={<Resume />} />
            </Route>
            <Route>
              <Route path="/portfolio" element={<Portfolio />} />
            </Route>
            <Route>
              <Route path="/contact" element={<Contact />} />
            </Route>
            <Route>
              <Route
                path="/portfolio/portfolioWeb"
                element={<PortfolioWeb />}
              />
            </Route>
            <Route>
              <Route
                path="/portfolio/portfolioGraphic"
                element={<PortfolioGraphic />}
              />
            </Route>
            <Route>
              <Route path="/web-resume" element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
