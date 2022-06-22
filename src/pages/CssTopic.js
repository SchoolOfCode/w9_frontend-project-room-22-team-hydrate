import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";

import List from "../components/List/List";
import ListItem from "../components/ListItem/ListItem";


function CssTopic() {
    
    useEffect( () => {
        fetchItems();
    }, []);

    const [cssState, setCssState] = useState([]);

    const fetchItems = async () => {
        const response = await fetch("http://localhost:3000/resources/CSS");
        const data = await response.json();
        //console.log(data);
        setCssState(data.payload);
    };

    console.log(cssState);

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