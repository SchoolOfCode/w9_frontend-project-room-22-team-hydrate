import React from "react";
//import here

//this button selects a topic to revise - it will move the user to another set of buttons where they can select media format
    //create function TopicButton
        //does this need state?
    //this will return a button
    //button will have event listener
    //on click, it will move on to next set of options
        //need to have the on click navigate to next page

function onClick() {
    //we need this to move pages to the Media Selection
    window.location = "/media-selection";
}

function TopicButton({topic}) {
    //state?




    //return
    return (
        <button onClick={onClick}>{topic}</button>

    );

}







//export default
export default TopicButton;

