import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    let navigate = useNavigate();
    return (
        <>
        <h1> Homepage </h1> 
        <div>
            <button onClick={() => {navigate("/html");}}>HTML</button>
        </div>
        </>
    )
}

export default Home;