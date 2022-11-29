import React, { useState } from "react";
import "./Work1.scss";
import { ArrowForwardIos, ArrowBackIos, CancelScheduleSend } from "@material-ui/icons";
import { useTranslation } from "react-i18next";
import Bulb from "../../images/bulb.png"
import TaskList from "../../images/TaskList.png"
import SmartNoticeBoard from "../../images/SmartNoticeBoard.png"
import pattern from "../../images/workWave.svg";


export default function Work1() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useTranslation();

  const data = [
    {
      id: "1",
      // icon: "./assets/mobile.png",
      title: "X-Spark",
      desc: "A product, which generates electricity using human weight/pressure.",
      link: "https://ieeexplore.ieee.org/document/9033755",
      img: Bulb,
    },
    {
      id: "2",
      // icon: "./assets/globe.png",
      title: "Smart Notice Board",
      desc: "A product integrated with X-Spark which displays a customized message whenever the user steps on the X-Spark mat, meanwhile reducing the continuous consumption of electricity.",
      link: "https://medium.com/@HR03/smart-notice-board-using-x-spark-mat-1c508a5e84f3",
      img: SmartNoticeBoard,
    },
    {
      id: "3",
      // icon: "./assets/writing.png",
      title: "To-Do-List",
      desc: "An app that allows users to add, edit, and delete tasks they want to work on, and also mark tasks as complete without deleting them.",
      link: "https://aasthaguptaa.github.io/To-Do-List",
      img: TaskList,
    }
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="work" id="work">
      <div className="d-flex flex-column">
        <h1>{t("work")}</h1>
        <hr className="hrstyle" />
      </div>
      <div className="sliderContainer">
        <div
          className="slider"
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
        >
          {data.map((d) => (
            <div className="container">
              <div className="item">
                <div className="left">
                  <div className="leftContainer">
                    {/* <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div> */}
                    <h2>{d.title}</h2>
                    <p>{d.desc}</p>
                    <a href={d.link}>know more..</a>
                  </div>
                </div>
                <div className="right">
                  <img src={d.img} alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <ArrowForwardIos
          className="arrow right"
          onClick={() => handleClick("")}
        />
        <ArrowBackIos
          className="arrow left"
          onClick={() => handleClick("left")}
        />
      </div>
      <div>
      <img src={pattern} alt="pattern1"/>
      </div>
    </div>
  );
}
