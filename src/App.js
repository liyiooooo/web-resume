
import './App.css';
import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter,Route, Routes  } from "react-router-dom";

import Home from './pages/home'
import Carousel from './pages/carousel';
import Resume from './pages/resume'
import Contact from './pages/contact'
import Portfolio from './pages/portfolio'
import PortfolioWeb from './pages/portfolioWeb'
import PortfolioGraphic from './pages/portfolioGraphic'




function App() {
  return (
    <>
    <main>
    <BrowserRouter>
   
  
   
     <Routes >
         <Route>
           <Route path="/" element={<Home/>}/>
         </Route>
         <Route>
           <Route path="/carousel" element={<Carousel/>}/>
         </Route>
         <Route>
           <Route path="/carousel/resume" element={<Resume/>}/>
         </Route>
         <Route>
           <Route path="/carousel/contact" element={<Contact/>}/>
         </Route>
         <Route>
           <Route path="/carousel/portfolio" element={<Portfolio/>}/>
         </Route>
         <Route>
           <Route path="/carousel/portfolio/portfolioWeb" element={<PortfolioWeb/>}/>
         </Route>
         <Route>
           <Route path="/carousel/portfolioGraphic" element={<PortfolioGraphic/>}/>
         </Route>
  
     </Routes>
   
     
    </BrowserRouter>
     
     </main>
    </>
   );
}

export default App;
