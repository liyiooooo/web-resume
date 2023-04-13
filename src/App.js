import "./App.css";
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/home";
import Carousel from "./pages/carousel";
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
          <Routes>
            <Route>
              <Route path="/" element={<Home />} />
            </Route>
            <Route>
              <Route>
                <Route exact path="/carousel" element={<Carousel />}>
                  <Route path="/carousel#slide-1" element={<Resume />} />
                  <Route path="/carousel#slide-3" element={<Contact />} />
                  <Route path="/carousel#slide-2" element={<Portfolio />} />
                </Route>
              </Route>
              {/* <Route>
                <Route path="/carousel#slide-1" element={<Resume />} />
              </Route>
              <Route>
                <Route path="/carousel#slide-3" element={<Contact />} />
              </Route>
              <Route>
                <Route path="/carousel#slide-2" element={<Portfolio />} />
              </Route> */}
            </Route>

            <Route>
              <Route path="/carousel/portfolioWeb" element={<PortfolioWeb />} />
            </Route>
            <Route>
              <Route
                path="/carousel/portfolioGraphic"
                element={<PortfolioGraphic />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
        {/* </Router> */}
      </main>
    </>
  );
}

export default App;
