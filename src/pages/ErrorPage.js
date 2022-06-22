import React from "react";
import {useNavigate} from "react-router-dom";

function ErrorPage() {
    let navigate = useNavigate();
    return (
        <>
            <div> OOPS, You've encountered an error....please go back you plum </div>
            <img src="https://d.newsweek.com/en/full/1920025/cat-its-mouth-open.jpg?w=1600&h=1600&q=88&f=b7a44663e082b8041129616b6b73328d"/>
            <button onClick={() => {navigate("/");}}>Back to Home</button>
        </>
    )
}

export default ErrorPage;