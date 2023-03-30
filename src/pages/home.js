
import React from 'react';
import {  Link } from 'react-router-dom';
import './home.scss';
import './global.scss';

import 'animate.css';


function home (){
   
    
   
    return(

        <>
        
        <div className="home_bg">
            <img className="home_bg_l" src={require('../images/bg_4.png')} alt=""></img>
            <img className="home_bg_r" src={require('../images/bg_3.png')} alt=""></img>
        
            <Link className="home_10pic" role="button" to="/resume">
                <div className="pic10"></div> 
                <img className="home_finger" src={require('../images/finger.png')} alt=""></img>
                <p className="home_click">click me</p>
            </Link>
        
        
            
        </div>   
           
            

        
        </>


    )
}
export default home