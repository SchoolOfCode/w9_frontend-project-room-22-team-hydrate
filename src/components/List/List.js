import React, {useEffect} from "react";

import ListItem from "../ListItem/ListItem";


//create a function {cssState}
    //needs to be async as awaiting fetch
    //needs to render ListItems as lis 
        //needs to map through - need state from parent, parent is CssTopic
        //these are coming in from the backend response
function List({cssState}) {
    //console.log(cssState);
    // console.log(cssState[0].link);
    // console.log(cssState[0].description);
    //useEffect

    return (
            cssState.map(function (item) {
                return (
                <ListItem link={item.link} description={item.description}/>
                )
                }
            )
    )
}




export default List;