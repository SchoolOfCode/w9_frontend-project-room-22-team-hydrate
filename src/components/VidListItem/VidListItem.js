import React from "react";


//create a function
    //needs to be async as awaiting fetch 
    //needs to render ListItems as lis 
        //needs to map through
        //these are coming in from the backend response
function VidListItem({vidLink, description}) {

    return (
        <>
         {/* <li>{vidLink}  {docsLink} {description}</li> */}
         {/* <li><a href={vidLink}>VideoLink</a></li>
         <li>{description}</li> */}
         <li className="link"><a href={vidLink}>{description}</a></li>
         </>
    );
}




export default VidListItem;