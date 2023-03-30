
import './App.css';
import { BrowserRouter as Router, Route,Routes  } from "react-router-dom";

import Home from './pages/home'
import Resume from './pages/resume'
import Contact from './pages/contact'
import Portfolio from './pages/portfolio'
import PortfolioWeb from './pages/portfolioWeb'
import PortfolioGraphic from './pages/portfolioGraphic'




function App() {
  return (
    <>
    <main>
    <Router>
  
     
     <Routes >
         <Route>
           <Route path="/" element={<Home/>}/>
         </Route>
         <Route>
           <Route path="/resume" element={<Resume/>}/>
         </Route>
         <Route>
           <Route path="/contact" element={<Contact/>}/>
         </Route>
         <Route>
           <Route path="/portfolio" element={<Portfolio/>}/>
         </Route>
         <Route>
           <Route path="/portfolio/portfolioWeb" element={<PortfolioWeb/>}/>
         </Route>
         <Route>
           <Route path="/portfolioGraphic" element={<PortfolioGraphic/>}/>
         </Route>
  
     </Routes>
     </Router>
     
     
     </main>
    </>
   );
}

export default App;
