import React from "react";
// import { Link } from "react-router-dom";
import "./contact.scss";
import "./global.scss";
import "animate.css";
import { useEffect } from "react";
import { ImGithub, ImInstagram } from "react-icons/im";
import { FaFacebookSquare } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

function Contact() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    document.querySelector(".navBottom").style.display = "block";
  }, []);
  const ins = () => {
    window.open("https://www.instagram.com/liyi00000/");
  };
  const git = () => {
    window.open("https://github.com/marsting/ting");
  };
  const face = () => {
    window.open("https://www.facebook.com/profile.php?id=100002722837916");
  };

  return (
    <>
      <div className="contact_content animate__animated animate__fadeIn">
        <div className="">
          <div className="four_dots_line ">
            <img
              src={require("../images/dot.png")}
              className="img-fluid"
              alt=""
            ></img>
            {/* <div></div> */}
            <h6>Contact Me</h6>
          </div>
          <div className="con_pic">
            <div className="con_10pic col-lg-6 col-sm-12">
              <div className="pic10_con"></div>
            </div>
            <div className="con_line"></div>
            <div className="con_content col-lg-6 col-sm-12">
              <h2>李翊琳<h5> Ellie Li</h5></h2>
              <h5>Designer | Web Designer | Ｗeb Developer</h5>

              <div className="media_link">
                <a href="" onClick={face}>
                  <FaFacebookSquare
                    size={24}
                    color="#878787"
                    className="media_icon"
                  />
                </a>
                <a href="" onClick={ins}>
                  <ImInstagram
                    size={20}
                    color="#878787"
                    className="media_icon"
                  />
                </a>
                <a href="" onClick={git}>
                  <ImGithub size={22} color="#878787" className="media_icon" />
                </a>
              </div>
              <br></br>
              <br></br>
              <div>
                <h5>
                  <BsTelephoneFill color="#878787" /> : 0912903422
                </h5>
                <h5>
                  <FiMail color="#878787" /> : usa831119@gmail.com
                </h5>

                {/* <h5><BsTelephoneFill color="#AE82D0"/> : 0912903422</h5> */}
                {/* <h5><FiMail color="#DBA2B3"/> : usa831119@gmail.com</h5> */}
              </div>
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
  );
}
export default Contact;
