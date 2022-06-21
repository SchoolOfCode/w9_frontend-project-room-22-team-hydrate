import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    let navigate = useNavigate();
    return (
        <>
        <h1> Homepage </h1> 
        <div>
            <button onClick={() => {navigate("/html");}}>HTML</button>
            <button onClick={() => {navigate("/css");}}>CSS</button>
        </div>
        <div>
            <button onClick={() => {navigate("/react");}}>React</button>
            <button onClick={() => {navigate("/uiux");}}>UI / UX</button>
        </div>
        </>
    )
}

export default Home;