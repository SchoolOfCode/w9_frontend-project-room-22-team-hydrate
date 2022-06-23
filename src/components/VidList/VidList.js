import React, {useEffect} from "react";

import VidListItem from "../VidListItem/VidListItem";


//create a function {cssState}
    //needs to be async as awaiting fetch
    //needs to render ListItems as lis 
        //needs to map through - need state from parent, parent is CssTopic
        //these are coming in from the backend response
function VidList({topicState}) {
    //console.log(cssState);
    //console.log(cssState.payload);

    return (
            topicState
            .filter((item) => {
                return item.video_link !== null;
            }).map(function (item) {
                return (
                <VidListItem vidLink={item.video_link} description={item.description}/>
                )
                }
            )
    )
}




export default VidList;