import React, {useEffect} from "react";

import ListItem from "../ListItem/ListItem";


//create a function {cssState}
    //needs to be async as awaiting fetch
    //needs to render ListItems as lis 
        //needs to map through - need state from parent, parent is CssTopic
        //these are coming in from the backend response
function List({cssState}) {
    //console.log(cssState);
    //console.log(cssState.payload);

    return (
            cssState.map(function (item) {
                return (
                <ListItem vidLink={item.video_link} docsLink={item.docs_link} description={item.description}/>
                )
                }
            )
    )
}




export default List;