import React from "react";
import {useNavigate} from "react-router-dom";


function HtmlTopic() {
    let navigate = useNavigate();
    return (
        <>
            <h1> HTML Boosters </h1>
            <button onClick={() => {navigate("/");}}>Back to Home</button>
        </>
    )
}

export default HtmlTopic;