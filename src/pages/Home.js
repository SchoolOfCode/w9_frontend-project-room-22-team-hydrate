import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import BootcampBoosterLogo from "../assets/BootcampBoosterLogo.png";
import HtmlButton from "../assets/HtmlButton.png"
import CssButton from "../assets/CssButton.png";
import ReactButton from "../assets/ReactButton.png";
import UiuxButton from "../assets/UiuxButton.png";

function Home() {
    let navigate = useNavigate();
    return (
        <>
        <img className="logo" src={BootcampBoosterLogo} alt="BootcampBoosterLogo" />
        <h2>What would you like a boost on today?</h2>
        <div>
            <button className="topic-button" onClick={() => {navigate("/html");}}><img className="topic-pic" src={HtmlButton} height ="239" width="373" /></button>
            <button className="topic-button" onClick={() => {navigate("/css");}}><img className="topic-pic" src={CssButton} height ="239" width="373" /></button>
        </div>
        <div>
            <button className="topic-button" onClick={() => {navigate("/react");}}><img className="topic-pic" src={ReactButton} height ="239" width="373" /></button>
            <button className="topic-button" onClick={() => {navigate("/uiux");}}><img className="topic-pic" src={UiuxButton} height ="239" width="373" /></button>
        </div>
        </>
    )
}

export default Home;