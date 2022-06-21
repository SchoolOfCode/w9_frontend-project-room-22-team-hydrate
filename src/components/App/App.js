import "./App.css";
//react router imports (as per docs)
import {BrowserRouter, Routes, Route,} from "react-router-dom";
//import components here
import TopicButton from "../TopicButton/index";

const topic = ["Javascript", "CSS", "React", "UI / UX"];

function App() {
  return <div className="App">
    <h1>Hey Chuks</h1>
    <TopicButton topic={topic[0]} />
    <TopicButton topic={topic[1]} />
    <TopicButton topic={topic[2]} />
    <TopicButton topic={topic[3]} />
  </div>;
}

export default App;
