import React from "react";

import { useNavigate } from "react-router-dom";
import "./portfolioGraphic.scss";
import "./global.scss";
import "animate.css";

import { FaTimes } from "react-icons/fa";
import { RxDotFilled } from "react-icons/rx";

function PortfolioGraphic() {
  const navigate = useNavigate();

  const back = () => {
    navigate(`/carousel#slide-2`);
  };

  return (
    <>
      <div className="container">
        <div className="main_text_grap">
          <h2>Graphic Design</h2>
        </div>
        <div className="row text_part_grap">
          <div>
            <div className="title_box d-flex justify-content-between">
              <div>幼稚園畢業典禮</div>
              <div>
                <RxDotFilled color="#ffffff" />
                <RxDotFilled color="#ffffff" />
                <RxDotFilled color="#ffffff" />
              </div>
            </div>

            <div className="cambridge_part row align-items-end">
              <div className="col-8">
                <img
                  className="cambridge_content img-fluid "
                  src={require("../images/cambridge.jpg")}
                  alt=""
                ></img>
              </div>
              <div className="col-2">
                <img
                  className=" cambridge_content img-fluid "
                  src={require("../images/invite_1.jpg")}
                  alt=""
                ></img>
              </div>
              <div className="col-2">
                <img
                  className="cambridge_content img-fluid "
                  src={require("../images/invite_2.jpg")}
                  alt=""
                ></img>
              </div>
            </div>
          </div>

          <div>
            <div className="title_box d-flex justify-content-between">
              <div>幼稚園畢業典禮</div>
              <div>
                <RxDotFilled color="#ffffff" />
                <RxDotFilled color="#ffffff" />
                <RxDotFilled color="#ffffff" />
              </div>
            </div>

            <div className="cambridge_part row align-items-end">
              <div className="col-8">
                <img
                  className="cambridge_content img-fluid "
                  src={require("../images/cambridge.jpg")}
                  alt=""
                ></img>
              </div>
              <div className="col-2">
                <img
                  className=" cambridge_content img-fluid "
                  src={require("../images/invite_1.jpg")}
                  alt=""
                ></img>
              </div>
              <div className="col-2">
                <img
                  className="cambridge_content img-fluid "
                  src={require("../images/invite_2.jpg")}
                  alt=""
                ></img>
              </div>
            </div>
          </div>
        </div>

        {/* back bottom*/}
        <div className="bottom_box">
          <button onClick={back} class="back_bottom" href="">
            <p>BACK</p>
          </button>
        </div>
      </div>
    </>
  );
}
export default PortfolioGraphic;
