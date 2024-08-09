import React from "react";
import dpImage from "../assets/dp.jpg"

export default function Header(){
    return(
        <div className="header-el">
        <img src={dpImage}></img>
        <h1>Soumajit Roy</h1>
        <h3>Frontend Developer</h3>
        <p>ITSSOUMAJIT.IN</p>
        </div>
    )
}