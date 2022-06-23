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
        <img src={BootcampBoosterLogo} alt="BootcampBoosterLogo" />
        <h2>What would you like a boost on today?</h2>
        <div>
            <button onClick={() => {navigate("/html");}}><img src={HtmlLogo} height ="239" width="373" /></button>
            <button onClick={() => {navigate("/css");}}><img src={cssLogo} height ="239" width="373" /></button>
        </div>
        <div>
            <button onClick={() => {navigate("/react");}}><img src={reactLogo} height ="239" width="373" /></button>
            <button onClick={() => {navigate("/uiux");}}><img src={uiuxLogo} height ="239" width="373" /></button>
        </div>
        </>
    )
}

export default Home;