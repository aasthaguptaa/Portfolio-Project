import React from "react";
import "./Topbar.scss";
import Globe from "../../images/globe.svg";

export default function Topbar({
  menuOpen,
  setMenuOpen,
  openLangList,
  setOpenLangList,
}) {
  return (
    <div className={"topbar " + ((menuOpen || openLangList) && "active")}>
      <div className="wrapper">
        <div className="left">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
          <a href="#intro" className="logo">
            Astha Gupta
          </a>
        </div>

        <div className="right">
          <div
            className="language"
            onClick={() => {
              setOpenLangList(!openLangList);
            }}
          >
            <img src={Globe} alt="ChangeLanguage" />
          </div>
        </div>
      </div>
    </div>
  );
}
