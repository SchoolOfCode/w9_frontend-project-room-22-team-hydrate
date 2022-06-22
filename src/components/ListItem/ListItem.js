import React from "react";


//create a function
    //needs to be async as awaiting fetch 
    //needs to render ListItems as lis 
        //needs to map through
        //these are coming in from the backend response
function ListItem({vidLink,docsLink, description}) {



    return (
         <li>{vidLink}  {docsLink} {description}</li>
    );
}




export default ListItem;