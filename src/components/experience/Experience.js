import React from "react";
import { useTranslation } from "react-i18next";
import { data } from "../../data3";
import "./Experience.scss";
import pattern from "../../images/pattern.svg";

const Experience = ({ setMenuOpen, setOpenLangList }) => {
  const { t } = useTranslation();

  return (
    <div
      className="experience"
      id="experience"
      onClick={() => {
        setMenuOpen(false);
        setOpenLangList(false);
      }}
    >
      <div className="d-flex flex-column">
        <h1>{t("experience")}</h1>
        <hr className="hrstyle" />
      </div>
      <div className="container">
        {data(t).map((item) => {
          if (item.id === "1") {
            return item.subData.map((d) => (
              <div className="d-flex flex-column">
                <div className="item">
                  <img src={d.img} alt="" />
                </div>
                <div className="itemFooter">
                  <div className="itemDesc">
                    <div className="title">{d.title}</div>
                    <div className="date">{d.date}</div>

                    {d.link ? (
                      <a href={d.link} target="_blank" rel="noreferrer">
                        {t("knowMore")}
                      </a>
                    ) : null}
                  </div>
                </div>
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

export default Experience;
