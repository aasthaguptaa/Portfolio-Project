import React from "react";
import "./Work.scss";

const Work = () => {
  const data = [
    {
      id: "1",
      title: "X-Spark",
      desc: "A product, which generates electricity using human weight/pressure.",
      link: "https://ieeexplore.ieee.org/document/9033755",
      img: "assets/bulb.png",
    },
    {
      id: "2",
      title: "Smart Notice Board",
      desc: "A product integrated with X-Spark which displays a customized message whenever the user steps on the X-Spark mat, meanwhile reducing the continuous consumption of electricity.",
      link: "https://medium.com/@HR03/smart-notice-board-using-x-spark-mat-1c508a5e84f3",
      img: "assets/SNB1.jpeg",
    },
    {
      id: "3",
      title: "To-Do-List",
      desc: "An app that allows users to add, edit, and delete tasks they want to work on, and also mark tasks as complete without deleting them.",
      link: "https://aasthaguptaa.github.io/TaskList",
      img: "assets/TaskList.png",
    }
  ];
  return (
    <div className="work" id="work">
      <h1>Work</h1>
      <hr className="hrstyle" />
      <div className="container">
        {data.map((item) => (
          <div className="card">
            <img className="user" src={item.img} alt="" />
            <div className="title"> {item.title}</div>
            <div className="description">{item.desc}</div>
            <a
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="description"
            >
              Click here to know more!
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
