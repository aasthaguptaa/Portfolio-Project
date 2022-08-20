import React from "react";
import "./Menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <hr />
        <li onClick={() => setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        <hr />
        <li onClick={() => setMenuOpen(false)}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <hr />
        <li onClick={() => setMenuOpen(false)}>
          <a href="#work">Works</a>
        </li>
        <hr />
        <li onClick={() => setMenuOpen(false)}>
          <a href="#endorsements">Endorsements</a>
        </li>
        <hr />
        <li onClick={() => setMenuOpen(false)}>
          <a href="#contact">Contact</a>
        </li>
        <hr />
      </ul>
    </div>
  );
}
