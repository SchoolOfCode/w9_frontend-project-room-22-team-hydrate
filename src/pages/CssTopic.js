import React from "react";
import {useNavigate} from "react-router-dom";

import List from "../components/List/index";


function CssTopic() {
    //const [cssState, setCssState] = useState({});

    let navigate = useNavigate();
    return (
        <>
            <h1> CSS Boosters </h1>
            <button onClick={() => {navigate("/");}}>Back to Home</button>
            <List  />
        </>
    )
}

export default CssTopic;

// cssState={cssState}