import React, {useEffect} from "react";

import ListItem from "../ListItem/ListItem";


//create a function {cssState}
    //needs to be async as awaiting fetch
    //needs to render ListItems as lis 
        //needs to map through - need state from parent, parent is CssTopic
        //these are coming in from the backend response
function List({topicState}) {
    //console.log(cssState);
    //console.log(cssState.payload);

    return (
            topicState
            .filter((item) => {
                return item.docs_link !== null;
            }).map(function (item) {
                return (
                <ListItem docsLink={item.docs_link} description={item.description}/>
                )
                }
            )
    )
}




export default List;