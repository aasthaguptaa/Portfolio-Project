import React, { useState } from "react";
import "./Work1.scss";
import { ArrowForwardIos, ArrowBackIos } from "@material-ui/icons";
import { useTranslation } from "react-i18next";
import Bulb from "../../images/bulb.png";
import TaskList from "../../images/TaskList.png";
import SmartNoticeBoard from "../../images/SmartNoticeBoard.png";
import ResearchPaper from "../../images/ResearchPaper.png";
import pattern1 from "../../images/pattern.svg";

export default function Work1({ setMenuOpen, setOpenLangList }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useTranslation();

  const dataArray = [t("xSpark"), t("smartNoticeBoard"), t("toDoList")];

  const data = (t) => [
    {
      id: "1",
      icon: Bulb,
      title: t("xSpark"),
      desc: t("xSparkDesc"),
      link: "https://ieeexplore.ieee.org/document/9033755",
      img: ResearchPaper,
    },
    {
      id: "2",
      // icon: "./assets/globe.png",
      title: t("smartNoticeBoard"),
      desc: t("smartNoticeBoardDesc"),
      link: "https://medium.com/@HR03/smart-notice-board-using-x-spark-mat-1c508a5e84f3",
      img: SmartNoticeBoard,
    },
    {
      id: "3",
      // icon: "./assets/writing.png",
      title: t("toDoList"),
      desc: t("toDoListDesc"),
      link: "https://aasthaguptaa.github.io/To-Do-List",
      img: TaskList,
    },
  ];

  const handleClick = (way) => {
    console.log("way: ", way);

    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(
          currentSlide < dataArray.length - 1 ? currentSlide + 1 : 0
        );
  };

  return (
    <div
      className="work"
      id="work"
      onClick={() => {
        setMenuOpen(false);
        setOpenLangList(false);
      }}
    >
      <div className="d-flex flex-column">
        <h1>{t("work")}</h1>
        <hr className="hrstyle" />
      </div>

      <h1>
        ({currentSlide + 1}/{dataArray.length})
      </h1>

      <div className="sliderContainer">
        <div
          className="slider"
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
        >
          {data(t).map((d) => (
            <div className="container">
              <div className="item">
                <div className="left">
                  <div className="leftContainer">
                    {d.icon ? (
                      <div className="imgContainer">
                        <img src={d.icon} alt="" />
                      </div>
                    ) : null}
                    <h2>{d.title}</h2>
                    <p>{d.desc}</p>
                    <a href={d.link}>{t("knowMore")}</a>
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

      <img src={pattern1} alt="pattern1" />
    </div>
  );
}
