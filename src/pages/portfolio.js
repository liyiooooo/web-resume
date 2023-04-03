
import React from 'react';
import {  Link } from 'react-router-dom';
import './portfolio.scss';
import './global.scss';
import 'animate.css';
// import Accordion from './Accordion/Accordion';
// import Accordion from 'react-bootstrap/Accordion';


// import { FaArrowCircleUp,FaCaretRight } from "react-icons/fa";
// import Label from '@douyinfe/semi-ui/lib/es/form/label';

function portfolio (){
   
       
    
    
   
    return(

        

        <>
        {/* <div className="all_bg"> */}
            {/* <div>
                <Link to={"/"} className="arrow_box" role="button">
                    <FaArrowCircleUp className="up_arrow"/>
                </Link>
            </div> */}
            
            <div className="port_content row">
                <div className="col-4">
                    <div className="four_dots_line ">
                    {/* <img src={require('../images/dot.png')} alt=""></img> */}
                        <div></div>
                        <p>My Resume</p>
                    </div>
                    <div className="port_pic row">
                        <div className="efee31_port col">
                            <div className="port_box" >
                                <div className="card-title">
                                    img
                                </div>
                                <div className="card-body">
                                <Link to={"/carousel/portfolio/portfolioWeb" } >Web Design </Link>
                                </div>
                            </div>
                        </div> 
                        <div className="graphic_port col">
                            <div className="port_box" >
                                <div className="card-title">
                                    img
                                </div>
                                <div className="card-body">
                                    <Link to={"/carousel/portfolio/Graphic"}>Graphic Design </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-8">       
                   
                </div>            
            </div>

            
  
        {/* </div> */}
          
        </>
    )
}
export default portfolio