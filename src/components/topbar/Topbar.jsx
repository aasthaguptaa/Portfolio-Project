import React from "react";
import "./Topbar.scss";
import Globe from "../../images/globe.svg";
import { useTranslation } from "react-i18next";

export default function Topbar({
  menuOpen,
  setMenuOpen,
  openLangList,
  setOpenLangList,
}) {
  const { t } = useTranslation();
  return (
    <div className={"topbar " + (menuOpen && "active")}>
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
          <ul>
            <hr />
            <li onClick={() => setMenuOpen(false)}>
            <a href="#experience">{t("experience")}</a>
          </li>
          <hr />
          <li onClick={() => setMenuOpen(false)}>
            <a href="#patent">{t("patent")}</a>
          </li>
          <hr />
          <li onClick={() => setMenuOpen(false)}>
            <a href="#badgesCertifications">{t("certifications")}</a>
          </li>
          <hr />
          <li onClick={() => setMenuOpen(false)}>
            <a href="#work">{t("works")}</a>
          </li>
          <hr />
          <li onClick={() => setMenuOpen(false)}>
            <a href="#honorsAwards">{t("awards")}</a>
          </li>
          <hr />
          <li onClick={() => setMenuOpen(false)}>
            <a href="#contact">{t("contact")}</a>
          </li>
          <hr />
          </ul>
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
