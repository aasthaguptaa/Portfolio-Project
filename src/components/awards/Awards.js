import React from "react";
import { useTranslation } from "react-i18next";
import { data } from "../../data3";
import "./Awards.scss";

const Awards = ({ setMenuOpen, setOpenLangList }) => {
  const { t } = useTranslation();

  return (
    <div className="awardsWrapper" id="honorsAwards">
      <div
        className="honorsAwards"
        onClick={() => {
          setMenuOpen(false);
          setOpenLangList(false);
        }}
      >
        <div className="container">
          {data(t).map((item) => {
            if (item.id === "4") {
              return item.subData.map((d) => (
                <div className="item">
                  <div className="itemDesc">
                    <div className="title">{d.title}</div>
                    <div className="description">{d.subTitle}</div>

                    <div className="description">{d.description}</div>
                    <div className="date">{d.date}</div>

                    {d.link ? (
                      <a href={d.link} target="_blank" rel="noreferrer">
                        {t("knowMore")}
                      </a>
                    ) : null}
                  </div>
                  <img src={d.img} alt="" />
                </div>
              ));
            } else {
              return null;
            }
          })}
        </div>
        <div className="heading">
          <h1>{t("honors")}</h1>
          <div className="and">&</div>
          <h1>{t("awards")}</h1>
        </div>
      </div>
    </div>
  );
};

export default Awards;
