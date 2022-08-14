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
    },
    // {
    //   id: "4",
    //   icon: "./assets/writing.png",
    //   title: "A multi-functional website",
    //   desc: "An app that is multifunctional in nature. It has several different uses.",
    //   link: "https://aasthaguptaa.github.io/Multifunctional-Website",
    //   img: "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    // }
    // {
    //   id: "4",
    //   icon: "./assets/writing.png",
    //   title: "Tip Calculator",
    //   desc: "An app that calculates the tip amount for various percentages of the cost of the service, and also provides a total amount that includes the tip.",
    //   link: "https://aasthaguptaa.github.io/Tip-Calculator",
    //   img: "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    // },
    // {
    //   id: "5",
    //   icon: "./assets/writing.png",
    //   title: "Calculator",
    //   desc: "An app that performs arithmetic operations on numbers.",
    //   link: "https://aasthaguptaa.github.io/Calculator",
    //   img: "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    // },
    // {
    //   id: "5",
    //   icon: "./assets/writing.png",
    //   title: "Joke Generator",
    //   desc: "An app that generates jokes on the click of a button.",
    //   link: "https://aasthaguptaa.github.io/Joke-Generator",
    //   img: "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    // },
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
