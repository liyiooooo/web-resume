import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./portfolioGraphic.scss";
import "./global.scss";
import "animate.css";
import { RxDotFilled } from "react-icons/rx";

function PortfolioGraphic() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    document.querySelector(".navBottom").style.display = "none";
  }, []);
  const navigate = useNavigate();

  const back = () => {
    navigate(`/portfolio`);
  };

  return (
    <>
      <div className="container animate__animated animate__fadeIn">
        <div className="main_text_grap">
          <h2>Graphic Design</h2>
        </div>
        <div className="row text_part_grap">
          <div>
            <div className="title_box blue_color ">
              <div>幼稚園畢業典禮文宣</div>
              <div className="three_dots">
                <RxDotFilled color="#ffffff" />
                <RxDotFilled color="#ffffff" />
                <RxDotFilled color="#ffffff" />
              </div>
            </div>

            <div className="cambridge_part row align-items-end">
              <div className="col-lg-8 col-md-12 ">
                <img
                  className="cambridge_content img-fluid "
                  src={require("../images/cambridge.jpg")}
                  alt=""
                ></img>
              </div>
              <div className="col-lg-2 col-md-6 ">
                <img
                  className=" cambridge_content img-fluid "
                  src={require("../images/invite_1.jpg")}
                  alt=""
                ></img>
              </div>
              <div className="col-lg-2 col-md-6 ">
                <img
                  className="cambridge_content img-fluid "
                  src={require("../images/invite_2.jpg")}
                  alt=""
                ></img>
              </div>
            </div>
          </div>

          <div>
            <div className="title_box  purple_color">
              <div>行銷文宣排版</div>
              <div className="three_dots">
                <RxDotFilled color="#ffffff" />
                <RxDotFilled color="#ffffff" />
                <RxDotFilled color="#ffffff" />
              </div>
            </div>

            <div className="cambridge_part row align-items-end">
              {/* 第1列 */}
              <div className="col-lg-3 col-md-4 col-sm-6  ">
                <img
                  className="cambridge_content img-fluid "
                  src={require("../images/EF_01.jpg")}
                  alt=""
                ></img>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6  ">
                <img
                  className=" cambridge_content img-fluid "
                  src={require("../images/EF_02.jpg")}
                  alt=""
                ></img>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6  ">
                <img
                  className="cambridge_content img-fluid "
                  src={require("../images/EF_03.jpg")}
                  alt=""
                ></img>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 ">
                <img
                  className="cambridge_content img-fluid "
                  src={require("../images/EF_04.jpg")}
                  alt=""
                ></img>
              </div>
              {/* 第2列 */}
              <div className="col-lg-3 col-md-4 col-sm-6 ">
                <img
                  className="cambridge_content img-fluid "
                  src={require("../images/EF_05.jpg")}
                  alt=""
                ></img>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 ">
                <img
                  className="cambridge_content img-fluid "
                  src={require("../images/EF_19.jpg")}
                  alt=""
                ></img>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 ">
                <img
                  className="cambridge_content img-fluid "
                  src={require("../images/EF_06.png")}
                  alt=""
                ></img>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 ">
                <img
                  className="cambridge_content img-fluid "
                  src={require("../images/EF_15.png")}
                  alt=""
                ></img>
              </div>
              {/* 第3列 */}
              <div className="col-lg-3 col-md-4 col-sm-6 ">
                <img
                  className="cambridge_content img-fluid "
                  src={require("../images/EF_10.jpg")}
                  alt=""
                ></img>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 ">
                <img
                  className="cambridge_content img-fluid "
                  src={require("../images/EF_11.jpg")}
                  alt=""
                ></img>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 ">
                <img
                  className="cambridge_content img-fluid "
                  src={require("../images/EF_12.jpg")}
                  alt=""
                ></img>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 ">
                <img
                  className="cambridge_content img-fluid "
                  src={require("../images/EF_14.png")}
                  alt=""
                ></img>
              </div>
              {/* 第4列 */}
              <div className="col-lg-3 col-md-4 col-sm-6 ">
                <img
                  className="cambridge_content img-fluid "
                  src={require("../images/EF_08.jpg")}
                  alt=""
                ></img>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 ">
                <img
                  className="cambridge_content img-fluid "
                  src={require("../images/EF_09.png")}
                  alt=""
                ></img>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 ">
                <img
                  className="cambridge_content img-fluid "
                  src={require("../images/EF_16.png")}
                  alt=""
                ></img>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 ">
                <img
                  className="cambridge_content img-fluid "
                  src={require("../images/EF_17.jpg")}
                  alt=""
                ></img>
              </div>
              {/* 第5列 */}
              <div className="col-lg-3 col-md-4 col-sm-6 ">
                <img
                  className="cambridge_content img-fluid "
                  src={require("../images/EF_07.png")}
                  alt=""
                ></img>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 ">
                <img
                  className="cambridge_content img-fluid "
                  src={require("../images/EF_13.jpg")}
                  alt=""
                ></img>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 ">
                <img
                  className="cambridge_content img-fluid "
                  src={require("../images/EF_18.png")}
                  alt=""
                ></img>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 ">
                <img
                  className="cambridge_content img-fluid "
                  src={require("../images/EF_23.jpg")}
                  alt=""
                ></img>
              </div>
              {/* 第6列 */}
              <div className="col-lg-3 col-md-4 col-sm-6 ">
                <img
                  className="cambridge_content img-fluid "
                  src={require("../images/EF_21.png")}
                  alt=""
                ></img>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 ">
                <img
                  className="cambridge_content img-fluid "
                  src={require("../images/EF_22.png")}
                  alt=""
                ></img>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 ">
                <img
                  className="cambridge_content img-fluid "
                  src={require("../images/EF_24.jpg")}
                  alt=""
                ></img>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 ">
                <img
                  className="cambridge_content img-fluid "
                  src={require("../images/EF_20.jpg")}
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
