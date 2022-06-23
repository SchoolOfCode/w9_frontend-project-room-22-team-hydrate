import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";

import List from "../components/List/List";
import VidList from "../components/VidList/VidList";

function HtmlTopic() {
    
    useEffect( () => {
        fetchItems();
    }, []);

    const [topicState, setTopicState] = useState([]);

    const fetchItems = async () => {
        const response = await fetch("http://localhost:3000/resources/HTML");
        const data = await response.json();
        //console.log(data);
        setTopicState(data.payload);
    };

    //console.log(cssState);
    
    let navigate = useNavigate();
    return (
        <>
            <h2> Here are some HTML Boosters </h2>
            <h3>Reading Resources</h3>
            <List topicState={topicState}/>
            <h3>Video Resources</h3>
            <VidList topicState={topicState}/>
            <button onClick={() => {navigate("/");}}>Back to Home</button>
        </>
    )
}

export default HtmlTopic;