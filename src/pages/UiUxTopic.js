import React from "react";
import {useNavigate} from "react-router-dom";

function UiUxTopic() {
    let navigate = useNavigate();
    return (
        <>
            <h1> UI / UX Boosters </h1>
            <button onClick={() => {navigate("/");}}>Back to Home</button>
        </>    
    )
}

export default UiUxTopic;