import React from "react";


//create a function
    //needs to be async as awaiting fetch 
    //needs to render ListItems as lis 
        //needs to map through
        //these are coming in from the backend response
function ListItem({vidLink,docsLink, description}) {



    return (
        <>
         {/* <li>{vidLink}  {docsLink} {description}</li> */}
         {/* <li><a href={vidLink}>VideoLink</a></li>
         <li>{description}</li> */}
         <li className="invalid nav-item"><a href={vidLink}>{description}</a></li>
         </>
    );
}




export default ListItem;


/*     <table >
            <tr>
                <th>Video Link</th>
                <th>Docs Link</th>
                <th>Description</th>
            </tr>
            <tr>
                <th>{vidLink}</th>
                <th>{docsLink}</th>
                <th>{description}</th>
            </tr>
         </table>
         */