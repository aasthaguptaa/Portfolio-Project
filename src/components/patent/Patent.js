import React from "react";
import { useTranslation } from "react-i18next";
import { data } from "../../data3";
import "./Patent.scss";
import pattern from "../../images/wave.svg";

const Patent = () => {
  const { t } = useTranslation();

  return (
    <div className="patent" id="patent">
      <div className="d-flex flex-column">
        <h1>{t("patentAndResearchPaper")}</h1>
        <hr className="hrstyle" />
      </div>
      <div className="container">
        {data(t).map((item) => {
          if (item.id === "3") {
            return item.subData.map((d) => (
              <div className="item">
                <img src={d.img} alt="" />

                <div className="title">{d.title}</div>

                <div className="description">{d.description}</div>
                <div className="date">{d.date}</div>

                {d.link ? (
                  <a href={d.link} target="_blank" rel="noreferrer">
                    {t("knowMore")}
                  </a>
                ) : null}
              </div>
            ));
          } else {
            return null;
          }
        })}
      </div>
      <img src={pattern} alt="pattern1" />
    </div>
  );
};

export default Patent;
