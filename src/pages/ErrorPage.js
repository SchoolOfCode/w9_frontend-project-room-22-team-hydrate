import React from "react";
import {useNavigate} from "react-router-dom";

function ErrorPage() {
    let navigate = useNavigate();
    return (
        <>
            <div> OOPS, You've encountered an error....please go back you plum </div>
            <img src="../assets/cat-drumming.gif" alt="groovycat" />
            <button onClick={() => {navigate("/");}}>Back to Home</button>
        </>
    )
}

export default ErrorPage;