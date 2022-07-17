import React, { useState } from "react";
import "./Work.scss";
import { ArrowForwardIos, ArrowBackIos } from "@material-ui/icons";

export default function Work() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "X-Spark",
      desc: "A product, which generates electricity using human weight/pressure.",
      link: "https://ieeexplore.ieee.org/document/9033755",
      img: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Smart Notice Board",
      desc: "A product integrated with X-Spark which displays a customized message whenever the user steps on the X-Spark mat, meanwhile reducing the continuous consumption of electricity.",
      link: "https://medium.com/@HR03/smart-notice-board-using-x-spark-mat-1c508a5e84f3",
      img: "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "To-Do-List",
      desc: "An app that allows users to add, edit, and delete tasks they want to work on, and also mark tasks as complete without deleting them.",
      link: "https://ieeexplore.ieee.org/document/9033755",
      img: "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    },
    {
      id: "4",
      icon: "./assets/writing.png",
      title: "Tip Calculator",
      desc: "An app that calculates the tip amount for various percentages of the cost of the service, and also provides a total amount that includes the tip.",
      link: "https://ieeexplore.ieee.org/document/9033755",
      img: "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    },
    {
        id: "5",
        icon: "./assets/writing.png",
        title: "Calculator",
        desc: "An app that performs arithmetic operations on numbers.",
        link: "https://ieeexplore.ieee.org/document/9033755",
        img: "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
      },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="work" id="work">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  {/* <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div> */}
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <a href={d.link}>know more..</a>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <ArrowForwardIos
        className="arrow right"
        onClick={() => handleClick("")}
      />
      <ArrowBackIos
        className="arrow left"
        onClick={() => handleClick("left")}
      />
    </div>
  );
}
