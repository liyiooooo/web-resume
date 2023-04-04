
import React from 'react';
import {  Link } from 'react-router-dom';
import './contact.scss';
import './global.scss';
import 'animate.css';



import { ImGithub, ImInstagram} from "react-icons/im";
import { FaFacebookSquare} from "react-icons/fa";
import { BsTelephoneFill} from "react-icons/bs";
import { FiMail} from "react-icons/fi";




function contact (){
   
    const ins = ()=>{
        window.open('https://www.instagram.com/liyi00000/')
    } 
    const git = ()=>{
        window.open('https://github.com/marsting/ting')
    }
    const face = ()=>{
        window.open('https://www.facebook.com/profile.php?id=100002722837916')
    }
    
    
   
    return(

        

        <>
      
         
                <div className="re_content row">
                    <div className="col-4">
                        <div className="four_dots_line ">
                        {/* <img src={require('../images/dot.png')} alt=""></img> */}
                            <div></div>
                            <p>Contact Me</p>
                        </div>
                        <div className="re_10pic">
                            <div className="pic10_re"></div> 
                        </div>
                    </div>
                    <div className="con_info col-8"> 

                        <div className="con_content">
                            <h3>李翊琳</h3>
                            <h5>Designer | Web Designer | Ｗeb Developer</h5>
    
                            <div className='media_link'>
                                <a href='' onClick={face}><FaFacebookSquare size={24} color="#878787" className='media_icon'/></a>
                                <a href='' onClick={ins}><ImInstagram size={20} color="#878787" className='media_icon'/></a>
                                <a href='' onClick={git}><ImGithub size={22} color="#878787" className='media_icon'/></a>
                            </div>
                            <br></br>
                            <br></br>
                            <div>
                                <h6><BsTelephoneFill color="#878787"/> : 0912903422</h6>
                                <h6><FiMail color="#878787"/> : usa831119@gmail.com</h6>
                            </div>

                        </div>    
                      
                    </div>            
                </div>
         
            
            

            {/* <div className="re_nav row">
                <div className="reNav_re col">Resume</div>
                <div className="reNav_po col">Portfolio</div>
                <div className="reNav_con col">Contact</div>
            </div> */}
  
        {/* </div> */}
          
        </>
    )
}
export default contact