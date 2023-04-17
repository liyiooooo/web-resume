import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./portfolioWeb.scss";
import "./global.scss";
import "animate.css";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { FaTimes } from "react-icons/fa";
import { RxDotFilled } from "react-icons/rx";

function PortfolioWeb() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    document.querySelector(".navBottom").style.display = "none";
  }, []);
  const [value, setValue] = React.useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const navigate = useNavigate();

  const back = () => {
    navigate(`/portfolio`);
  };

  return (
    <>
      <div className="container animate__animated animate__fadeIn">
        <div className="main_text">
          <h2>Web Design</h2>
        </div>

        <div className="row text_part">
          <div className="col web_port_content">
            <h2>音樂性整合網站</h2>
            <h6>樂器販售｜實體/線上課程｜練團室租借</h6>
            <FaTimes className="x_icon" size={20} color="rgb(212, 195, 186)" />
            <div>
              <img src={require("../images/em_logo.png")} alt=""></img>
            </div>
          </div>

          <div className="col es_tab">
            <Box className="all_es">
              <TabContext value={value}>
                <Box id="tab" className="tabs">
                  <TabList onChange={handleChange}>
                    <Tab
                      label="網站簡介"
                      value="1"
                      type="button"
                      className="about_es"
                      style={{ background: "#AEC2E1" }}
                    />

                    <Tab
                      label="設計理念"
                      value="2"
                      type="button"
                      className="es_design"
                      style={{ background: "#B2B1D6" }}
                    />
                    <Tab
                      label="主要分工"
                      value="3"
                      type="button"
                      className="es_mypart"
                      style={{ background: "#E5C2C2" }}
                    />
                  </TabList>
                </Box>
                <TabPanel value="1" className="about_es_content">
                  本網站有完整線上音樂課程、多樣性樂器銷售、實體練團室預約租借等服務。樂器種類一應俱全,完整區分電吉
                  他、貝斯、木吉他、電鋼琴、打擊類樂器;在平台購買線上課程後可隨時並反覆觀
                  看,提高時間彈性並降低交通成本。
                </TabPanel>
                <TabPanel value="2" className="about_es_content">
                  <span>Esho Studio LOGO</span>
                  <br></br>
                  Studio
                  的「i」字母如同爵士鼓棒。整體設計呈現音樂上活潑的律動感,並且表現音樂性網站的意象。
                  <br></br>
                  <span>網站配置</span>
                  <br></br>
                  網站使用帶有搖滾感覺的黑色以及低彩度溫柔的奶茶色,在深色背景中使用較為突
                  出的金黃以及橙色作為強調色,增添視覺上的亮點,為頁面增添活潑感,吸引使用
                  者的注意;另外再以較為低調內斂的灰色作為網站的輔助色。
                </TabPanel>
                <TabPanel value="3" className="about_es_content">
                  <span>視覺設計</span>
                  <br></br>
                  會員登入、註冊、忘記密碼、會員主頁、會員優惠卷、會員收藏
                  <br></br>
                  <span>前端切版</span>
                  <br></br>
                  會員商品訂單、會員課程、會員訂單詳細頁、會員優惠券
                  <br></br>
                  <span>React 程式開發撰寫、NodeJS</span>
                  <br></br>
                  訂單和優惠卷使用狀態切換、訂單詳細按鈕判斷、訂單排序、會員訂單評論、優惠碼複製、MySQL
                  資料庫串接
                </TabPanel>
              </TabContext>
            </Box>
          </div>
        </div>

        {/* video*/}
        <div className="es_video">
          <div className="second_text">
            <RxDotFilled color="#987D5E" />
            <h2>結業專題發表</h2>
          </div>

          <div className="video_mypart">
            <iframe
              src="https://www.youtube.com/embed/By9fN4uYkQQ?start=2436"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
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
export default PortfolioWeb;
