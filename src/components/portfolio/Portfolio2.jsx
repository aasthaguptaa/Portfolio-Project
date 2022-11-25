import React, { useState } from "react";
import ShapeLeft from "./ShapeRight";
import ShapeRight from "./ShapeLeft";
import "./Portfolio2.scss";
import { useTranslation } from "react-i18next";
import pattern from "../../images/pattern.svg"

const Portfolio2 = () => {
  const { t } = useTranslation();
  const [openTab, setOpenTab] = useState(false);

  return (
    <div className="portfolio_container" id="portfolio">
      <div>
        <h1>{t("portfolio")}</h1>
        <hr className="hrstyle" />
      </div>
      <div className="container">
        <div className="right">
          <ShapeLeft
            name="Experience"
            id="1"
            onClick={() => {
              setOpenTab(true);
            }}
          />
        </div>

        <div className="left">
          <ShapeRight name="Publications" id="2" />
        </div>

        <div className="right">
          <ShapeLeft name="Patent" id="3"/>
        </div>

        <div className="left">
          <ShapeRight name="Honors & Awards" id="4" />
        </div>

        <div className="right">
          <ShapeLeft name="Badges & Certifcations" id="5" />
        </div>
      </div>
      <img src={pattern} alt="pattern1"/>
    </div>
  );
};

export default Portfolio2;
