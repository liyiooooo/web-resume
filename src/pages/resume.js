import React from "react";
// import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./resume.scss";
import "./global.scss";
import "animate.css";
import { Accordion } from "react-bootstrap";
import { FaCaretRight } from "react-icons/fa";

function Resume() {
  useEffect(() => {
    document.querySelector(".navBottom").style.display = "block";
  }, []);
  return (
    <>
      {/* <div className="all_bg"> */}
      {/* <div>
                <Link to={"/"} className="arrow_box" role="button">
                    <FaArrowCircleUp className="up_arrow"/>
                </Link>
            </div> */}

      <div className="re_content row">
        <div className="col-4 ">
          <div className="four_dots_line ">
            {/* <img src={require('../images/dot.png')} alt=""></img> */}
            <div></div>
            <p>My Resume</p>
          </div>
          <div className="re_10pic">
            <div className="pic10_re"></div>
          </div>
        </div>
        <div className="col-8 ">
          <Accordion defaultActiveKey={["0"]} flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>About Me</Accordion.Header>
              <Accordion.Body>
                喜歡探索新事物並持續保持熱情
                <br />
                對於平面圖像及排版有高度敏銳及興趣
                <br />
                在工作中發現自己的不足，想要努力找尋個人目標，
                <br />
                進而踏入ui/ux設計這塊領域。發現到設計不只是設計出一個東西，
                <br />
                而是一種人與人之間的互動，設計只是搭起關係的橋樑。
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Education</Accordion.Header>
              <Accordion.Body>
                <div className="re_edu_content">
                  <div>
                    <h6>2013/9~2017/6</h6>
                    <span>義守大學</span>&nbsp;創意商品設計學系
                    <br />
                  </div>
                  <div>
                    <h6>2013/6~2010/9</h6>
                    <span>國立竹南高中</span>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Experience</Accordion.Header>
              <Accordion.Body>
                <div className="re_exp_content">
                  <div>
                    <h6>2022/9~2023/22</h6>
                    <span>資展國際</span>（原資策會）
                    <br />
                    <FaCaretRight size={13} />
                    UI/UX設計
                    <br />
                    <FaCaretRight size={13} />
                    前端切版
                    <br />
                    <FaCaretRight size={13} />
                    mySQL資料庫串接
                    <br />
                  </div>
                  <div>
                    <h6>2019/6~2022/7</h6>
                    <span>川得美國際</span>&nbsp;平面設計師
                    <br />
                    <FaCaretRight size={13} />
                    官網Banner設計
                    <br />
                    <FaCaretRight size={13} />
                    粉絲團發文製圖
                    <br />
                    <FaCaretRight size={13} />
                    文宣圖片修圖
                    <br />
                  </div>
                  <div>
                    <h6>2018/6~2018/9</h6>
                    <span>劍橋幼兒園</span>&nbsp; 行政美編
                    <br />
                    <FaCaretRight size={13} />
                    園所宣導文宣設計
                    <br />
                    <FaCaretRight size={13} />
                    幼兒教材圖片設計
                    <br />
                    <FaCaretRight size={13} />
                    課後活動影片剪輯
                    <br />
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Skills</Accordion.Header>
              <Accordion.Body>
                <div className="re_skill_content">
                  <div>
                    <span>視覺設計</span>
                    <br />
                    <FaCaretRight size={13} />
                    Photoshop
                    <br />
                    <FaCaretRight size={13} />
                    Illustrator
                    <br />
                    <FaCaretRight size={13} />
                    Figma
                    <br />
                  </div>
                  <div className="web_dev">
                    <span>網頁開發</span>
                    <br />
                    <FaCaretRight size={13} />
                    HTML
                    <br />
                    <FaCaretRight size={13} />
                    css
                    <br />
                    <FaCaretRight size={13} />
                    Javascript
                    <br />
                  </div>
                  <div className="web_dev">
                    <br />
                    <FaCaretRight size={13} />
                    React
                    <br />
                    <FaCaretRight size={13} />
                    MYSQL
                    <br />
                    <FaCaretRight size={13} />
                    Node.js
                    <br />
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
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
export default Resume;
