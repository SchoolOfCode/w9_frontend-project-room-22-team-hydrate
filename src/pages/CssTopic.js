import React from "react";
import {useNavigate} from "react-router-dom";


function CssTopic() {
    let navigate = useNavigate();
    return (
        <>
            <h1> CSS Boosters </h1>
            <button onClick={() => {navigate("/");}}>Back to Home</button>
        </>
    )
}

export default CssTopic;