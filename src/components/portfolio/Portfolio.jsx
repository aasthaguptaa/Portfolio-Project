import React, { useState, useEffect } from "react";
import PortfolioList from "../PortfolioList/portfolioList";
import "./Portfolio.scss";
import {
  experiencePortfolio,
  publicationsPortfolio,
  patentPortfolio,
  honorsAwardsPortfolio,
  badgesCertificatonsPortfolio,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("experience");
  const [data, setData] = useState([]);

  const list = [
    {
      id: "experience",
      title: "Experience",
    },
    {
      id: "publications",
      title: "Publications",
    },
    {
      id: "patent",
      title: "Patent",
    },
    {
      id: "honors&awards",
      title: "Honors & Awards",
    },
    {
      id: "badges&certificatons",
      title: "Badges & Certifications",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "experience":
        setData(experiencePortfolio);
        break;
      case "publications":
        setData(publicationsPortfolio);
        break;
      case "patent":
        setData(patentPortfolio);
        break;
      case "honors&awards":
        setData(honorsAwardsPortfolio);
        break;
      case "badges&certificatons":
        setData(badgesCertificatonsPortfolio);
        break;
      default:
        setData(experiencePortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <hr className="hrstyle" />
        <div className="container">
          {data.map((d) => (
            <div className="item">
              <img src={d.img} alt="" />
              <div className="itemDesc">
                <div className="title">{d.title}</div>
                <div className="subTitle">{d.subTitle}</div>
                <div className="description">{d.description}</div>
                <div className="description">{d.date}</div>

                {d.link ? (
                  <a href={d.link} target="_blank" rel="noreferrer">
                    <div className="description">Know More..</div>
                  </a>
                ) : null}
              </div>
            </div>
          ))}
        </div>
    </div>
  );
}
