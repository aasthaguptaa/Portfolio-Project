import React, { useState } from "react";
import "./Portfolio.scss";
import { data } from "../../data";

export default function Portfolio() {
  const [currentTab, setCurrentTab] = useState("Experience");
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <hr className="hrstyle" />
      <div className="mainContent">
        <div className="tabWrapper">
          {data.map((tab, i) => (
            <div
              key={i}
              onClick={() => {
                setCurrentTab(tab.type);
              }}
              className={tab.type === currentTab ? "tab active" : "tab"}
            >
              {tab.type}
            </div>
          ))}
        </div>

        <div className="container">
          {data.map((item) => {
            if (item.type === currentTab) {
              return item.subData.map((d) => (
                <div className="item">
                  <div className="itemDesc">
                    <div className="title">{d.title}</div>
                    <div className="subTitle">{d.subTitle}</div>
                    <div className="description">{d.description}</div>
                    <div className="description">{d.date}</div>

                    {d.link ? (
                      <a href={d.link} target="_blank" rel="noreferrer">
                        know more..
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
      </div>
    </div>
  );
}
