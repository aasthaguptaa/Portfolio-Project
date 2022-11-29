import React from "react";
import { useTranslation } from "react-i18next";
import { data } from "../../data3";
import "./Badges.scss";
import pattern from "../../images/blueWave.svg";

const Badges = () => {
  const { t } = useTranslation();

  return (
    <div className="badgesCertifications" id="badgesCertifications">

      <div className="d-flex flex-column">
        <h1>{t("badgesCertifications")}</h1>
        <hr className="hrstyle" />
      </div>
   
        <div className="container">
          {data(t).map((item) => {
            if (item.id === "5") {
              return item.subData.map((d) => (
                <div className="item">
                  {/* <div className="itemDesc">
                    <div className="title">{d.title}</div>
                    <div className="subTitle">{d.subTitle}</div>
                    <div className="description">{d.description}</div>
                    <div className="description">{d.date}</div>

                    {d.link ? (
                      <a href={d.link} target="_blank" rel="noreferrer">
                        {t("knowMore")}
                      </a>
                    ) : null}
                  </div> */}
                  <img src={d.img} alt="" />
                </div>
              ));
            } else {
              return null;
            }
          })}
        </div>
        <img src={pattern} alt="pattern1"/>

    </div>
  );
};

export default Badges;
