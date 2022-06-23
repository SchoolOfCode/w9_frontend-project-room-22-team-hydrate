import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    let navigate = useNavigate();
    return (
        <>
        <img src="../assets/BootcampBoosterLogo.png" alt="BootcampBoosterLogo" />
        <div>
            <button onClick={() => {navigate("/html");}}>HTML</button>
            <button className="css-button" name="css-button" onClick={() => {navigate("/css");}}>CSS</button>
        </div>
        <div>
            <button onClick={() => {navigate("/react");}}>React</button>
            <button onClick={() => {navigate("/uiux");}}>UI / UX</button>
        </div>
        </>
    )
}

export default Home;