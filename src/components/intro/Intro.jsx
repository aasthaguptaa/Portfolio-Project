import React, { useEffect, useRef } from "react";
import { init } from "ityped";
import { KeyboardArrowDown } from "@material-ui/icons";
import AsthaFinal from "../../images/AsthaFinal.png";
import "./Intro.scss";
import { useTranslation } from "react-i18next";

export default function Intro({ setMenuOpen, setOpenLangList }) {
  const textRef = useRef();
  const { t } = useTranslation();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      cursorChar: "|",
      backDelay: 1500,
      backSpeed: 60,
      strings: [t("developer"), t("engineer"), t("designer")],
    });
  }, []);

  return (
    <div
      className="intro"
      id="intro"
      onClick={() => {
        setMenuOpen(false);
        setOpenLangList(false);
      }}
    >
      <div className="left">
        <div className="imgContainer">
          <img src={AsthaFinal} />
        </div>
      </div>
      <div className="center">
        <div className="wrapper">
          <h2>{t("helloIam")}</h2>
          <h1>{t("asthaGupta")}</h1>
          <h3>
            {t("creative")}
            <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#experience">
          <KeyboardArrowDown style={{ fontSize: "50px", color: "#7d2323b5" }} />
        </a>
      </div>

      <div className="right">
        <div className="smallContainer"></div>
      </div>
    </div>
  );
}
