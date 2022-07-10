import React, { useEffect, useRef } from 'react'
import { init } from "ityped";
import { KeyboardArrowDown } from "@material-ui/icons";

import "./Intro.scss"

export default function Intro() {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ["Developer", "Engineer", "Designer"],
        })
    }, [])

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
                    <h3> Designer
                        <span ref={textRef}></span>
                    </h3>
                </div>
                <a href="#portfolio"> 
                        <KeyboardArrowDown style={{fontSize: "50px"}} />
                </a>
            </div>
        </div>
    )
}
