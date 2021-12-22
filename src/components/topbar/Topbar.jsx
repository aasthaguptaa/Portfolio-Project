import React from 'react'
import "./Topbar.css"
import {Email,Phone} from "@material-ui/icons"

export default function Topbar({menuOpen,setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Astha Gupta</a>
                    <div className="itemContainer">
                    <Phone className="icon"/>
                    <span>8777712682</span>
                    </div>
                    <div className="itemContainer">
                    <Email className="icon"/>
                    <span>aasthaguptaa18@gmail.com</span>
                    </div>
                
                </div>
                
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                
                </div>
            </div>
            
        </div>
    );
}
