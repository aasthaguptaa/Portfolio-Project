import React from "react";
import { useTranslation } from "react-i18next";
import "./Work.scss";

const Work = () => {
  const { t } = useTranslation();
  const data = (t) => [
    {
      id: "1",
      title: t("xSpark"),
      desc: t("xSparkDesc"),
      link: "https://ieeexplore.ieee.org/document/9033755",
      img: "assets/bulb.png",
    },
    {
      id: "2",
      title: t("smartNoticeBoard"),
      desc: t("smartNoticeBoardDesc"),
      link: "https://medium.com/@HR03/smart-notice-board-using-x-spark-mat-1c508a5e84f3",
      img: "assets/SNB1.jpeg",
    },
    {
      id: "3",
      title: t("toDoList"),
      desc: t("toDoListDesc"),
      link: "https://aasthaguptaa.github.io/TaskList",
      img: "assets/TaskList.png",
    }
  ];
  return (
    <div className="work" id="work">
      <h1>{t("work")}</h1>
      <hr className="hrstyle" />
      <div className="container">
        {data(t).map((item) => (
          <div className="card">
            <img className="user" src={item.img} alt="" />
            <div className="title"> {item.title}</div>
            <div className="description">{item.desc}</div>
            <a
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="description"
            >
              {t("clickToKnowMore")}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
