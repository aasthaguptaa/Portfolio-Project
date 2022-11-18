import React from "react";
import { useTranslation } from "react-i18next";
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
          <li onClick={() => setMenuOpen(false)}>
            <a href="#endorsements">{t("endorsements")}</a>
          </li>
          <hr />
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
            <div>English</div>
          </li>
          <hr />
          <li
            onClick={() => {
              handleLangChange("de");
              setOpenLangList(false);
            }}
          >
            <div>German</div>
          </li>
          <hr />
        </ul>
      </div>
    </React.Fragment>
  );
}
