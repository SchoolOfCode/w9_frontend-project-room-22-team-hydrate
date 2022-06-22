import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

import List from "../components/List/List";
import ListItem from "../components/ListItem/ListItem";


function CssTopic() {
    const [cssState, setCssState] = useState([
        {
            link: "www.test.com",
            description: "test link description"
        },
        {
            link: "www.testnumero2.com",
            description: "second test description"
        }
    ]);


    let navigate = useNavigate();
    return (
        <>
            <h1> CSS Boosters </h1>
            <List cssState={cssState}/>
            <button onClick={() => {navigate("/");}}>Back to Home</button>
        </>
    )
}

export default CssTopic;