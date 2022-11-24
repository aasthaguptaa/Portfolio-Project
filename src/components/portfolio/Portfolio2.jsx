import React, { useState } from "react";
import ShapeLeft from "./ShapeRight";
import ShapeRight from "./ShapeLeft";
import "./Portfolio2.scss";
import { useTranslation } from "react-i18next";

const Portfolio2 = () => {
  const { t } = useTranslation();
  const [openTab, setOpenTab] = useState(false);

  return (
    <div className="portfolio_container" id="portfolio">
      <div>
        <h1>{t("portfolio")}</h1>
        <hr className="hrstyle" />
      </div>
      <div className="d-flex flex-column justify-content-center gap-20">
        <div className="right">
          <ShapeLeft
            name="Experience"
            onClick={() => {
              setOpenTab(true);
            }}
          />
        </div>

        <div className="left">
          <ShapeRight name="Publications" />
        </div>

        <div className="right">
          <ShapeLeft name="Patent" />
        </div>

        <div className="left">
          <ShapeRight name="Honors & Awards" />
        </div>

        <div className="right">
          <ShapeLeft name="Badges & Certifcations" />
        </div>
      </div>
    </div>
  );
};

export default Portfolio2;
