import React from "react";
import {useNavigate} from "react-router-dom";


function ReactTopic() {
    let navigate = useNavigate();
    return (
        <>
            <h1> React Boosters </h1>
            <button onClick={() => {navigate("/");}}>Back to Home</button>
        </>
    )
}

export default ReactTopic;