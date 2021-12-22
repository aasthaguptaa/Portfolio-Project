import React from 'react'
import "./Intro.css"

export default function Intro() {
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/Girl.jpg" alt="Astha" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2> Hello! I am</h2>
                    <h1> Astha Gupta</h1>
                    <h3> Freelance <span> Designer</span></h3>
                </div>
                <a href="Portfolio">
                    <img src="assets/" alt="" />
                </a>
            </div>
        </div>
    )
}
