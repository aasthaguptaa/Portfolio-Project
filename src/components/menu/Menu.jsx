import React from "react";
import { useTranslation } from "react-i18next";
import UK from "../../images/UK.svg";
import Greece from "../../images/Greece.svg";
import UAE from "../../images/UAE.svg";
import Germany from "../../images/Germany.svg";
import "./Menu.scss";

export default function Menu({
  menuOpen,
  setMenuOpen,
  openLangList,
  setOpenLangList,
}) {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const handleLangChange = (data) => {
    i18n.changeLanguage(data);
  };
  return (
    <React.Fragment>
      <div className={"menu " + (menuOpen && "active")}>
        <ul>
          <hr />
          <li onClick={() => setMenuOpen(false)}>
            <a href="#intro">{t("home")}</a>
          </li>
          <hr />
          <li onClick={() => setMenuOpen(false)}>
            <a href="#portfolio">{t("portfolio")}</a>
          </li>
          <hr />
          <li onClick={() => setMenuOpen(false)}>
            <a href="#work">{t("works")}</a>
          </li>
          <hr />
          {/* <li onClick={() => setMenuOpen(false)}>
            <a href="#endorsements">{t("endorsements")}</a>
          </li>
          <hr /> */}
          <li onClick={() => setMenuOpen(false)}>
            <a href="#contact">{t("contact")}</a>
          </li>
          <hr />
        </ul>
      </div>
      <div className={"lang " + (openLangList && "active")}>
        <ul>
          <hr />
          <li
            onClick={() => {
              handleLangChange("en");
              setOpenLangList(false);
            }}
          >
            <img src={UK} alt="UK" />
            <div>English</div>
          </li>
          <hr />
          <li
            onClick={() => {
              handleLangChange("de");
              setOpenLangList(false);
            }}
          >
            <img src={Germany} alt="Germany" />
            <div>German</div>
          </li>
          <hr />
          <li
            onClick={() => {
              handleLangChange("el");
              setOpenLangList(false);
            }}
          >
            <img src={Greece} alt="Greece" />
            <div>Greek</div>
          </li>
          <hr />
          <li
            onClick={() => {
              handleLangChange("ar");
              setOpenLangList(false);
            }}
          >
            <img src={UAE} alt="UAE" />
            <div>Arabic</div>
          </li>
          <hr />
        </ul>
      </div>
    </React.Fragment>
  );
}
