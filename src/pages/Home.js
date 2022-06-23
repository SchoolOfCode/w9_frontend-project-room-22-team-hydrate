import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import BootcampBoosterLogo from "../assets/BootcampBoosterLogo.png";
import HtmlLogo from "../assets/html.png";
import cssLogo from "../assets/css.png";
import reactLogo from "../assets/react.png";
import uiuxLogo from "../assets/uiux.png";

function Home() {
    let navigate = useNavigate();
    return (
        <>
        <img className="logo" src={BootcampBoosterLogo} alt="BootcampBoosterLogo" />
        <h2>What would you like a boost on today?</h2>
        <div>
            <button className="topic-button" onClick={() => {navigate("/html");}}><img className="topic-pic" src={HtmlLogo} height ="239" width="373" /></button>
            <button className="topic-button" onClick={() => {navigate("/css");}}><img className="topic-pic" src={cssLogo} height ="239" width="373" /></button>
        </div>
        <div>
            <button className="topic-button" onClick={() => {navigate("/react");}}><img className="topic-pic" src={reactLogo} height ="239" width="373" /></button>
            <button className="topic-button" onClick={() => {navigate("/uiux");}}><img className="topic-pic" src={uiuxLogo} height ="239" width="373" /></button>
        </div>
        </>
    )
}

export default Home;