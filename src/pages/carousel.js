import React from 'react';

import {  Link } from 'react-router-dom';
// import Carousel from 'react-bootstrap/Carousel';
import './global.scss';
import './carousel.scss';
import 'animate.css';
import Resume from './resume';
import Portfolio from './portfolio';
import Contact from './contact';
import { FaArrowCircleUp, } from "react-icons/fa";


function carousel (){
     
      


   
    return(

        

        <>
        {/* <div className="all_bg"> */}
            <div>
                <Link to={"/"} className="arrow_box" role="button">
                    <FaArrowCircleUp className="up_arrow"/>
                </Link>
            </div>
            
           
            
                <div class="carousel">
                    <ul class="scroll">
                    <li class="scroll-item-outer">
                        <div id="slide-1" class="scroll-item">
                            <Resume />
                        </div>
                    </li>
                    <li class="scroll-item-outer">
                        <div id="slide-2" class="scroll-item">
                            {/* <Portfolio /> */}
                      
                        </div>
                    </li>
                    <li class="scroll-item-outer">
                        <div id="slide-3" class="scroll-item">
                            {/* <Contact /> */}
                        </div>
                    </li>
                   
                    </ul>
                </div>
          
                <nav id="navigate">
                    {/* <Link to={"#slide-1"}/>
                    <Link to={"#slide-2"}/>
                    <Link to={"#slide-3"}/> */}
                    <a href="#slide-1"></a>
                    <a href="#slide-2"></a>
                    <a href="#slide-3"></a>
                    
                </nav>

            {/* <div class="carousel-indicators_10">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div> */}

            {/* <div className="re_nav row">
                <div className="reNav_re col">Resume</div>
                <div className="reNav_po col">Portfolio</div>
                <div className="reNav_con col">Contact</div>
            </div> */}
  
        {/* </div> */}
          
        </>
    )
}
export default carousel