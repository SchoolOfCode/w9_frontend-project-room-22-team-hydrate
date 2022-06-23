import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import BootcampBoosterLogo from "../assets/BootcampBoosterLogo.png";

import List from "../components/List/List";
import VidList from "../components/VidList/VidList";


function CssTopic() {
    
    useEffect( () => {
        fetchItems();
    }, []);

    const [topicState, setTopicState] = useState([]);

    const fetchItems = async () => {
        const response = await fetch("http://localhost:3000/resources/CSS");
        const data = await response.json();
        //console.log(data);
        setTopicState(data.payload);
    };

    //console.log(cssState);

    let navigate = useNavigate();
    return (
        <>
            <img src={BootcampBoosterLogo} alt="BootcampBoosterLogo" />
            <h2> Here are some CSS Boosters </h2>
            <h3>Reading Resources</h3>
            <List topicState={topicState}/>
            <h3>Video Resources</h3>
            <VidList topicState={topicState}/>
            <button onClick={() => {navigate("/");}}>Back to Home</button>
        </>
    )
}

export default CssTopic;